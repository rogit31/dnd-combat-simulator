import {Action as ActionType, BattleContext, Character, Scaling} from "@/types";
import {CharacterClass} from "@/src/models/character/layers/charclass/CharacterClass";

/**
 * Main decision-making function that determines the best action for a character to take in battle.
 * The decision making will be made based off of a set of things including:
 * - Expected effectiveness
 * - Role
 * - Resources
 * - Some level of variance
 *
 * @param actor - The character making the decision
 * @param battleContext - The current state of the battle
 * @param options - Optional configuration object
 * @param options.verbose - Whether to enable detailed logging (default: false)
 * @returns The best action to take, or false if no valid actions available
 */
export function decideAction(actor: Character, battleContext: BattleContext, options: { verbose?: boolean } = {}): { action: ActionType, optimalTargets: Character[]} | false {
    //we actually don't really need to pass the actions separately here since the actor should have its actions as a part of its character

    const { verbose = false } = options;
    const actions = actor.actions;

    if (verbose) {
        console.log(`[AI] ${actor.name || 'Actor'} deciding action from ${actions.length} available actions`);
    }

    //determine what action the character can take:
    const viableActions = filterValidActions(actions, actor);

    if (verbose) {
        console.log(`[AI] ${viableActions.length} viable actions after filtering`);
    }

    if(viableActions.length === 0){
        if (verbose) {
            console.log(`[AI] No viable actions for ${actor.name || 'Actor'}`);
        }
        return false;
    }

    const eeTargetPairs: { action: ActionType; targets: Character[]; EE: number }[] = [];

    for (const action of viableActions) {
        const potentialTargets = filterValidTargets(action, battleContext.allCombatants, actor);

        let baseSpellLevel: number | undefined;
        let spellSlot: number | undefined;

        if (action.actionType === "spell" && action.usageConstraints) {
            for (const constraint of action.usageConstraints) {
                if (constraint.type === "resource" && constraint.tier) {
                    spellSlot = constraint.tier;
                    baseSpellLevel = action.level || 1;
                    break;
                }
            }
        }

        const { EE, optimalTargets } = calculateExpectedEffectiveness(
            action,
            potentialTargets,
            actor,
            baseSpellLevel,
            spellSlot,
            verbose
        );

        eeTargetPairs.push({ action, targets: optimalTargets, EE });
    }

    const best = eeTargetPairs.reduce<{ action: ActionType; targets: Character[]; EE: number } | null>(
        (bestSoFar, current) =>
            !bestSoFar || current.EE > bestSoFar.EE ? current : bestSoFar,
        null
    );

    if (!best) {
        return false;
    }

    if (verbose) {
        console.log(`[AI] Best action selected: ${best.action.name || 'Unnamed'} with EE: ${best.EE.toFixed(2)}`);
    }

    return { action: best.action, optimalTargets: best.targets };
}

/**
 * Filters characters to find valid targets for a given action.
 * Simple filter to prune targets who wouldn't ever make sense to calculate ee for,
 * for example, healing an enemy or damaging an ally.
 *
 * @param action - The action being considered
 * @param allCharacters - All characters in the battle (including self)
 * @param actor - The character performing the action
 * @returns Array of valid target characters
 */
export function filterValidTargets(action: ActionType, allCharacters: Character[], actor: Character): Character[] {
    if(action.damageRoll){
        return allCharacters.filter((c) => c.side !== actor.side);
    }

    if(action.healingRoll){
        return allCharacters.filter((c) => c.side === actor.side);
    }

    return allCharacters;
}

/**
 * Filters actions to only include those that the character can currently use.
 * Checks for spell slots, resource costs, and other usage constraints.
 *
 * @param actions - All available actions for the character
 * @param actor - The character whose actions are being filtered
 * @returns Array of actions the character can currently use
 */
export function filterValidActions(actions: ActionType[], actor: Character): ActionType[] {
    //if the actor only has actions that don't have usage constraints, we can return the full actions object
    //i.e. a monster with no resources
    if(!actor.resources){
        const result: ActionType[] = [];
        for(const action of actions){
            if(!action.usageConstraints){
                result.push(action);
            }
        }
        return result;
    }

    //we have two types of resources, flat or tiered
    //let's start with flat
    //ah, our mistake is that we don't know what kind of resource we're trying to access here
    // but we know, it's the actions usage constraint!
    const result = [];
    for(const action of actions){ //since the usage constraints are an array, we need to check if an action checks off all of its usage constraints before returning it

        if(!action.usageConstraints){ //if the action doesn't have any constraints, just return it
            result.push(action);
            continue;
        }

        let usable: boolean = true;
        for(const constraint of action.usageConstraints){ //can't be undefined since we checked above

            if(constraint.type === "resource"){
                const resource = actor.resources?.[constraint.resourceName];
                if(!resource){ //if the actor doesn't have the specified resource for the usage constraint, return false
                    usable = false;
                    break;
                }

                if(resource.type === "flat"){
                    if(resource.current < constraint.cost){
                        usable =  false;
                        break;
                    }
                }

                if(resource.type == "tiered"){ //we want to check if we have a resource of that tier
                    const level = constraint.tier ?? 1; //default to lvl 1
                    const resourceTier = resource.tiers[level];
                    if(!resourceTier || resourceTier.current < constraint.cost){
                        usable = false;
                        break;
                    }
                }

                //TODO: eventually implement other constraint types here
                //however we can effectively split the vast majority of resources into either flat pools
                // like ki and sorcery points, or tiered systems like spell slots
            }
        }

        if(usable){
            result.push(action);
        }
    }
    return result;
}

/**
 * Calculates the total expected effectiveness of an action against valid targets.
 * For an attack that would be the expected damage,
 * For a heal, the expected healing etc.
 * Returns both the effectiveness value and the optimal targets.
 *
 * @param action - The action being evaluated
 * @param validTargets - Characters that can be targeted by this action
 * @param actor - The character performing the action
 * @param baseSpellLevel - Base level of the spell (if applicable)
 * @param spellSlot - Level of spell slot being used (if applicable)
 * @param verbose - Whether to enable detailed logging (default: false)
 * @returns Object containing expected effectiveness and optimal targets
 */
export function calculateExpectedEffectiveness(action: ActionType, validTargets: Character[], actor: Character, baseSpellLevel?: number, spellSlot?: number, verbose: boolean = false): {EE: number, optimalTargets: Character[]} {

    if(!validTargets || validTargets.length < 1) return {EE: 0, optimalTargets: []}; //just in case

    //determine the maximum amount of targets potentially affected
    //even aoe spells have technically a limited amount of targets since characters take a 5x5 square
    //realistically the amount of targets hit will be much less than this, but we can think about that later
    let maxTargets = 1;
    const aoe = action.area_of_effect;
    if(aoe){
        maxTargets = calculateMaxAOETargets(aoe);
    }

    //we'll store our results here
    const eeTargetPair: {EE: number, target: Character}[] = [];

    //the expected effectiveness of something is its effect * chance of succeeding
    //for example if an attack deals 10 damage and it has a 50% chance of succeeding,
    // the EE would be 5

    for(const target of validTargets){

        let expectedEffect = 0;
        let successChance = 1; //default to 100%;

        if((action.actionType === "attack" && action.attackBonus) || (action.actionType === "spell" && action.attackBonus !== undefined)){
            // Attack roll based action
            // Calculate hit chance: need to roll >= (target AC - attack bonus) on d20
            const neededRoll = target.AC - action.attackBonus;
            successChance = Math.max(0, Math.min(1, (21 - neededRoll) / 20));

            if (action.damageRoll) {
                const avgDamage = calcAverageDamage(action.damageRoll, actor, target, baseSpellLevel, spellSlot);
                expectedEffect = avgDamage;
            }

        } else if (action.actionType === "spell" && action.dc){
            //saving throw spell
            const savingThrowMod = getSavingThrowModifier(target, action.dc.dcSaveType);
            let dc;
            if(action.dc.dcDefaultValue){
                dc = action.dc.dcDefaultValue;
            } else{
                dc = calculateSpellDc(actor, verbose);
            }
            const neededRoll = dc - savingThrowMod;
            successChance = Math.max(0, Math.min(1, (21 - neededRoll) / 20 ));

            if(action.damageRoll){
                const avgDamage = calcAverageDamage(action.damageRoll, actor, target, baseSpellLevel, spellSlot);
                expectedEffect = avgDamage;
            }

        } //TODO: Implement the rest, i.e, utility, control, debuff, buff spells and class features... a lot of work
        else if(action.actionType === "spell" && action.healingRoll){
            const avgHealing = calcAverageHealing(action.healingRoll, actor, baseSpellLevel, spellSlot, target);
            expectedEffect = avgHealing;
        }

        const EE = expectedEffect * successChance;
        eeTargetPair.push({EE, target}); // now we have our result/expected effectiveness pairs, we need to return the most effective array of targets
    }

    const sorted = eeTargetPair.sort((a, b) => b.EE - a.EE);
    const sliced = sorted.slice(0, maxTargets);
    let totalEE = 0;
    sliced.forEach((a) => totalEE += a.EE);
    const targets = sliced.map((pair) => pair.target);

    if (verbose) {
        console.log(`[EE] Action "${action.name || 'Unnamed'}" - Total EE: ${totalEE.toFixed(2)}, Targets: ${targets.length}`);
    }

    return {EE: totalEE, optimalTargets: targets}
}

/**
 * Calculates the expected average damage from a damage roll.
 *
 * @param roll - The damage roll configuration
 * @param actor - The character performing the action
 * @param baseSpellLevel - Base level of the spell (if applicable)
 * @param spellSlot - Level of spell slot being used (if applicable)
 * @param target - The target character (for scaling calculations)
 * @returns Average damage value
 */
function calcAverageDamage(roll: ActionType['damageRoll'], actor: Character, target: Character, baseSpellLevel?: number, spellSlot?: number): number {

    if(!roll) return 0;

    let totalDamage = 0;

    for (const damageRoll of roll.baseEffect) {
        const { n, d, flatBonus = 0 } = damageRoll.effect;
        const avg = n * (d + 1) / 2 + flatBonus;
        totalDamage += avg;
    }

    if(roll.scaling){
        const scalingDamage = calculateScalingDamage(roll.scaling, actor, baseSpellLevel, spellSlot, target);
        totalDamage += scalingDamage;
    }

    if(target.HP <= 0){
        return 0; //overkill
    }

    return totalDamage;
}

function calcAverageHealing(roll: ActionType['healingRoll'], actor: Character, baseSpellLevel?: number, spellSlot?: number, target?: Character): number{

    if(!roll) return 0;

    let totalHealing = 0;
    const targetHP = target?.HP || 0;
    const targetMaxHP = target?.maxHP || targetHP; //this might cause a bug later, but realistically we should never have a target with no HP stat that can be healed

    for (const healingRoll of roll.baseEffect) {
        const  {n, d, flatBonus = 0 } = healingRoll.effect;
        const avg = n * (d + 1) / 2 + flatBonus;
        totalHealing += avg;
    }

    if(roll.scaling){
        const scalingHealing = calculateScalingDamage(roll.scaling, actor, baseSpellLevel, spellSlot, target);
        totalHealing += scalingHealing;
    }

    if(targetHP + totalHealing > targetMaxHP){
        return targetMaxHP- targetHP;
    }

    return totalHealing;

}

/**
 * Calculates additional damage from scaling effects (spell upcasting, level scaling, etc.).
 *
 * @param scaling - The scaling configuration
 * @param actor - The character performing the action
 * @param baseSpellLevel - Base level of the spell (if applicable)
 * @param spellSlot - Level of spell slot being used (if applicable)
 * @param target - The target character (for target-based scaling)
 * @returns Additional damage from scaling
 */
function calculateScalingDamage(scaling: Scaling, actor: Character, baseSpellLevel?: number, spellSlot?: number, target?: Character): number{
    let scalingValue = 0;

    // Determine the scaling multiplier based on scaling origin
    switch (scaling.scalingOrigin) {
        case "spellSlotLevel":
            if (spellSlot && baseSpellLevel) {
                const diff = Math.max((spellSlot - baseSpellLevel), 0);
                scalingValue = diff;
            }
            break;
        case "characterLevel":
            scalingValue = actor.level || 1;
            break;
        case "characterHP":
            scalingValue = actor.HP;
            break;
        case "characterMaxHP":
            scalingValue = actor.maxHP || actor.HP;
            break;
        case "characterAC":
            scalingValue = actor.AC;
            break;
        case "targetLevel":
            scalingValue = target?.level || 1;
            break;
        case "targetHP":
            scalingValue = target?.HP || 0;
            break;
        case "targetMissingHP":
            const targetMaxHP = target?.maxHP || target?.HP || 0;
            const targetCurrentHP = target?.HP || 0;
            scalingValue = targetMaxHP - targetCurrentHP;
            break;
        default:
            return 0;
    }

    let damage = 0;

    // Calculate scaling damage
    if (scaling.scalingValue.base) {
        if (typeof scaling.scalingValue.base === "number") {
            damage = scaling.scalingValue.base * scalingValue;
        } else {
            // It's an array of DamageRoll
            for (const damageRoll of scaling.scalingValue.base) {
                const { n, d, flatBonus = 0 } = damageRoll.effect;
                const avg = n * (d + 1) / 2 + flatBonus;
                damage += avg * scalingValue;
            }
        }
    }

    // Apply flat bonus
    if (scaling.scalingValue.flatBonus) {
        damage += scaling.scalingValue.flatBonus * scalingValue;
    }

    // Apply multiplier
    if (scaling.scalingValue.multiplier) {
        damage *= scaling.scalingValue.multiplier;
    }

    return damage;
}

/**
 * Calculates the maximum number of targets that can be affected by an area of effect spell.
 *
 * @param aoe - Area of effect configuration with type and size
 * @returns Maximum number of targets (assuming 5x5 ft squares)
 */
function calculateMaxAOETargets( aoe: {type: string, size: number}): number{

    switch (aoe.type){
        case "cylinder": {
            return Math.floor((Math.PI * aoe.size * aoe.size) / 25);
        } //TODO: Verify that the aoe.size attribute is the radius of the cylinder in cylinder AOEs
        case "cube": {
            return Math.floor((aoe.size * aoe.size) / 25);
        }
        case "cone": {
            return Math.floor((Math.PI * aoe.size * aoe.size / 4) / 25);
        }
        case "line": {
            return Math.floor((aoe.size * 5) / 25);
        }
        case "sphere": {
            return Math.floor((Math.PI * aoe.size * aoe.size) / 25);
        }
        default:
            return 1;
    }
}

/**
 * Gets a character's saving throw modifier for a specific ability.
 *
 * @param character - The character making the saving throw
 * @param ability - The ability score to use for the saving throw
 * @returns The saving throw modifier
 */
function getSavingThrowModifier(character: Character, ability: keyof Character['abilityScores']): number{
    if(character.savingThrows && character.savingThrows[ability]){
        return character.savingThrows[ability]; //if the character has a saving throw override or bonus
    } else{
        const abilityScore = character.abilityScores[ability];
        const mod = Math.floor((abilityScore - 10) / 2) //else default to ability score bonus
        return mod;
    }
}

/**
 * Helper function to calculate average damage for an action.
 *
 * @param action - The action to calculate damage for
 * @param actor - The character performing the action
 * @param baseSpellLevel - Base level of the spell (if applicable)
 * @param spellSlot - Level of spell slot being used (if applicable)
 * @param target - The target character (for scaling calculations)
 * @returns Average damage value
 */

// function _calcActionAverageDamage(action: ActionType, actor: Character, target: Character, baseSpellLevel?: number, spellSlot?: number) : number {
//     if (!action.damageRoll) return 0;
//     return calcAverageDamage(action.damageRoll, actor, target, baseSpellLevel, spellSlot, );
// }

/**
 * Calculates the spell save DC for a spell cast by a character.
 *
 * @param character - The character casting the spell
 * @param verbose - Whether to enable detailed logging (default: false)
 * @returns The spell save DC
 */
function calculateSpellDc(character: Character, verbose: boolean = false): number {
    const result = 8 + calculateProficiencyBonusMod(character) + getSpellCastingMod(character);

    if (verbose) {
        console.log(`[Spell DC] ${character.name || 'Character'} spell DC: ${result}`);
    }

    return result;
}

/**
 * Calculates a character's proficiency bonus based on their level.
 *
 * @param character - The character to calculate proficiency bonus for
 * @returns The proficiency bonus modifier
 */
function calculateProficiencyBonusMod(character: Character): number {
    if(character.proficiencyBonus) return character.proficiencyBonus;

    const lvl = character.level || 1;
    return (Math.ceil(lvl / 4) + 1)
}

/**
 * Gets the spellcasting modifier for a character based on their class.
 * For monsters this is generally overridden by the spellCastingMod property.
 *
 * @param character - The character to get spellcasting modifier for
 * @returns The spellcasting ability modifier
 */
function getSpellCastingMod(character : Character): number {
    let max = 0;
    if(character.classes){
        for(const cls of character.classes.keys()){
            if(character.abilityScores[cls.spellCastingModifierBase] > max){
                max = character.abilityScores[cls.spellCastingModifierBase];
            }
        }
        return calculateAbilityModifier(max);
    }
    return 0;
}

/**
 * Calculates a single ability modifier based on an ability score.
 *
 * @param abilityScore - The ability score (3-20+ typically)
 * @returns The ability modifier (-5 to +5+ typically)
 */
function calculateAbilityModifier(abilityScore: number): number{
    return Math.floor((abilityScore - 10) / 2);
}
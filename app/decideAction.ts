import {Action as ActionType, Character, Scaling} from "@/app/types";



//The purpose of this function is to take in a set of actions, and to return a single one
//The decision making will be made based off of a set of things including
// - Expected effectiveness
// - Role
// - Resources
// - Some level of variance


export function decideAction(actions: ActionType[]): ActionType{

}

//This function will calculate the TOTAL (ie for an aoe spell the expected damage of the entire spell) expected effectiveness of an action
//For an attack that would be the expected damage,
//For a heal, the expected healing etc.
//let's start by returning a number, an arbitrary measure of how effective it will be
//that would correspond to damage and healing
//then we can think of how we can translate the expected effectiveness of crowd control or utility
//to calculate the expected effectiveness we would also need to pass on the context of the battle to it

export function calculateExpectedEffectiveness(action: ActionType, validTargets: Character[], actor: Character, baseSpellLevel?: number, spellSlot?: number): {EE: number, targets: Character[]} {

    if(!validTargets || validTargets.length < 1) return {EE: 0, targets: []}; //just in case

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
                    const avgDamage = calcAverageDamage(action.damageRoll, actor, baseSpellLevel, spellSlot, target);
                    expectedEffect = avgDamage;
                }

        } else if (action.actionType === "spell" && action.dc){
            //saving throw spell
            const savingThrowMod = getSavingThrowModifier(target, action.dc.dcSaveType);
            let dc;
            if(action.dc.dcDefaultValue){
                dc = action.dc.dcDefaultValue;
            } else{
                dc = calculateSpellDc(actor);
            }
            const neededRoll = dc - savingThrowMod;
            successChance = Math.max(0, Math.min(1, (21 - neededRoll) / 20 ));

            if(action.damageRoll){
                const avgDamage = calcAverageDamage(action.damageRoll, actor, baseSpellLevel, spellSlot, target);
                expectedEffect = avgDamage;
            }

        } //TODO: Implement the rest, i.e, utility, control, debuff, buff spells and class features... a lot of work

        const EE = expectedEffect * successChance;
        eeTargetPair.push({EE, target}); // now we have our result/expected effectiveness pairs, we need to return the most effective array of targets
    }

    const sorted = eeTargetPair.sort((a, b) => b.EE - a.EE);
    const sliced = sorted.slice(0, maxTargets);
    let totalEE = 0;
    sliced.forEach((a) => totalEE += a.EE);
    const targets = sliced.map((pair) => pair.target)
    return {EE: totalEE, targets: targets}
}

//function to calculate expected average damage from a roll
function calcAverageDamage(roll: ActionType['damageRoll'], actor: Character, baseSpellLevel?: number, spellSlot?: number, target?: Character): number {

    if(!roll) return 0;

    let totalDamage = 0;

    for (const damageRoll of roll.baseDamage) {
        const { n, d, flatBonus = 0 } = damageRoll.damage;
        const avg = n * (d + 1) / 2 + flatBonus;
        totalDamage += avg;
    }

    if(roll.scaling){
        const scalingDamage = calculateScalingDamage(roll.scaling, actor, baseSpellLevel, spellSlot, target);
        totalDamage += scalingDamage;
    }

    return totalDamage;
}

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
                const { n, d, flatBonus = 0 } = damageRoll.damage;
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

//function to calculate the maximum amount of AOE targets
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

//function to get a characters saving throw mod
function getSavingThrowModifier(character: Character, ability: keyof Character['abilityScores']): number{
    if(character.savingThrows && character.savingThrows[ability]){
        return character.savingThrows[ability]; //if the character has a saving throw override or bonus
    } else{
        const abilityScore = character.abilityScores[ability];
        const mod = Math.floor((abilityScore - 10) / 2) //else default to ability score bonus
        return mod;
    }
}

// Helper function to calculate average damage for an action
function calcActionAverageDamage(action: ActionType, actor: Character, baseSpellLevel?: number, spellSlot?: number, target?: Character): number {
    if (!action.damageRoll) return 0;
    return calcAverageDamage(action.damageRoll, actor, baseSpellLevel, spellSlot, target);
}

//A function to calculate the spell save DC for a spell cast by a character
function calculateSpellDc(character: Character){
    return 8 + calculateProficiencyBonusMod(character) + getSpellCastingMod(character);
}

//A function to calculate a character proficiency bonus
function calculateProficiencyBonusMod(character: Character){
    if(character.proficiencyBonus) return character.proficiencyBonus;

    const lvl = character.level || 1;
    return (Math.ceil(lvl / 4) + 1)
}

//A function to get the spellcasting modifier of the class. For monsters this is generally overridden.
function getSpellCastingMod(character: Character): number {
    if(character.spellCastingMod) return character.spellCastingMod;
    if(character.class){
        switch (character.class){ //I think some of these have subclasses that can cast spells, so check for that eventually
            case "artificer": {
                return calculateAbilityModifier(character.abilityScores.intelligence)
            }
            case "bard": {
                return calculateAbilityModifier(character.abilityScores.charisma)
            }
            case "cleric": {
                return calculateAbilityModifier(character.abilityScores.wisdom)
            }
            case "druid": {
                return calculateAbilityModifier(character.abilityScores.wisdom)
            }
            case "paladin": {
                return calculateAbilityModifier(character.abilityScores.charisma)
            }
            case "monk": {
                return calculateAbilityModifier(character.abilityScores.wisdom)
            }
            case "ranger": {
                return calculateAbilityModifier(character.abilityScores.wisdom)
            }
            case "sorcerer": {
                return calculateAbilityModifier(character.abilityScores.charisma)
            }
            case "warlock": {
                return calculateAbilityModifier(character.abilityScores.charisma)
            }
            case "wizard": {
                return calculateAbilityModifier(character.abilityScores.intelligence)
            }
        }
    }
    return 0; //default to 0;
}

//A function to calculate a single ability modifier based on an ability score
function calculateAbilityModifier(abilityScore: number): number{
    return Math.floor((abilityScore - 10) / 2);
}
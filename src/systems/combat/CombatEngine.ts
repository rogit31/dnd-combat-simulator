//Takes in an array of allies and enemies, and runs a simulation x amount of times
import {Action, BattleContext, Character, ResourceKey} from "@/types";
import {decideAction} from '@/src/systems/ai/decideAction';
import chalk from 'chalk';

export class CombatEngine {

    private combatants: Character[];
    private cycles: number;

    constructor(combatants: Character[], cycles: number) {
        this.combatants = combatants;
        this.cycles = cycles;
    }

    get allies(){
        return this.combatants.filter(c => c.side === "ally");
    }

    get enemies(){
        return this.combatants.filter(c => c.side === "enemy");
    }

    //Returns an array of Characters sorted by descending initiative order
    private rollInitiative(){

        const combatants: Character[] = [...this.allies, ...this.enemies];

        combatants.forEach(c => {
            c.initiative = rollDie(1, 20, calculateAbilityModifier(c.abilityScores.dexterity));
        });

        return combatants.sort((a,b) => b.initiative! - a.initiative!) //can't be undefined since we just rolled it
    }


    public simulate(){

        let winCount = 0
        let loseCount = 0;

        console.log(chalk.bold.cyan('🗡️  COMBAT SIMULATION STARTING 🗡️'));
        console.log(chalk.gray('═'.repeat(50)));

        for(let i = 0; i < this.cycles; i++){
            this.combatants.forEach(c => c.reset());
            const winner = this.battle(i);
            if(winner === 'ally'){
                winCount++;
            } else{
                loseCount++;
            }

        }

        const winPercentage = 100 * (winCount / (winCount + loseCount));

        console.log(chalk.gray('═'.repeat(50)));
        console.log(chalk.bold.yellow('📊 SIMULATION RESULTS 📊'));
        console.log(chalk.green(`✅ Based off of ${chalk.bold(this.cycles)} battles, allies have a ${chalk.bold.green(winPercentage + '%')} chance of winning.`));
        console.log(chalk.blue(`🏆 Allies won ${chalk.bold.green(winCount)} times, enemies won ${chalk.bold.red(loseCount)} times.`));
        console.log(chalk.gray('═'.repeat(50)));

    }

    battle(battleNumber: number){
        //the battle continues as long as characters have HP
        //perfect for OOP

        let roundCounter = 0;

        const combatants = this.rollInitiative(); //sorted in initiative order, doesn't distinguish in between ally and foe

        console.log(chalk.bold.magenta(`\n⚔️  BATTLE #${battleNumber + 1} BEGINS ⚔️`));
        console.log(chalk.gray('-'.repeat(40)));

        //Combat iteration until one side is out of hp
        while(this.allies.some((a)=> a.HP > 0) && this.enemies.some((e) => e.HP > 0)){

            //Round counter
            roundCounter++;
            console.log(chalk.bold.white(`\n🔄 --- Round ${roundCounter} ---`));

            let anyActionTaken = false;

            //iterate for every combatant
            for(let i = 0; i < combatants.length; i++){

                const actor = combatants[i];
                const isAlly = actor.side === 'ally';
                const nameColor = isAlly ? chalk.green : chalk.red;
                console.log(chalk.yellow(`⏰ It's ${nameColor(actor.name)}'s turn.`))

                //characters can generally make one action and one bonus action
                //as long as conditions don't impede them so let's check for that first
                if(actor.HP > 0 && checkHasAction(actor)){

                    // Create battle context for AI decision making
                    const battleContext: BattleContext = {
                        allCombatants: combatants,
                        currentRound: roundCounter,
                        allies: this.allies.filter(a => a.HP > 0),
                        enemies: this.enemies.filter(e => e.HP > 0),
                        turnOrder: combatants
                    };

                    // Use AI to decide the best action
                    const actionSet = decideAction(actor, battleContext, { verbose: false });

                    if(actionSet){
                        // Get targets from AI decision (we'll need to modify decideAction to return targets too)

                        const action = actionSet.action;
                        const targets = actionSet.optimalTargets;

                        //Now that we have targets, execute the action
                        makeAction(actor, action, targets);

                        //Consume the resource if it has one
                        action.usageConstraints?.forEach(constraint => {
                            if (
                                constraint.type === "resource" &&
                                constraint.resourceName
                            ) {
                                consumeResource(actor, constraint.cost, constraint.resourceName as ResourceKey, constraint.tier); //casting here is a bit risky
                            }
                        });
                        anyActionTaken = true;

                    } else{
                        console.log(chalk.dim.italic(`😴 ${actor.name} don't have any actions, they skip their turn`))
                    }

                }
            }

            if(!anyActionTaken){
                console.log(chalk.bold.yellow(`⚠️  Stalemate detected in battle ${battleNumber +1 } after ${roundCounter} rounds.`));
                break;
            }
            if(roundCounter > 100){
                console.log(chalk.bold.red("⏰ Exceeded round limit."));
                break;
            }
        }

        //Combat over
        let remaining: Character[] = [] ;
        if(this.allies.some((a) => a.HP > 0)){
            remaining = this.allies.filter((a) => a.HP > 0);
        }
        if(this.enemies.some((a) => a.HP > 0)){
            remaining = this.enemies.filter((a) => a.HP > 0);
        }
        let remainingString = '';
        remaining.forEach((r) => {
            remainingString += `${r.name}, `
        })

        const winnerSide = remaining[0].side;
        const winnerColor = winnerSide === 'ally' ? chalk.green : chalk.red;
        const victoryEmoji = winnerSide === 'ally' ? '🎉' : '💀';

        console.log(chalk.gray('-'.repeat(40)));
        console.log(chalk.bold(`${victoryEmoji} Combat #${battleNumber + 1} over, ${winnerColor(winnerSide)} won! ${chalk.cyan(remainingString.slice(0, -2))} survived.`));
        return remaining[0].side;
    }
}

function rollDie(n: number = 1, sides: number = 20, bonus: number = 0){
    let total = 0;
    for(let i = 0; i < n; i++){
        total += Math.floor(Math.random() * sides) + 1;
    }
    return total + bonus;
}

function calculateAbilityModifier(abilityScore: number): number{
    return Math.floor((abilityScore - 10) / 2);
}

function checkHasAction(char: Character){
    return !char.conditions?.incapacitated && !char.conditions?.paralyzed && !char.conditions?.petrified && !char.conditions?.stunned && !char.conditions?.unconscious
}


//consumes a spell slot
function consumeResource(character: Character, cost: number, key: ResourceKey, tier?: number) {
    const resource = character.resources?.[key];
    if (!resource) return false;

    if (resource.type === "flat") {
        resource.current -= cost;
        return true;
    }

    if (resource.type === "tiered") {
        const level = tier ?? 1;
        const tierObj = resource.tiers[level];
        if (!tierObj || tierObj.current < cost) return false;

        tierObj.current -= cost;
        return true;
    }

    return false;
}


function makeAction(actor: Character, action: Action, targets: Character[]){

    // Early return if no targets
    if(targets.length === 0) {
        console.log(chalk.dim.yellow(`⚠️  ${actor.name} tried to use ${action.name} but found no valid targets.`));
        return;
    }

    const actorColor = actor.side === 'ally' ? chalk.green : chalk.red;

    switch(action.actionType){

        case "attack": {

            if(action.attackBonus !== undefined){
                //determine if the attack hits
                //i.e, roll a d20, add bonus to hit, compare to AC
                //since we're taking an array of targets, attempt to hit all of them.

                for(let i = 0; i < targets.length; i++){
                    const attackRoll = rollDie(1, 20, action.attackBonus);
                    const targetColor = targets[i].side === 'ally' ? chalk.green : chalk.red;

                    if(attackRoll >= targets[i].AC){

                        let damage = 0;

                        if (action.damageRoll) {
                            damage = calculateRollSetDamage(action.damageRoll);
                        } else {
                            damage = 0; // No flat damage property in new type system
                        }

                        targets[i].HP = Math.max(0,targets[i].HP - damage); //clamp to prevent overkill

                        console.log(chalk.bold.red(`💥 ${actorColor(actor.name)} dealt ${chalk.bold.red(damage)} damage to ${targetColor(targets[i].name)} with ${chalk.italic(action.name)}!`));

                        if(targets[i].HP > 0) {
                            console.log(chalk.blue(`   💗 ${targets[i].name} has ${chalk.bold(targets[i].HP)} HP remaining.`));
                        } else {
                            console.log(chalk.dim.red(`   💀 ${targets[i].name} has been defeated!`));
                        }

                    } else{
                        console.log(chalk.dim.gray(`❌ ${actorColor(actor.name)} missed their attack on ${targetColor(targets[i].name)}!`))
                    }
                }
            }
            break;
        }

        case "spell": {

            if(action.attackBonus !== undefined){
                // Spell attack roll
                for(let i = 0; i < targets.length; i++){
                    const attackRoll = rollDie(1, 20, action.attackBonus);
                    const targetColor = targets[i].side === 'ally' ? chalk.green : chalk.red;

                    if(attackRoll >= targets[i].AC){
                        let damage = 0;

                        if (action.damageRoll) {
                            damage = calculateRollSetDamage(action.damageRoll);
                        }

                        targets[i].HP = Math.max(0,targets[i].HP - damage);

                        console.log(chalk.bold.red(`🔮 ${actorColor(actor.name)} dealt ${chalk.bold.red(damage)} spell damage to ${targetColor(targets[i].name)} with ${chalk.italic(action.name)}!`));

                        if(targets[i].HP > 0) {
                            console.log(chalk.blue(`   💗 ${targets[i].name} has ${chalk.bold(targets[i].HP)} HP remaining.`));
                        } else {
                            console.log(chalk.dim.red(`   💀 ${targets[i].name} has been defeated!`));
                        }

                    } else{
                        console.log(chalk.dim.gray(`❌ ${actorColor(actor.name)} missed their spell attack on ${targetColor(targets[i].name)}!`))
                    }
                }

            } else if(action.dc){
                //saving throw spell
                for(let i = 0; i < targets.length; i++){

                    const saveType = action.dc.dcSaveType;
                    const saveBonus = getSavingThrowModifier(targets[i], saveType);
                    const dc = action.dc.dcDefaultValue || calculateSpellDc(actor);
                    const spellSave = rollDie(1, 20, saveBonus);
                    const targetColor = targets[i].side === 'ally' ? chalk.green : chalk.red;

                    if(spellSave < dc){ //failed

                        let damage = 0;

                        if (action.damageRoll) {
                            damage = calculateRollSetDamage(action.damageRoll);
                        }

                        console.log(chalk.red(`❌ ${targetColor(targets[i].name)} failed their ${saveType} saving throw against ${chalk.italic(action.name)}!`));
                        console.log(chalk.bold.red(`🔮 ${actorColor(actor.name)} dealt ${chalk.bold.red(damage)} spell damage to ${targetColor(targets[i].name)}!`));

                        targets[i].HP = Math.max(0,targets[i].HP - damage);

                        if(targets[i].HP > 0) {
                            console.log(chalk.blue(`   💗 ${targets[i].name} has ${chalk.bold(targets[i].HP)} HP remaining.`));
                        } else {
                            console.log(chalk.dim.red(`   💀 ${targets[i].name} has been defeated!`));
                        }
                    }
                    else if(action.dc.dcSuccess === "half damage"){ //succeeded but still takes half damage
                        let damage = 0;

                        if (action.damageRoll) {
                            damage = calculateRollSetDamage(action.damageRoll);
                        }
                        const halfDamage = Math.floor(damage / 2);

                        console.log(chalk.green(`✅ ${targetColor(targets[i].name)} succeeded their ${saveType} saving throw against ${chalk.italic(action.name)}!`));
                        console.log(chalk.yellow(`🛡️  ${actorColor(actor.name)} dealt ${chalk.bold.yellow(halfDamage)} reduced spell damage to ${targetColor(targets[i].name)}!`));

                        targets[i].HP = Math.max(0,targets[i].HP - halfDamage);

                        if(targets[i].HP > 0) {
                            console.log(chalk.blue(`   💗 ${targets[i].name} has ${chalk.bold(targets[i].HP)} HP remaining.`));
                        } else {
                            console.log(chalk.dim.red(`   💀 ${targets[i].name} has been defeated!`));
                        }
                    } else {
                        console.log(chalk.green(`✅ ${targetColor(targets[i].name)} succeeded their ${saveType} saving throw and took no damage!`));
                    }
                }

            } else if(action.healingRoll){
                // Healing spell
                const heal = calculateRollSetHealing(action.healingRoll);

                for (let i = 0; i < targets.length; i++) {
                    const previousHP = targets[i].HP;
                    targets[i].HP = Math.min(targets[i].HP + heal, targets[i].maxHP!);
                    const actualHealing = targets[i].HP - previousHP;
                    const targetColor = targets[i].side === 'ally' ? chalk.green : chalk.red;

                    console.log(chalk.bold.green(`💚 ${actorColor(actor.name)} healed ${targetColor(targets[i].name)} for ${chalk.bold.green(actualHealing)} HP with ${chalk.italic(action.name)}!`));
                    console.log(chalk.blue(`   💗 ${targets[i].name} now has ${chalk.bold(targets[i].HP)} HP.`));
                }
            }
            break;
        }

        default:
            console.log(chalk.dim.yellow(`⚠️  Action type ${action.actionType} not implemented yet.`));
            break;
    }
}

function calculateRollSetDamage(rollSet: Action['damageRoll']): number {
    if (!rollSet) return 0;

    let total = 0;
    for (const effectRoll of rollSet.baseEffect) {
        const { n, d, flatBonus = 0 } = effectRoll.effect;
        total += rollDie(n, d, flatBonus);
    }

    // TODO: Implement scaling logic here if needed

    return total;
}

function calculateRollSetHealing(rollSet: Action['healingRoll']): number {
    if (!rollSet) return 0;

    let total = 0;
    for (const effectRoll of rollSet.baseEffect) {
        const { n, d, flatBonus = 0 } = effectRoll.effect;
        total += rollDie(n, d, flatBonus);
    }

    // TODO: Implement scaling logic here if needed

    return total;
}

function getSavingThrowModifier(character: Character, ability: keyof Character['abilityScores']): number{
    if(character.savingThrows && character.savingThrows[ability] !== undefined){
        return character.savingThrows[ability]!;
    } else{
        const abilityScore = character.abilityScores[ability];
        const mod = Math.floor((abilityScore - 10) / 2);
        return mod;
    }
}

function calculateSpellDc(character: Character): number {
    const proficiencyBonus = character.proficiencyBonus || Math.ceil((character.level || 1) / 4) + 1;
    const spellcastingMod = getSpellCastingMod(character);
    return 8 + proficiencyBonus + spellcastingMod;
}

function getSpellCastingMod(character: Character): number {
    if(character.spellCastingMod !== undefined) return character.spellCastingMod;

    //TODO: Refactor to fit multiple classes
    // if(character.class){
    //     switch (character.class){
    //         case "artificer":
    //             return calculateAbilityModifier(character.abilityScores.intelligence);
    //         case "bard":
    //         case "paladin":
    //         case "sorcerer":
    //         case "warlock":
    //             return calculateAbilityModifier(character.abilityScores.charisma);
    //         case "cleric":
    //         case "druid":
    //         case "monk":
    //         case "ranger":
    //             return calculateAbilityModifier(character.abilityScores.wisdom);
    //         case "wizard":
    //             return calculateAbilityModifier(character.abilityScores.intelligence);
    //     }
    // }
    return 0;
}
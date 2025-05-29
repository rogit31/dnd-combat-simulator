//Takes in an array of allies and enemies, and runs a simulation x amount of times
import {Action} from "@/app/types";
import {Character} from '@/app/Character';
import chalk from 'chalk';

export class RunSim{

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
            c.initiative = rollDie(1, 20, c.abilityScores.dexterity);
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

            let anyActionTaken = false; // <- add this

            //iterate for every combatant
            for(let i = 0; i < combatants.length; i++){

                const isAlly = combatants[i].side === 'ally';
                const nameColor = isAlly ? chalk.green : chalk.red;
                console.log(chalk.yellow(`⏰ It's ${nameColor(combatants[i].name)}'s turn.`))

                //characters can generally make one action and one bonus action
                //as long as conditions don't impede them so let's check for that first
                if(combatants[i].HP > 0 && checkHasAction(combatants[i])){

                    //pick an action to make
                    const action = pickHighestPriorityAction(combatants[i].actions, undefined, combatants[i]);

                    if(action){
                        let targets: Character[] = [];

                        if(action.actionType === "attack"){
                            targets = pickTarget(action, combatants, combatants[i].side, true) //Exclude targets with 0 hp with if its an attack
                        }

                        if(action.actionType === "heal"){
                            targets = pickTarget(action, combatants, combatants[i].side, false) //Include targets with 0 hp with if its a heal
                        }

                        //Now that we have targets, execute the action
                        makeAction(combatants[i], action, targets);

                        //Consume the resource if it has one
                        action.usageConstraints?.forEach(constraint => {
                            if (
                                constraint.type === "resource" &&
                                constraint.resourceName
                            ) {
                                consumeResource(combatants[i], constraint.cost, constraint.resourceName, constraint.tier);
                            }
                        });
                        anyActionTaken = true;

                    } else{
                        console.log(chalk.dim.italic(`😴 ${combatants[i].name} don't have any actions, they skip their turn`))
                    }

                } else{
                    console.log(chalk.dim.red("💀 Combatant was unable to take an action, they are downed or incapacitated."))
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

function checkHasAction(char: Character){
    return !char.conditions.incapacitated && !char.conditions.paralyzed && !char.conditions.petrified && !char.conditions.stunned && !char.conditions.unconscious
}

function pickHighestPriorityAction(actions: Action[], actionTime: Action['actionTime'] = "action", character: Character): Action | null {
    return actions
        .filter(a => a.actionTime === actionTime)
        .sort((a, b) => a.priority - b.priority)
        .find(a => canUseAction(a, character)) || null
}

function canUseAction(action: Action, character: Character): boolean{
    if(!action.usageConstraints) return true;

    return action.usageConstraints.every(constraint => {
        switch (constraint.type) {
            case "perTurn":
                return constraint.remaining! > 0;
            case "recharge":
                return constraint.available;
            case "resource":{
                const resource = character.resources?.[constraint.resourceName];
                if(!resource) return false;

                if(resource.type === "flat") {
                    return resource.current > constraint.cost;
                }

                if(resource.type === "tiered"){
                    const level = constraint.tier ?? 1;
                    const tier = resource.tiers[level];
                    return tier?.current >= constraint.cost;
                }
                break;
            }
            case "condition":
                return true; //add condition check here eventually
            default:
                return true;
        }
    })
}

//consumes a spell slot
function consumeResource(character: Character, cost: number, key: string, tier?: number) {
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


//takes an action and returns the targets based on targeting type
function pickTarget(action: Action, targets: Character[], side: Character['side'], exclude0: boolean){

    let validTargets = action.onlyEnemies ?
        targets.filter((t) => t.side !== side) : //if the action only targets enemies, validTargets becomes the opposite of the callers side
        targets.filter((t) => t.side === side);

    if(exclude0){
        validTargets = validTargets.filter((t) => t.HP > 0);
    }

    if(validTargets.length === 0){
        console.log(chalk.dim.yellow(`⚠️  No valid targets found for ${action.name}. [DEBUG]`));
        return [];
    }
    switch (action.targetingBehaviour){
        case "random":
            // Ensure we don't try to target more than available
            const numTargets = Math.min(action.targets, validTargets.length);
            return Array.from({ length: numTargets }, () =>
                validTargets[Math.floor(Math.random() * validTargets.length)]
            );
        case "lowestHP":
            return [...validTargets]
                .sort((a,b) => a.HP - b.HP) //sort by ascending hp
                .slice(0, Math.min(action.targets, validTargets.length)) //don't exceed available targets
        default:
            return [] //make other cases here
    }
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

            if(action.bonusToHit){
                //determine if the attack hits
                //i.e, roll a d20, add bonus to hit, compare to AC
                //since we're taking an array of targets, attempt to hit all of them.

                for(let i = 0; i < targets.length; i++){
                    const attackRoll = rollDie(1, 20, action.bonusToHit);
                    const targetColor = targets[i].side === 'ally' ? chalk.green : chalk.red;

                    if(attackRoll >= targets[i].AC){

                        let damage = 0;

                        if (action.damageRoll) {
                            damage = rollDie(action.damageRoll.n, action.damageRoll.d, action.damageRoll.flatBonus);
                        } else {
                            damage = action.flatDamage || 0;
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

            } else if(action.spellSave){
                //here instead of the actor making the roll, the target does.
                //Outcome is determined based on saving throw as a bonus + d20

                for(let i = 0; i < targets.length; i++){

                    const saveType = action.spellSaveStat || "charisma"; //default to a charisma saving throw
                    const saveBonus = targets[i].savingThrows[saveType]; //use the targets savingThrow stat of the spell type
                    const spellSave = rollDie(1, 20, saveBonus) //roll their die...
                    const targetColor = targets[i].side === 'ally' ? chalk.green : chalk.red;

                    if(spellSave < action.spellSave){ //failed

                        let damage = 0;

                        if (action.damageRoll) {
                            damage = rollDie(action.damageRoll.n, action.damageRoll.d, action.damageRoll.flatBonus);
                        } else {
                            damage = action.flatDamage || 0;
                        }
                        console.log(chalk.red(`❌ ${targetColor(targets[i].name)} failed their ${saveType} saving throw against ${chalk.italic(action.name)}!`));
                        console.log(chalk.bold.red(`🔮 ${actorColor(actor.name)} dealt ${chalk.bold.red(damage)} spell damage to ${targetColor(targets[i].name)}!`));

                        targets[i].HP = Math.max(0,targets[i].HP - damage); //clamp to prevent overkill

                        if(targets[i].HP > 0) {
                            console.log(chalk.blue(`   💗 ${targets[i].name} has ${chalk.bold(targets[i].HP)} HP remaining.`));
                        } else {
                            console.log(chalk.dim.red(`   💀 ${targets[i].name} has been defeated!`));
                        }
                    }
                    else if(action.onSave && action.onSave === "half"){ //succeeded
                        let damage = 0;

                        if (action.damageRoll) {
                            damage = rollDie(action.damageRoll.n, action.damageRoll.d, action.damageRoll.flatBonus);
                        } else {
                            damage = action.flatDamage || 0;
                        }
                        const halfDamage = Math.floor(damage / 2);

                        console.log(chalk.green(`✅ ${targetColor(targets[i].name)} succeeded their ${saveType} saving throw against ${chalk.italic(action.name)}!`));
                        console.log(chalk.yellow(`🛡️  ${actorColor(actor.name)} dealt ${chalk.bold.yellow(halfDamage)} reduced spell damage to ${targetColor(targets[i].name)}!`));

                        targets[i].HP = Math.max(0,targets[i].HP - halfDamage); //div by 2 since saved

                        if(targets[i].HP > 0) {
                            console.log(chalk.blue(`   💗 ${targets[i].name} has ${chalk.bold(targets[i].HP)} HP remaining.`));
                        } else {
                            console.log(chalk.dim.red(`   💀 ${targets[i].name} has been defeated!`));
                        }
                    } else {
                        console.log(chalk.green(`✅ ${targetColor(targets[i].name)} succeeded their ${saveType} saving throw and took no damage!`));
                    }
                }
            }
            break;
        }


        case "heal":{
            let heal = 0;

            if (action.healingRoll) {
                heal = rollDie(action.healingRoll.n, action.healingRoll.d, action.healingRoll.flatBonus);
            } else {
                heal = action.flatHealing || 0;
            }

            for (let i = 0; i < targets.length; i++) {
                const previousHP = targets[i].HP;
                targets[i].HP = Math.min(targets[i].HP + heal, targets[i].maxHP!); //clamp to prevent overhealing
                const actualHealing = targets[i].HP - previousHP;
                const targetColor = targets[i].side === 'ally' ? chalk.green : chalk.red;

                console.log(chalk.bold.green(`💚 ${actorColor(actor.name)} healed ${targetColor(targets[i].name)} for ${chalk.bold.green(actualHealing)} HP with ${chalk.italic(action.name)}!`));
                console.log(chalk.blue(`   💗 ${targets[i].name} now has ${chalk.bold(targets[i].HP)} HP.`));
            }

            break;
        }

    }

}
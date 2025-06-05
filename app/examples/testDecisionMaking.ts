import {Action, BattleContext} from "@/app/types";
import {decideAction} from "@/app/lib/systems/ai/decideAction";
import {spells} from "../lib/data/spells/spells";
import { Character } from "../lib/models/Character";
import {SpellAction} from "@/app/lib/models/Action";


// Test Actions
export const fireball: Action = {
    name: "Fireball",
    actionType: "spell",
    level: 3,
    dc: {
        dcSaveType: "dexterity",
        dcSuccess: "half damage"
    },
    damageRoll: {
        baseEffect: [{
            effectType: "fire",
            effect: { n: 8, d: 6, flatBonus: 0 }
        }]
    },
    area_of_effect: {
        type: "sphere",
        size: 20
    },
    usageConstraints: [{
        type: "resource",
        resourceName: "spellSlots",
        tier: 3,
        cost: 1
    }]
};

export const magicMissile: Action = {
    name: "Magic Missile",
    actionType: "spell",
    level: 1,
    damageRoll: {
        baseEffect: [{
            effectType: "force",
            effect: { n: 1, d: 4, flatBonus: 1 }
        }],
        scaling: {
            scalingOrigin: "spellSlotLevel",
            scalingValue: {
                base: [{
                    effectType: "force",
                    effect: { n: 1, d: 4, flatBonus: 1 }
                }]
            }
        }
    },
    usageConstraints: [{
        type: "resource",
        resourceName: "spellSlots",
        tier: 1,
        cost: 1
    }]
};

export const cureWounds: Action = {
    name: "Cure Wounds",
    actionType: "spell",
    level: 1,
    healingRoll: {
        baseEffect: [{
            effect: {n: 2, d: 4, flatBonus: 2}
        }]
    },
    usageConstraints: [{
        type: "resource",
        resourceName: "spellSlots",
        tier: 1,
        cost: 1
    }]
};

export const longswordAttack: Action = {
    name: "Longsword Attack",
    actionType: "attack",
    attackBonus: 5, // +3 STR + 2 Prof
    damageRoll: {
        baseEffect: [{
            effectType: "slashing",
            effect: { n: 1, d: 8, flatBonus: 3 }
        }]
    }
};

export const shortbowAttack: Action = {
    name: "Shortbow Attack",
    actionType: "attack",
    attackBonus: 4, // +2 DEX + 2 Prof
    damageRoll: {
        baseEffect: [{
            effectType: "piercing",
            effect: { n: 1, d: 6, flatBonus: 2 }
        }]
    }
};

export const cantrip: Action = {
    name: "Fire Bolt",
    actionType: "spell",
    attackBonus: 6, // +3 spell mod + 3 prof
    damageRoll: {
        baseEffect: [{
            effectType: "fire",
            effect: { n: 1, d: 10, flatBonus: 0 }
        }],
        scaling: {
            scalingOrigin: "characterLevel",
            scalingValue: {
                base: [{
                    effectType: "fire",
                    effect: { n: 1, d: 10, flatBonus: 0 }
                }]
            }
        }
    }
};


// Test Characters
export const testWizard = new Character({
    id: "wizard1",
    name: "Gandalf",
    side: "ally",
    level: 5,
    HP: 28,
    maxHP: 28,
    AC: 12,
    abilityScores: {
        strength: 8,
        dexterity: 14,
        constitution: 13,
        intelligence: 16,
        wisdom: 12,
        charisma: 11
    },
    class: "wizard",
    proficiencyBonus: 3,
    spellCastingMod: 3, // +3 from 16 INT
    actions: [fireball, magicMissile, cantrip],
    resources: {
        "spellSlots": {
            type: "tiered",
            tiers: {
                1: { current: 4, max: 4 },
                2: { current: 3, max: 3 },
                3: { current: 2, max: 2 }
            }
        }
    }
})
export const testFighter: Character = new Character({
    id: "fighter1",
    name: "Conan",
    side: "ally",
    level: 3,
    HP: 32,
    maxHP: 32,
    AC: 18,
    abilityScores: {
        strength: 16,
        dexterity: 12,
        constitution: 14,
        intelligence: 10,
        wisdom: 13,
        charisma: 8
    },
    class: "fighter",
    proficiencyBonus: 2,
    actions: []
});

export const testCleric: Character = new Character({
    id: "cleric1",
    name: "Merlin",
    side: "ally",
    level: 4,
    HP: 20,
    maxHP: 30,
    AC: 16,
    abilityScores: {
        strength: 12,
        dexterity: 10,
        constitution: 13,
        intelligence: 11,
        wisdom: 16,
        charisma: 14
    },
    class: "cleric",
    proficiencyBonus: 2,
    spellCastingMod: 3, // +3 from 16 WIS
    actions: [shortbowAttack, cureWounds],
    resources: {
        "spellSlots": {
            type: "tiered",
            tiers: {
                1: { current: 4, max: 4 },
                2: { current: 3, max: 3 }
            }
        }
    }
});

export const testGoblin: Character = new Character({
    id: "goblin1",
    name: "Nasty Goblin",
    side: "enemy",
    level: 1,
    HP: 7,
    maxHP: 7,
    AC: 15,
    abilityScores: {
        strength: 8,
        dexterity: 14,
        constitution: 10,
        intelligence: 10,
        wisdom: 8,
        charisma: 8
    },
    actions: [shortbowAttack, longswordAttack]
});

const fireball2Data = spells['Fireball'];
const fireball2 = new SpellAction(fireball2Data) ;

export const testWoundedOrc: Character = new Character ({
    id: "orc1",
    name: "Wounded Orc",
    side: "enemy",
    level: 2,
    HP: 5,
    maxHP: 15,
    AC: 13,
    resources: {
        "spellSlots": {
            type: "tiered",
            tiers: {
                1: { current: 4, max: 4 },
                2: { current: 3, max: 3 },
                3: { current: 3, max: 3 }
            }
        }
    },
    abilityScores: {
        strength: 16,
        dexterity: 12,
        constitution: 16,
        intelligence: 7,
        wisdom: 11,
        charisma: 10
    },
    actions: [longswordAttack, shortbowAttack, cureWounds, fireball2]
});



// Test Battle Context
export const testBattleContext: BattleContext = {
    allCombatants: [testWizard, testFighter, testCleric, testGoblin, testWoundedOrc],
    currentRound: 1,
    allies: [testWizard, testFighter, testCleric],
    enemies: [testGoblin, testWoundedOrc],
    turnOrder: [testWizard, testGoblin, testFighter, testWoundedOrc, testCleric]
};

// Helper function to display action decision results
export function testActionDecision(actor: Character, battleContext: BattleContext, scenarioName: string) {
    console.log(`\n=== ${scenarioName} ===`);
    console.log(`Actor: ${actor.name} (${actor.class || 'monster'})`);
    console.log(`HP: ${actor.HP}/${actor.maxHP}, AC: ${actor.AC}`);

    try {
        const chosenAction = decideAction(actor, battleContext, {verbose: true});

        if(!chosenAction){
            console.log("No appropriate action was found.");
            return;
        }

        console.log(`Chosen Action: ${chosenAction.action.name}`);
        console.log(`Action Type: ${chosenAction.action.actionType}`);

        if (chosenAction.action.usageConstraints) {
            console.log("Resource Cost:", chosenAction.action.usageConstraints);
        }

        return chosenAction;
    } catch (error) {
        console.error(`Error in ${scenarioName}:`, error);
        return null;
    }
}

testActionDecision(testWoundedOrc, testBattleContext, "Scenario 1");
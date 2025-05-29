import {RunSim} from "@/app/RunSim";
import {Character} from "@/app/Character";
import { Action } from "./Action";

// Example Actions
const attackAction = new Action({
    name: "Sword Slash",
    actionType: "attack",
    actionTime: "action",
    priority: 1,
    targets: 1,
    onlyEnemies: true,
    targetingBehaviour: "random",
    damageRoll: { n: 2, d: 8, flatBonus: 2 },
    bonusToHit: 3,
}) ;

const healAction: Action = ({
    name: "Healing Touch",
    actionType: "heal",
    actionTime: "action",
    priority: 1,
    targets: 1,
    onlyEnemies: false,
    targetingBehaviour: "lowestHP",
    healingRoll: { n: 1, d: 6, flatBonus: 1 },
});

const fireball: Action = new Action({
    name: "Fireball",
    actionType: "attack",
    actionTime: "action",
    priority: 1,
    targets: 10,
    onlyEnemies: true,
    targetingBehaviour: "random",
    damageRoll: {n: 8, d: 6, flatBonus: 8},
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 3}],
    spellSave: 20,
    spellSaveStat: "charisma"
})

const massHeal = new Action({
    name: "Mass Heal",
    actionType: "heal",
    actionTime: "action",
    priority: 1,
    targets: 5,
    onlyEnemies: false,
    targetingBehaviour: "lowestHP",
    healingRoll: {n: 4, d: 10, flatBonus: 10},
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 2}]
})

const boomStick = new Action({
    name: "BoomStick",
    actionType: "attack",
    actionTime: "action",
    priority: 1,
    targets: 1,
    onlyEnemies: true,
    targetingBehaviour: "lowestHP",
    damageRoll: {n: 4, d: 10, flatBonus: 10},
})

// Example Characters

const ally1: Character = new Character({
    name: "Alric",
    side: "ally",
    id: "firstCharacter",
    AC: 18,
    HP: 30,
    maxHP: 30,
    abilityScores: {dexterity: 14, charisma: 14, constitution: 14, intelligence: 14, strength: 14, wisdom: 14},
    actions: [attackAction, healAction, fireball],
    conditions: {
        incapacitated: false,
        paralyzed: false,
        petrified: false,
        stunned: false,
        unconscious: false,
        charmed: false,
        exhausted: false,
        deafened: false,
        invisible: false,
        prone: false,
        blinded: false,
        frightened: false,
        grappled: false,
        poisoned: false,
        restrained: false,
    },
    resources: {"spellSlots" : {type: "tiered", label: "spellSlots", tiers: {2: {current: 4, max: 4}}}}
});

const ally2: Character = new Character({
    name: "Callise",
    side: "ally",
    id: "firstCharacter",
    AC: 18,
    HP: 35,
    abilityScores: {dexterity: 14, charisma: 14, constitution: 14, intelligence: 14, strength: 14, wisdom: 14},
    actions: [attackAction, massHeal],
    conditions: {
        incapacitated: false,
        paralyzed: false,
        petrified: false,
        stunned: false,
        unconscious: false,
        charmed: false,
        exhausted: false,
        deafened: false,
        invisible: false,
        prone: false,
        blinded: false,
        frightened: false,
        grappled: false,
        poisoned: false,
        restrained: false,
    },
    resources: {"spellSlots" : {type: "tiered", label: "spellSlots", tiers: {3: {current: 4, max: 4}}}}
});

const enemy1: Character = new Character({
    name: "Goblin",
    side: "enemy",
    id: "firstEnemy",
    AC: 15,
    HP: 15,
    abilityScores: {dexterity: 14, charisma: 12, constitution: 12, intelligence: 12, strength: 12, wisdom: 12},
    actions: [attackAction, healAction],
    conditions: {
        incapacitated: false,
        paralyzed: false,
        petrified: false,
        stunned: false,
        unconscious: false,
        charmed: false,
        exhausted: false,
        deafened: false,
        invisible: false,
        prone: false,
        blinded: false,
        frightened: false,
        grappled: false,
        poisoned: false,
        restrained: false,
    }
});

const enemy2: Character = new Character({
    name: "Goblin",
    side: "enemy",
    id: "firstEnemy",
    AC: 15,
    HP: 20,
    abilityScores: {dexterity: 14, charisma: 12, constitution: 12, intelligence: 12, strength: 12, wisdom: 12},
    actions: [attackAction, healAction],
    conditions: {
        incapacitated: false,
        paralyzed: false,
        petrified: false,
        stunned: false,
        unconscious: false,
        charmed: false,
        exhausted: false,
        deafened: false,
        invisible: false,
        prone: false,
        blinded: false,
        frightened: false,
        grappled: false,
        poisoned: false,
        restrained: false,
    }
});

const enemy3: Character = new Character({
    name: "Boblin the Goblin",
    side: "enemy",
    id: "firstEnemy",
    AC: 20,
    HP: 30,
    abilityScores: {dexterity: 14, charisma: 12, constitution: 12, intelligence: 12, strength: 12, wisdom: 12},
    actions: [attackAction, healAction, boomStick],
    conditions: {
        incapacitated: false,
        paralyzed: false,
        petrified: false,
        stunned: false,
        unconscious: false,
        charmed: false,
        exhausted: false,
        deafened: false,
        invisible: false,
        prone: false,
        blinded: false,
        frightened: false,
        grappled: false,
        poisoned: false,
        restrained: false,
    }
});


// Now create the simulation instance and run it
const sim = new RunSim([ally1, ally2, enemy2, enemy1, enemy3], 100);
sim.simulate();

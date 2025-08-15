import {CombatEngine} from "@/app/lib/systems/combat/CombatEngine";
import {Character} from "@/app/lib/models/character/Character";
import {Action, AttackAction, SpellAction} from "../lib/models/character/actions/Action";
import {longswordAttack} from "@/app/examples/testDecisionMaking";

// Example Actions
const swordSlash = new AttackAction({
    name: "Sword Slash",
    actionType: "attack",
    actionTime: "action",
    targetingBehaviour: "random",
    damageRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 2, d: 8, flatBonus: 2 },
            effectType: "slashing"
        }]
    },
    attackBonus: 3,
    range: "5 feet"
});

const healingTouch = new SpellAction({
    name: "Healing Touch",
    actionType: "spell",
    actionTime: "action",
    targetingBehaviour: "lowestHP",
    healingRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 1, d: 6, flatBonus: 1 }
        }]
    },
    level: 1,
    range: "Touch"
});

const fireball = new SpellAction({
    name: "Fireball",
    actionType: "spell",
    actionTime: "action",
    targetingBehaviour: "random",
    damageRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 8, d: 6, flatBonus: 8 },
            effectType: "fire"
        }]
    },
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 3}],
    dc: {
        dcSaveType: "dexterity",
        dcDefaultValue: 15,
        dcSuccess: "half damage"
    },
    level: 3,
    range: "150 feet",
    area_of_effect: {
        type: "sphere",
        size: 20
    }
});

const massHeal = new SpellAction({
    name: "Mass Heal",
    actionType: "spell",
    actionTime: "action",
    targetingBehaviour: "lowestHP",
    healingRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 4, d: 10, flatBonus: 10 }
        }]
    },
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 2}],
    level: 2,
    range: "60 feet"
});

const boomStick = new AttackAction({
    name: "BoomStick",
    actionType: "attack",
    actionTime: "action",
    targetingBehaviour: "lowestHP",
    damageRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 4, d: 10, flatBonus: 10 },
            effectType: "thunder"
        }]
    },
    attackBonus: 5,
    range: "30 feet"
});

// Additional 10 Actions
const poisonDagger = new AttackAction({
    name: "Poison Dagger",
    actionType: "attack",
    actionTime: "action",
    targetingBehaviour: "random",
    damageRoll: {
        scaling: false,
        baseEffect: [
            {
                effect: { n: 1, d: 4, flatBonus: 3 },
                effectType: "piercing"
            },
            {
                effect: { n: 2, d: 6 },
                effectType: "poison"
            }
        ]
    },
    attackBonus: 6,
    range: "5 feet"
});

const shieldBash = new AttackAction({
    name: "Shield Bash",
    actionType: "attack",
    actionTime: "bonusAction",
    targetingBehaviour: "random",
    damageRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 1, d: 4, flatBonus: 2 },
            effectType: "bludgeoning"
        }]
    },
    attackBonus: 4,
    range: "5 feet"
});

const lightningBolt = new SpellAction({
    name: "Lightning Bolt",
    actionType: "spell",
    actionTime: "action",
    targetingBehaviour: "highestHP",
    damageRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 8, d: 6 },
            effectType: "lightning"
        }]
    },
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 3}],
    dc: {
        dcSaveType: "dexterity",
        dcDefaultValue: 16,
        dcSuccess: "half damage"
    },
    level: 3,
    range: "100 feet",
    area_of_effect: {
        type: "line",
        size: 100
    }
});

const cureLightWounds = new SpellAction({
    name: "Cure Light Wounds",
    actionType: "spell",
    actionTime: "action",
    targetingBehaviour: "lowestHP",
    healingRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 1, d: 8, flatBonus: 3 }
        }]
    },
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 1}],
    level: 1,
    range: "Touch"
});

const acidSplash = new SpellAction({
    name: "Acid Splash",
    actionType: "spell",
    actionTime: "action",
    targetingBehaviour: "random",
    damageRoll: {
        scaling: {
            scalingOrigin: "characterLevel",
            scalingValue: {
                base: [{
                    effect: { n: 1, d: 6 },
                    effectType: "acid"
                }],
                multiplier: 0.5
            }
        },
        baseEffect: [{
            effect: { n: 1, d: 6 },
            effectType: "acid"
        }]
    },
    dc: {
        dcSaveType: "dexterity",
        dcDefaultValue: 13,
        dcSuccess: "no effect"
    },
    level: 0,
    range: "60 feet"
});

const rage = new Action({
    name: "Rage",
    actionType: "feature",
    actionTime: "bonusAction",
    targetingBehaviour: "random",
    usageConstraints: [{type: "resource", resourceName: "rageCharges", cost: 1}],
    range: "Self"
});



const healingWord = new SpellAction({
    name: "Healing Word",
    actionType: "spell",
    actionTime: "bonusAction",
    targetingBehaviour: "lowestHP",
    healingRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 1, d: 4, flatBonus: 3 }
        }]
    },
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 1}],
    level: 1,
    range: "60 feet"
});

const magicMissile = new SpellAction({
    name: "Magic Missile",
    actionType: "spell",
    actionTime: "action",
    targetingBehaviour: "random",
    damageRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 3, d: 4, flatBonus: 3 },
            effectType: "force"
        }]
    },
    usageConstraints: [{type: "resource", resourceName: "spellSlots", cost: 1, tier: 1}],
    level: 1,
    range: "120 feet"
});

const wildSwing = new AttackAction({
    name: "Wild Swing",
    actionType: "attack",
    actionTime: "action",
    targetingBehaviour: "random",
    damageRoll: {
        scaling: false,
        baseEffect: [{
            effect: { n: 3, d: 12, flatBonus: 5 },
            effectType: "slashing"
        }]
    },
    attackBonus: 1, // Lower accuracy for higher damage
    range: "10 feet"
});

// Example Characters
const ally1: Character = new Character({
    name: "Alric the Paladin",
    side: "ally",
    id: "alric",
    AC: 18,
    HP: 45,
    maxHP: 45,
    level: 5,
    class: "paladin",
    abilityScores: {dexterity: 12, charisma: 16, constitution: 14, intelligence: 10, strength: 16, wisdom: 13},
    actions: [longswordAttack, healingTouch, fireball],
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
    resources: {"spellSlots" : {type: "tiered", label: "Spell Slots", tiers: {1: {current: 4, max: 4}, 2: {current: 2, max: 2}}}}
});

const ally2: Character = new Character({
    name: "Callise the Cleric",
    side: "ally",
    id: "callise",
    AC: 16,
    HP: 35,
    maxHP: 35,
    level: 4,
    class: "cleric",
    abilityScores: {dexterity: 12, charisma: 14, constitution: 14, intelligence: 13, strength: 14, wisdom: 16},
    actions: [swordSlash, massHeal, cureLightWounds, healingWord],
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
    resources: {"spellSlots" : {type: "tiered", label: "Spell Slots", tiers: {1: {current: 4, max: 4}, 2: {current: 3, max: 3}}}}
});

// Additional 5 Characters
const ally3: Character = new Character({
    name: "Thorek the Barbarian",
    side: "ally",
    id: "thorek",
    AC: 14,
    HP: 58,
    maxHP: 58,
    level: 5,
    class: "barbarian",
    abilityScores: {dexterity: 14, charisma: 8, constitution: 16, intelligence: 8, strength: 18, wisdom: 12},
    actions: [wildSwing, rage, boomStick],
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
    resources: {"rageCharges" : {type: "flat", label: "Rage", current: 3, max: 3, recharge: "longRest"}}
});

const ally4: Character = new Character({
    name: "Lyra the Wizard",
    side: "ally",
    id: "lyra",
    AC: 12,
    HP: 28,
    maxHP: 28,
    level: 5,
    class: "wizard",
    abilityScores: {dexterity: 14, charisma: 12, constitution: 13, intelligence: 18, strength: 8, wisdom: 15},
    actions: [lightningBolt, fireball, magicMissile, acidSplash],
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
    resources: {"spellSlots" : {type: "tiered", label: "Spell Slots", tiers: {1: {current: 4, max: 4}, 2: {current: 3, max: 3}, 3: {current: 2, max: 2}}}}
});

const ally5: Character = new Character({
    name: "Shade the Rogue",
    side: "ally",
    id: "shade",
    AC: 15,
    HP: 32,
    maxHP: 32,
    level: 4,
    class: "rogue",
    abilityScores: {dexterity: 18, charisma: 13, constitution: 12, intelligence: 14, strength: 10, wisdom: 13},
    actions: [longswordAttack, poisonDagger, shieldBash],
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

const enemy1: Character = new Character({
    name: "Goblin Warrior",
    side: "enemy",
    id: "goblin1",
    AC: 15,
    HP: 15,
    maxHP: 15,
    abilityScores: {dexterity: 14, charisma: 8, constitution: 12, intelligence: 10, strength: 12, wisdom: 11},
    actions: [swordSlash, poisonDagger],
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
    name: "Goblin Shaman",
    side: "enemy",
    id: "goblin2",
    AC: 13,
    HP: 22,
    maxHP: 22,
    abilityScores: {dexterity: 12, charisma: 14, constitution: 13, intelligence: 12, strength: 10, wisdom: 15},
    actions: [acidSplash, healingTouch, cureLightWounds],
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
    resources: {"spellSlots" : {type: "tiered", label: "Spell Slots", tiers: {1: {current: 3, max: 3}}}}
});

const enemy3: Character = new Character({
    name: "Boblin the Goblin King",
    side: "enemy",
    id: "boblin",
    AC: 17,
    HP: 45,
    maxHP: 45,
    level: 4,
    abilityScores: {dexterity: 16, charisma: 14, constitution: 14, intelligence: 12, strength: 14, wisdom: 12},
    actions: [swordSlash, fireball, lightningBolt, magicMissile],
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
    resources: {"spellSlots" : {type: "tiered", label: "Spell Slots", tiers: {1: {current: 4, max: 4}, 2: {current: 2, max: 2}, 3: {current: 1, max: 1}}}}
});

const enemy4: Character = new Character({
    name: "Orc Berserker",
    side: "enemy",
    id: "orc1",
    AC: 13,
    HP: 30,
    maxHP: 30,
    abilityScores: {dexterity: 12, charisma: 7, constitution: 16, intelligence: 7, strength: 18, wisdom: 11},
    actions: [wildSwing, rage, shieldBash],
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
    resources: {"rageCharges" : {type: "flat", label: "Rage", current: 2, max: 2, recharge: "longRest"}}
});

const enemy5: Character = new Character({
    name: "Skeletal Archer",
    side: "enemy",
    id: "skeleton1",
    AC: 13,
    HP: 13,
    maxHP: 13,
    abilityScores: {dexterity: 14, charisma: 5, constitution: 15, intelligence: 6, strength: 10, wisdom: 8},
    actions: [boomStick, poisonDagger],
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
const sim = new CombatEngine([ally1, ally2, ally3, ally4, ally5, enemy1, enemy2, enemy3, enemy4, enemy5], 100);
sim.simulate();
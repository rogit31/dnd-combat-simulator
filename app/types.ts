export type side = 'ally' | 'enemy';

export interface Character{
    id: string,
    name: string,
    level?: number,
    HP: number,
    maxHP?: number,
    AC: number,
    abilityScores: AbilityScores,
    savingThrows?: SavingThrowMod,
    actions: Action[],
    side: side,
    initiative?: number,
    conditions: Conditions,
    resources?: Resources,
}

export type Ally = Character & { side: 'ally' };
export type Enemy = Character & { side: 'enemy' };


export interface Action{
    name: string,
    priority: number, //the smaller, the higher priority,
    actionTime: "action" | "bonusAction" | "freeAction" | "legendaryAction",
    actionType: "attack" | "heal" | "buff" | "debuff",
    targetingBehaviour: "random" | "lowestHP" | "highestHP" | "highestLVL" | "lowestLVL" | "highestDPM",
    onlyEnemies: boolean,
    healingRoll?: DieFormat,
    flatHealing?: number,
    flatDamage?: number,
    damageRoll?: DieFormat,
    conditions?: [],
    targets: number,
    effects?: [],
    bonusToHit?: number,
    spellSave?: number,
    spellSaveStat?: keyof AbilityScores,
    onSave?: "half" | "nothing",
    usageConstraints?: UsageConstraint[]
}

export interface DieFormat{
    n: number,
    d: number,
    flatBonus?: number,
}

export interface AbilityScores{
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
}

export interface SavingThrowMod{
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
}

export interface Conditions{ //we'll ignore positive buffs for now, but they do exist
    blinded: boolean,
    charmed: boolean,
    deafened: boolean,
    frightened: boolean,
    grappled: boolean,
    incapacitated: boolean,
    invisible: boolean,
    paralyzed: boolean,
    petrified: boolean,
    poisoned: boolean,
    prone: boolean,
    restrained: boolean,
    stunned: boolean,
    unconscious: boolean,
    exhausted: boolean,
}

export type UsageConstraint =
    | { type: "perTurn" | "perRound" | "perDay"; uses: number; remaining?: number }
    | { type: "recharge"; chance: number; available: boolean } // chance is a roll like 1/3, 1/6
    | { type: "resource"; resourceName: string; cost: number; tier?: number } // e.g., spell slots
    | { type: "condition"; condition: string }; // e.g., "bloodied", "enemy visible", etc.

export type ResourcePool =
    | {
    type: "flat";
    label?: string; // e.g. "Sorcery Points"
    current: number;
    max: number;
    recharge?: "shortRest" | "longRest" | "daily" | "encounter";
}
    | {
    type: "tiered";
    label?: string; // e.g. "Spell Slots"
    tiers: Record<number, { current: number; max: number }>; // key = level (1-9)
    recharge?: "shortRest" | "longRest";
};

export type Resources = Record<string, ResourcePool>;

export type side = 'ally' | 'enemy';

export interface Character{
    id: string,
    name: string,
    level?: number,
    HP: number,
    maxHP?: number,
    AC: number,
    abilityScores: AbilityScores,
    savingThrows?: Partial<SavingThrowMod>,
    actions: Action[],
    side: side,
    initiative?: number,
    conditions?: Conditions,
    resources?: Resources,
}

export type CharacterConstructorArgs = Omit<Character, 'savingThrows'> & {
    savingThrows?: Partial<SavingThrowMod>
}

export type Ally = Character & { side: 'ally' };
export type Enemy = Character & { side: 'enemy' };

//An action is the basic interface for anything a character or monster can do in D&D
//It is intentionally very wide as a definition to allow for eventual maximum flexibility when it comes to homebrew
//We want to infer the maximum amount of information
export interface Action{
    name: string,
    actionTime?: "action" | "bonusAction" | "freeAction" | "legendaryAction" | "reaction" | "lairAction" | "passive", //anything longer is not really combat relevant so we can probably ignore it for now
    actionType?: "attack" | "spell" | "item" | "feature", //maybe there are other things? unsure but this should cover most of it
    targetingBehaviour?: "random" | "lowestHP" | "highestHP" | "highestLVL" | "lowestLVL" | "highestDPM", //default to lowestHP
    range?: string, //not necessary for now
    healingRoll?: DieFormat,
    damageRoll?: Damage,
    appliesConditions?: [],
    area_of_effect?: AOEType, //if this attribute isn't present we will default to one target
    effects?: [], //Any effects the action might trigger
    usageConstraints?: UsageConstraint[]
}

export type ActionConstructorArgs = {
    name: string;
} & Partial<Action>;

export interface SpellAction extends Action {
    duration?: string,
    concentration?: boolean,
    level?: number,
    dc?: DCType
}

export interface AttackAction extends Action {
    attackBonus?: number,
}

export interface ItemAction extends Action{

}

export interface AOEType {
    type: "sphere" | "cone" | "cylinder" | "line" | "cube",
    size: number,
}

export interface DCType{
    dcSave: keyof AbilityScores,
    dcSuccess: "no effect" | "partial" | "half damage" | "full effect"
}

export interface DieFormat{
    n: number,
    d: number,
    flatBonus?: number,
}


export interface DamageRoll{
    damage: DieFormat | DieFormat[],
    damageType: DamageType
}

/*
* Actions can have different damage formats as follows:
*  flat (does 2 damage)
*  simple roll (1d4)
*  they can scale by
*  spell slot level
*  character level
*  they can have different damage types
* a combination of all the previous one
*
* So here our type defines an array of damage rolls so that we can have something like
*  ⚔️ does (1d4 + 2 slashing), (1d6 + 2 fire damage)
* cough cough dndbeyond
*
* and optionally scale so that we could also have
*
* ⚔️ does (1d4 + 2 slashing) + (1d6 + 2 fire damage) + (1d6 * character level)
*
*  */

export interface Damage{
    scaling?: Scaling | false,
    baseDamage: DamageRoll[]
}

export type Scaling = {
    scalingOrigin: "characterLevel" | "spellSlotLevel" |  "characterHP" | "characterMaxHP" | "characterAC" | "targetLevel" | "targetHP" | "targetMissingHP",
    scalingValue: {
        base: DamageRoll | number,
        multiplier?: number,
        flatBonus?: number
    }
}

export interface AbilityScores{
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
}

type DamageType = "acid" | "bludgeoning" | "cold" | "fire" | "force" | "lightning" | "necrotic" | "piercing" | "poison" | "psychic" | "radiant" | "slashing" | "thunder"

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

export type ApiSpellShape = {
    higher_level: string[], //Description of what happens when you cast at higher level
    index: string,
    name: string,
    desc: string[],
    range: 'Self' | string, //n feet
    components: SpellComponent[], //['v', 's', 'm'] or any combination
    ritual: false,
    duration: string, //'1 hour', '1 round', '8 hours', '1 day', 'Instantaneous'
    concentration: boolean,
    casting_time: string, // '1 action', '1 bonus action', '10 minutes'
    level: number,
    attack_type?: 'ranged' | 'melee'
    dc?: { dc_type: {}, dc_success: string},
    damage?: {
        damage_type: { name: DamageType }, //acid
        damage_at_character_level?: Record<string, string>, // {"1" : "1d6", "2" : "2d6"}
        damage_at_slot_level?: Record<string, string>,
    },
    heal_at_slot_level: {
        string : string //'1': '1d8 + MOD'
    }
    area_of_effect?: {type: "sphere" | "cone" | "cylinder" | "line" | "cube", size: number},
    school: {
        index: string,
        name: string,
        url: string
    },
    classes: SimpleClassObject[], //represents the classes that can cast this spell
    subclasses: SimpleClassObject[], // Represents I think the subclasses that can cast this spell?
    url: string,
    updated_at: string // as time
}

type SpellComponent = 'v' | 's' | 'm';

type SimpleClassObject = {
    index: string, //i.e, wizard, warlock, bard...
    name: string, //the names here are just capitalized
    url: string//reference to the class api call
}
import {Rarity} from "@/types/dndBeyondApiType";
import {CharacterClass} from "@/src/models/character/layers/charclass/CharacterClass";
import {AbilityModifier} from "@/src/models/character/modifiers/CharacterModifier";
import {Race} from "@/src/models/character/layers/race/Race"
import {Background} from "@/src/models/character/layers/background/Background"
import {Feature} from "@/src/models/character/feature/Feature"
// import {TsConfigJson} from "type-fest";

/**
 * Side of a character in the battle.
 */
export type side = 'ally' | 'enemy';

/**
 * Represents the data types supported by sqLite
 * **/
export type SqlValue = string | number | null | Uint8Array;

export interface simpleTestCharacter {
    id: number,
    name: string,
    AC: number,
    HP: number
}

/**
 * Context provided to AI or decision logic during a battle.
 */
export interface BattleContext {
    /** All combatants in the current battle. */
    allCombatants: Character[];
    /** Current round number. */
    currentRound: number;
    /** Characters on the same side as the player. */
    allies: Character[];
    /** Characters on the enemy side. */
    enemies: Character[];
    /** Turn order for the round. */
    turnOrder: Character[];
}

/**
 * Represents a combatant in the battle.
 */
export interface Character {
    id: string;
    name: string;
    /** Level of the character, used mainly for PCs. */
    level?: number;
    /** Current hit points. */
    HP?: number;
    /** Maximum hit points. */
    maxHP: number;
    /** Class of the character (if any). */
    classes: Map<CharacterClass, number>;
    /** List of actions the character can take. */
    actions: ActionManager;
    /** Character's side in the battle. */
    side: side;
    /** Initiative roll result. */
    initiative?: number;
    /** Active conditions on the character. */
    conditions: ConditionManager;
    /** Character's race or specie. */
    race: Race;
    /** Character's background. */
    background: Background;
    /** Character's inventory **/
    inventory: InventoryManager;
    /** Character's stats **/
    modifiers: ModifierManager;
}

/**
 * Arguments used to construct a Character, allowing savingThrows to be optional.
 */
export type CharacterConstructorArgs = Omit<Character,
    'modifiers' |
    'inventory' |
    'conditions' |
    'actions'>;

export interface ActionManager {
    actions: ActionType[]
    spellSlots: Map<number, number>

    addAction(action: ActionType): void;
    getSpells(): ActionType[];
    getActions(): ActionType[];
    getFeatureActions(): ActionType[];
}


export interface ConditionManager {
    conditions: Conditions;
    advantage: string[];
    disadvantage: string[];
    resistances: DamageType[];
    immunities: DamageType[];
    vulnerabilities: DamageType[];

    addResistance(res: DamageType): void;
    addImmunity(imm: DamageType): void;
    addVulnerability(vul: DamageType): void;
}

export type ConditionManagerConstructorArgs = {
    conditions?: Conditions;
    advantage?: string[];
    disadvantage?: string[];
    resistances?: DamageType[];
    immunities?: DamageType[];
    vulnerabilities?: DamageType[];
};

export interface InventoryManager {
    inventory: Map<Item, number>;
    maxLoad: number;
    currLoad: number;
    gold: number;
}

export type InventoryManagerConstructorArgs = Omit<InventoryManager, 'currLoad'>;

export interface ModifierManager {
    abilityScores: AbilityScores;
    modifiers: Map<string, AbilityModifier>
    sources: Map<string, string[]>;
    proficiency: number;

    addModifier(stat: string, source: string, base: AbilityScore): void;
    removeModifier(source: string): void;
}

export type ModifierManagerConstructorArgs = Omit<ModifierManager,
    'modifiers' |
    'sources' |
    'addModifier' |
    'removeModifier'
>;

export interface RaceInter {
    name: string;
    resistances: DamageType[];
    immunities: DamageType[];
    vulnerabilities: DamageType[];
    speed: number;
    size: "Tiny" | "Small" | "Medium" | "Large";
    abilityScoreIncrease: AbilityScores;
    features: Feature[];

    getFeatures(): Feature[];
}

export type RaceConstructorArgs = {
    name: string;
    speed: number;
    size: "Tiny" | "Small" | "Medium" | "Large";
    abilityScoreIncrease: AbilityScores;
} & Partial<RaceInter>;

export interface BackgroundInter {
    name: string;
    proficiencies: Map<string, AbilityScore>;
    startingEquipment: Map<Item, number>;
    features: Feature[];

    getFeatures(): Feature[];
}

export type BackgroundConstructorArgs = {
    name: string;
    proficiencies: Map<string, AbilityScore>;
    startingEquipment: Map<Item, number>;
} & Partial<BackgroundInter>;

export interface CharClass {
    name: string;
    spellCastingModifierBase?: AbilityScore;
    hitDie: DieFormat[];
    hitPointsAtFirstLevel: number;
    hitPointsScaling: {
        base: DieFormat[],
        modifier: AbilityScore
    }
    startingEquipment: Map<Item, number>;
    features: Feature[];
    proficiencies: Map<string, AbilityScore>;
}

export type CharClassConstructorArgs = CharClass;

export interface Item {
    id: number;
    name: string;
    weightPer: number;
    description: string,
    consumable: boolean,
    isAttuned: boolean;
    equipped: boolean;
    rarity: Rarity;
}

export type ItemConstructorArgs = {
    id :number,
    name: string,
    weightPer: number,
    description: string,
} & Partial<Item>;


/** Explicitly typed ally character. */
export type Ally = Character & { side: 'ally' };
/** Explicitly typed enemy character. */
export type Enemy = Character & { side: 'enemy' };

/**
 * Base structure for actions a character can take.
 * Extremely flexible to support homebrew and nonstandard features.
 */
export interface Action {
    name: string;
    actionTime?: "action" | "bonusAction" | "freeAction" | "legendaryAction" | "reaction" | "lairAction" | "passive";
    actionType: "attack" | "spell" | "item" | "feature";
    targetingBehaviour?: "random" | "lowestHP" | "highestHP" | "highestLVL" | "lowestLVL" | "highestDPM";
    range?: string;
    healingRoll?: RollSet;
    damageRoll?: RollSet;
    appliesConditions?: [];
    area_of_effect?: AOEType;
    effects?: [];
    usageConstraints?: UsageConstraint[];
}

/** Constructor args for an Action. */
export type ActionConstructorArgs = {
    name: string;
} & Partial<ActionType>;

/** Action representing a spell. */
export interface SpellAction extends Action {
    actionType: "spell";
    duration?: string;
    concentration?: boolean;
    level?: number;
    dc?: DCType;
    attackBonus?: number;
}

/** Action representing a physical or weapon attack. */
export interface AttackAction extends Action {
    actionType: "attack";
    attackBonus?: number;
}

/** Action that uses a consumable or item. */
export interface ItemAction extends Action {
    actionType: "item";
}

/** Action that stems from a class feature or passive. */
export interface FeatureAction extends Action {
    actionType: "feature";
}

/** Union of all action types. */
export type ActionType = AttackAction | SpellAction | ItemAction | FeatureAction;

/** Area of Effect shape and size. */
export interface AOEType {
    type: "sphere" | "cone" | "cylinder" | "line" | "cube";
    size: number;
}

/** Saving throw difficulty information. */
export interface DCType {
    dcSaveType: keyof AbilityScores;
    dcDefaultValue?: number;
    dcSuccess: "no effect" | "partial" | "half damage" | "full effect";
}

/** Format for rolling dice. */
export interface DieFormat {
    n: number;
    d: number;
    flatBonus?: number;
}

/** Individual damage or healing roll with optional damage type. */
export interface EffectRoll {
    effect: DieFormat;
    effectType?: DamageType;
}

/**
 * The format after calculating a damage roll. A set of values and types, i.e, 4 fire damage, 2 force damage.
 */
export type DamageSet = { value: number, type: DamageType }[];


/**
 * Represents a full set of dice and rules for determining the result of a damaging or healing action.
 */
export interface RollSet {
    scaling?: Scaling | false;
    baseEffect: EffectRoll[];
}

/** Defines scaling rules for a RollSet. */
export type Scaling = {
    scalingOrigin: "characterLevel" | "spellSlotLevel" | "characterHP" | "characterMaxHP" | "characterAC" | "targetLevel" | "targetHP" | "targetMissingHP";
    scalingValue: {
        base: EffectRoll[] | number;
        multiplier?: number;
        flatBonus?: number;
    };
};

/** Character ability scores. */
export interface AbilityScores {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

/** Types of damage in the system. */
export type DamageType =
    | "acid"
    | "bludgeoning"
    | "cold"
    | "fire"
    | "force"
    | "lightning"
    | "necrotic"
    | "piercing"
    | "poison"
    | "psychic"
    | "radiant"
    | "slashing"
    | "thunder";

/** Saving throw modifiers by stat. */
export interface SavingThrowMod {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

/** Conditions that may affect a character during battle. */
export interface Conditions {
    blinded: boolean;
    charmed: boolean;
    deafened: boolean;
    frightened: boolean;
    grappled: boolean;
    incapacitated: boolean;
    invisible: boolean;
    paralyzed: boolean;
    petrified: boolean;
    poisoned: boolean;
    prone: boolean;
    restrained: boolean;
    stunned: boolean;
    unconscious: boolean;
    exhausted: boolean;
}

/** Rules for when or how an action can be used. */
export type UsageConstraint =
    | { type: "perTurn" | "perRound" | "perDay"; uses: number; remaining?: number }
    | { type: "recharge"; chance: number; available: boolean }
    | { type: "resource"; resourceName: ResourceKey; cost: number; tier?: number }
    | { type: "condition"; condition: string };

/** A flat or tiered resource pool. */
export type ResourcePool =
    | {
    type: "flat";
    label?: string;
    current: number;
    max: number;
    recharge?: "shortRest" | "longRest" | "daily" | "encounter";
}
    | {
    type: "tiered";
    label?: string;
    tiers: Record<number, { current: number; max: number }>;
    recharge?: "shortRest" | "longRest";
};

/**
 * Tracks a character's expendable resources, like spell slots or ki.
 */
export type Resources = Record<ResourceKey, ResourcePool>;

/** Common predefined and custom resource names. */
export type ResourceKey =
    | "spellSlots"
    | "sorceryPoints"
    | "rageCharges"
    | "ki"
    | "bardicInspiration"
    | "channelDivinity"

/**
 * Shape of spell data returned from the D&D 5e API.
 */
export type ApiSpellShape = {
    higher_level: string[];
    index: string;
    name: string;
    desc: string[];
    range: 'Self' | string;
    components: SpellComponent[];
    ritual: false;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type?: 'ranged' | 'melee';
    dc?: {
        dc_type: {
            index: "dex" | "cha" | "wis" | "con" | "str" | "int"
        }; dc_success: string
    };
    damage?: {
        damage_type: { name: DamageType };
        damage_at_character_level?: Record<string, string>;
        damage_at_slot_level?: Record<string, string>;
    };
    heal_at_slot_level: {
        string: string;
    };
    area_of_effect?: {
        type: "sphere" | "cone" | "cylinder" | "line" | "cube";
        size: number;
    };
    school: {
        index: string;
        name: string;
        url: string;
    };
    classes: SimpleClassObject[];
    subclasses: SimpleClassObject[];
    url: string;
    updated_at: string;
};

type SpellComponent = 'v' | 's' | 'm';

/** Minimal reference to a class or subclass from the API. */
type SimpleClassObject = {
    index: string;
    name: string;
    url: string;
};

/** A single numeric stat we might want to touch. */
export type Stat =
    | keyof AbilityScores
    | "AC"
    | "HP"
    | "maxHP"
    | "speed"
    | "proficiencyBonus";

/** A single ability score. **/
export type AbilityScore =
    | keyof AbilityScores;

/** How a modifier treats that stat. */
export type ModifierOp = "add" | "multiply" | "set" | "subtract" | "divide";

/** For example, rogue's expertise. A feature that directly applies an effect to something else that exists in our character sheets. **/
export type Modifier = {
    origin: "class" | "background" | "race",
    target: ValueRef,
    operation: ModifierOp
    condition: Condition
    modPhase: ModPhase
}

/** One line in the running list of active modifiers. */
export interface StatModifier {
    id: string;              // for easy remove() later
    stat: Stat;
    op: ModifierOp;
    value: number;           // e.g. +2, ×1.5, or hard-set 21
    source: string;          // "Belt of Hill Giant Strength"
    expiresRound?: number;   // optional duration hook
}

/** All battle-engine moments you might want to listen to. */
export type Trigger =
    | "onHeal"            // character healed
    | "onTakeDamage"
    | "onDealDamage"
    | "onTurnStart"
    | "onTurnEnd"
    | "onKill"
    | "onCastSpell"
    | "onRest";

/** Data that accompanies each trigger. Narrowed by K. */
export type TriggerCtx<K extends Trigger> =
    K extends "onHeal"
        ? { amount: number; healer: Character; battle: BattleContext }
        : K extends "onDealDamage" | "onTakeDamage"
            ? { amount: number; target: Character; battle: BattleContext; type: DamageType }
            : { battle: BattleContext };          // fallback payload

/** “When X happens, run this code.” */
export interface TriggerEffect<K extends Trigger = Trigger> {
    trigger: K;
    cb: (self: Character, ctx: TriggerCtx<K>) => void;
    source: string; // for UI/debug
}

export interface FeatureInter {
    name: string;
    /** Passive, always-on numeric changes. */
    modifiers?: {stat: string, amount: number}[];
    /** Event-driven behaviour. */
    triggers?: TriggerEffect[];
}

/** We want to be able to say something along the lines of,
 * "Starting at level 2",
 * "When less than 50% HP,
 * "When exactly 13 stones in your pocket **/
export type ConditionOp =
    "greaterThan" | "smallerThan" | "includes" | "excludes" | "exactly" | "isTrue" | "isFalse";

export type ConditionEvaluator = () => boolean;

export type Condition = {
    conditionOp: ConditionOp;
    arg1: ValueRef;
    arg2: ValueRef;
}

/** Represents the different types an argument to a condition can have,
 * noteably, either a literal number, string, or boolean, or the path to a property of a character. For example,
 * character.abilityScore .**/
export type ValueRef = { type: "literal"; value: number | string | boolean } | { type: "path"; path: string };

/** Override for the phase at which the modifier is applied. For example, if we want a class feature to operate on total strength
 * including a giant's belt or smth, we would use final here. **/
export type ModPhase = "base" | "bonus" | "final";

export enum SkillProficiencies {
    strength,
    athletics,
    dexterity,
    acrobatics,
    sleightOfHand,
    stealth,
    intelligence,
    arcana,
    history,
    investigation,
    nature,
    religion,
    wisdom,
    animalHandling,
    insight,
    medicine,
    perception,
    survival,
    charisma,
    deception,
    intimidation,
    performance,
    persuasion
}

/** A potential target for modifiers. **/
export type target = Character;
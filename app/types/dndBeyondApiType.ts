// To parse this data:
//
//   import { Convert } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
    id:         number;
    success:    boolean;
    message:    string;
    data:       Data;
    pagination: null;
}

export interface Data {
    id:                       number;
    userId:                   number;
    username:                 string;
    isAssignedToPlayer:       boolean;
    readonlyUrl:              string;
    decorations:              Decorations;
    name:                     string;
    socialName:               null;
    gender:                   string;
    faith:                    string;
    age:                      number;
    hair:                     string;
    eyes:                     string;
    skin:                     null | string;
    height:                   string;
    weight:                   number | null;
    inspiration:              boolean;
    baseHitPoints:            number;
    bonusHitPoints:           null;
    overrideHitPoints:        null;
    removedHitPoints:         number;
    temporaryHitPoints:       number;
    currentXp:                number;
    alignmentId:              number;
    lifestyleId:              number | null;
    stats:                    Stat[];
    bonusStats:               Stat[];
    overrideStats:            Stat[];
    background:               DataBackground;
    race:                     Race;
    raceDefinitionId:         null;
    raceDefinitionTypeId:     null;
    notes:                    Notes;
    traits:                   Traits;
    preferences:              Preferences;
    configuration:            Configuration;
    lifestyle:                null;
    inventory:                Inventory[];
    currencies:               Currencies;
    classes:                  DataClass[];
    feats:                    DataFeat[];
    features:                 null;
    customDefenseAdjustments: any[];
    customSenses:             any[];
    customSpeeds:             any[];
    customProficiencies:      any[];
    customActions:            any[];
    characterValues:          CharacterValue[];
    conditions:               any[];
    deathSaves:               DeathSaves;
    adjustmentXp:             null;
    spellSlots:               PactMagic[];
    pactMagic:                PactMagic[];
    activeSourceCategories:   number[];
    spells:                   Spells;
    options:                  Options;
    choices:                  Choices;
    actions:                  Actions;
    modifiers:                Modifiers;
    classSpells:              ClassSpell[];
    customItems:              CustomItem[];
    campaign:                 Campaign;
    creatures:                any[];
    optionalOrigins:          any[];
    optionalClassFeatures:    any[];
    dateModified:             Date;
    providedFrom:             string;
    canEdit:                  boolean;
    status:                   number;
    statusSlug:               null;
    campaignSetting:          null;
}

export interface Actions {
    race:       ActionsClass[];
    class:      ActionsClass[];
    background: null;
    item:       null;
    feat:       ActionsClass[];
}

export interface ActionsClass {
    componentId:            number;
    componentTypeId:        number;
    id:                     string;
    entityTypeId:           string;
    limitedUse:             ClassLimitedUse | null;
    name:                   string;
    description:            null | string;
    snippet:                string;
    abilityModifierStatId:  number | null;
    onMissDescription:      null | string;
    saveFailDescription:    null | string;
    saveSuccessDescription: SaveSuccessDescription | null;
    saveStatId:             number | null;
    fixedSaveDc:            null;
    attackTypeRange:        number | null;
    actionType:             number;
    attackSubtype:          number | null;
    dice:                   Die | null;
    value:                  null;
    damageTypeId:           number | null;
    isMartialArts:          boolean;
    isProficient:           boolean;
    spellRangeType:         null;
    displayAsAttack:        boolean | null;
    range:                  ClassRange;
    activation:             Activation;
    numberOfTargets:        null;
    fixedToHit:             null;
    ammunition:             null;
}

export interface Activation {
    activationTime: number | null;
    activationType: number | null;
}

export interface Die {
    diceCount:      number | null;
    diceValue:      number | null;
    diceMultiplier: number | null;
    fixedValue:     number | null;
    diceString:     null | string;
}

export interface ClassLimitedUse {
    name:                     null;
    statModifierUsesId:       null;
    resetType:                number;
    numberUsed:               number;
    minNumberConsumed:        number | null;
    maxNumberConsumed:        number;
    maxUses:                  number;
    operator:                 number;
    useProficiencyBonus:      boolean;
    proficiencyBonusOperator: number;
    resetDice:                null;
}

export interface ClassRange {
    range:                    number | null;
    longRange:                null;
    aoeType:                  number | null;
    aoeSize:                  number | null;
    hasAoeSpecialDescription: boolean;
    minimumRange:             null;
}

export enum SaveSuccessDescription {
    Empty = "",
    HalfDamage = "Half Damage",
}

export interface DataBackground {
    hasCustomBackground: boolean;
    definition:          BackgroundDefinition;
    definitionId:        null;
    customBackground:    CustomBackground;
}

export interface CustomBackground {
    id:                                    number;
    entityTypeId:                          number;
    name:                                  null;
    description:                           null;
    featuresBackground:                    null;
    characteristicsBackground:             null;
    featuresBackgroundDefinitionId:        null;
    characteristicsBackgroundDefinitionId: null;
    backgroundType:                        null;
}

export interface BackgroundDefinition {
    id:                                  number;
    entityTypeId:                        number;
    definitionKey:                       string;
    name:                                string;
    description:                         string;
    snippet:                             string;
    shortDescription:                    string;
    skillProficienciesDescription:       string;
    toolProficienciesDescription:        string;
    languagesDescription:                string;
    equipmentDescription:                string;
    featureName:                         string;
    featureDescription:                  string;
    avatarUrl:                           null;
    largeAvatarUrl:                      null;
    suggestedCharacteristicsDescription: string;
    suggestedProficiencies:              null;
    suggestedLanguages:                  null;
    organization:                        null;
    contractsDescription:                string;
    spellsPreDescription:                string;
    spellsPostDescription:               string;
    personalityTraits:                   Bond[];
    ideals:                              Bond[];
    bonds:                               Bond[];
    flaws:                               Bond[];
    isHomebrew:                          boolean;
    sources:                             Source[];
    spellListIds:                        any[];
    featList:                            FeatList | null;
    grantedFeats:                        FeatList[];
}

export interface Bond {
    id:          number;
    description: string;
    diceRoll:    number;
}

export interface FeatList {
    id:      number;
    name:    string;
    featIds: number[];
}

export interface Source {
    sourceId:   number;
    pageNumber: number | null;
    sourceType: number;
}

export interface Stat {
    id:    number;
    name:  null;
    value: number | null;
}

export interface Campaign {
    id:          number;
    name:        string;
    description: string;
    link:        string;
    publicNotes: string;
    dmUserId:    number;
    dmUsername:  string;
    characters:  Character[];
}

export interface Character {
    userId:        number;
    username:      string;
    characterId:   number;
    characterName: string;
    characterUrl:  string;
    avatarUrl:     null | string;
    privacyType:   number;
    campaignId:    null;
    isAssigned:    boolean;
}

export interface CharacterValue {
    typeId:        number;
    value:         number | string;
    notes:         null | string;
    valueId:       null | string;
    valueTypeId:   null | string;
    contextId:     null;
    contextTypeId: null;
}

export interface Choices {
    race:                 ChoicesBackground[];
    class:                ChoicesBackground[];
    background:           ChoicesBackground[];
    item:                 null;
    feat:                 ChoicesBackground[];
    choiceDefinitions:    ChoiceDefinition[];
    definitionKeyNameMap: DefinitionKeyNameMap;
}

export interface ChoicesBackground {
    componentId:     number;
    componentTypeId: number;
    id:              string;
    parentChoiceId:  null | string;
    type:            number;
    subType:         number | null;
    optionValue:     number | null;
    label:           null | string;
    isOptional:      boolean;
    isInfinite:      boolean;
    defaultSubtypes: string[];
    displayOrder:    number | null;
    options:         any[];
    optionIds:       number[];
    tagConstraints:  TagConstraint[];
}

export interface TagConstraint {
    id:                    number;
    parentComponentTypeId: number;
    parentComponentId:     number;
    entityModifierId:      number;
    entityTagId:           number;
    definitionKey:         string;
    tagName:               string;
}

export interface ChoiceDefinition {
    id:      string;
    options: Option[];
}

export interface Option {
    id:          number;
    label:       string;
    description: null | string;
    sourceId:    number | null;
}

export interface DefinitionKeyNameMap {
    "feat:1970713"?: string;
    "feat:1789165"?: string;
    "feat:1789181"?: string;
}

export interface ClassSpell {
    entityTypeId:     number;
    characterClassId: number;
    spells:           Spell[];
}

export interface Spell {
    overrideSaveDc:        null;
    limitedUse:            null;
    id:                    number;
    entityTypeId:          number;
    definition:            SpellDefinition;
    definitionId:          number;
    prepared:              boolean;
    countsAsKnownSpell:    boolean;
    usesSpellSlot:         boolean;
    castAtLevel:           null;
    alwaysPrepared:        boolean;
    restriction:           null;
    spellCastingAbilityId: null;
    displayAsAttack:       null;
    additionalDescription: null;
    castOnlyAsRitual:      boolean;
    ritualCastingType:     null;
    range:                 DefinitionRange;
    activation:            Activation;
    baseLevelAtWill:       boolean;
    atWillLimitedUseLevel: null;
    isSignatureSpell:      null;
    componentId:           number;
    componentTypeId:       number;
    spellListId:           null;
}

export interface SpellDefinition {
    id:                     number;
    definitionKey:          string;
    name:                   string;
    level:                  number;
    school:                 string;
    duration:               DefinitionDuration;
    activation:             Activation;
    range:                  DefinitionRange;
    asPartOfWeaponAttack:   boolean;
    description:            string;
    snippet:                string;
    concentration:          boolean;
    ritual:                 boolean;
    rangeArea:              null;
    damageEffect:           null;
    components:             number[];
    componentsDescription:  string;
    saveDcAbilityId:        number | null;
    healing:                null;
    healingDice:            any[];
    tempHpDice:             any[];
    attackType:             number | null;
    canCastAtHigherLevel:   boolean;
    isHomebrew:             boolean;
    version:                null | string;
    sourceId:               null;
    sourcePageNumber:       number | null;
    requiresSavingThrow:    boolean;
    requiresAttackRoll:     boolean;
    atHigherLevels:         AtHigherLevels;
    modifiers:              ItemElement[];
    conditions:             Condition[];
    tags:                   string[];
    castingTimeDescription: string;
    scaleType:              ScaleType | null;
    sources:                Source[];
    spellGroups:            number[];
    isLegacy:               boolean;
}

export interface AtHigherLevels {
    higherLevelDefinitions: HigherLevelDefinition[];
    additionalAttacks:      any[];
    additionalTargets:      any[];
    areaOfEffect:           any[];
    duration:               any[];
    creatures:              any[];
    special:                any[];
    points:                 any[];
    range:                  any[];
}

export interface HigherLevelDefinition {
    level:   number | null;
    typeId:  number;
    dice:    Die | null;
    value:   number | null;
    details: string;
}

export interface Condition {
    type:              number;
    conditionId:       number;
    conditionDuration: number;
    durationUnit:      DurationUnit;
    exception:         string;
}

export enum DurationUnit {
    Hour = "Hour",
    Minute = "Minute",
    Round = "Round",
}

export interface DefinitionDuration {
    durationInterval: number;
    durationUnit:     DurationUnit | null;
    durationType:     DurationType;
}

export enum DurationType {
    Concentration = "Concentration",
    Instantaneous = "Instantaneous",
    Time = "Time",
}

export interface ItemElement {
    fixedValue:            number | null;
    id:                    string;
    entityId:              number | null;
    entityTypeId:          number | null;
    type:                  Type;
    subType:               string;
    dice:                  Die | null;
    restriction:           null | string;
    statId:                number | null;
    requiresAttunement:    boolean;
    duration:              BackgroundDuration | null;
    friendlyTypeName:      FriendlyTypeName;
    friendlySubtypeName:   string;
    isGranted:             boolean;
    bonusTypes:            number[];
    value:                 number | null;
    availableToMulticlass: boolean | null;
    modifierTypeId:        number;
    modifierSubTypeId:     number;
    componentId:           number;
    componentTypeId:       number;
    die?:                  Die;
    count?:                number;
    durationUnit?:         null;
    usePrimaryStat?:       boolean;
    atHigherLevels?:       AtHigherLevels;
    tagConstraints?:       any[];
}

export interface BackgroundDuration {
    durationInterval: number;
    durationUnit:     DurationUnit;
}

export enum FriendlyTypeName {
    Advantage = "Advantage",
    Bonus = "Bonus",
    Damage = "Damage",
    Expertise = "Expertise",
    Language = "Language",
    NaturalWeapon = "Natural Weapon",
    Proficiency = "Proficiency",
    Resistance = "Resistance",
    Sense = "Sense",
    Set = "Set",
    SetBase = "Set Base",
    Size = "Size",
    WeaponProperty = "Weapon Property",
}

export enum Type {
    Advantage = "advantage",
    Bonus = "bonus",
    Damage = "damage",
    Expertise = "expertise",
    Language = "language",
    NaturalWeapon = "natural-weapon",
    Proficiency = "proficiency",
    Resistance = "resistance",
    Sense = "sense",
    Set = "set",
    SetBase = "set-base",
    Size = "size",
    WeaponProperty = "weapon-property",
}

export interface DefinitionRange {
    origin:     Origin;
    rangeValue: number | null;
    aoeType:    AoeType | null;
    aoeValue:   number | null;
}

export enum AoeType {
    Cone = "Cone",
    Cube = "Cube",
    Sphere = "Sphere",
}

export enum Origin {
    Ranged = "Ranged",
    Self = "Self",
    Touch = "Touch",
}

export enum ScaleType {
    Characterlevel = "characterlevel",
    Spelllevel = "spelllevel",
    Spellscale = "spellscale",
}

export interface DataClass {
    id:                   number;
    entityTypeId:         number;
    level:                number;
    isStartingClass:      boolean;
    hitDiceUsed:          number;
    definitionId:         number;
    subclassDefinitionId: null;
    definition:           SubclassDefinitionClass;
    subclassDefinition:   SubclassDefinitionClass;
    classFeatures:        ClassClassFeature[];
}

export interface ClassClassFeature {
    definition: ClassFeatureDefinition;
    levelScale: LevelScale | null;
}

export interface ClassFeatureDefinition {
    id:                            number;
    definitionKey:                 string;
    entityTypeId:                  number;
    displayOrder:                  number;
    name:                          string;
    description:                   string;
    snippet:                       null | string;
    activation:                    null;
    multiClassDescription:         string;
    requiredLevel:                 number;
    isSubClassFeature:             boolean;
    limitedUse:                    LimitedUseElement[];
    hideInBuilder:                 boolean;
    hideInSheet:                   boolean;
    sourceId:                      number;
    sourcePageNumber:              number | null;
    creatureRules:                 any[];
    levelScales:                   LevelScale[];
    infusionRules:                 any[];
    spellListIds:                  any[];
    classId:                       number;
    featureType:                   number;
    sources:                       Source[];
    affectedFeatureDefinitionKeys: any[];
    entityType:                    PurpleEntityType;
    entityID:                      string;
    grantedFeats:                  any[];
}

export enum PurpleEntityType {
    ClassFeature = "class-feature",
}

export interface LevelScale {
    id:          number;
    level:       number;
    description: string;
    dice:        Die | null;
    fixedValue:  number | null;
}

export interface LimitedUseElement {
    level: null;
    uses:  number;
}

export interface SubclassDefinitionClass {
    id:                        number;
    definitionKey:             string;
    name:                      string;
    description:               string;
    equipmentDescription:      null | string;
    parentClassId:             number | null;
    avatarUrl:                 null | string;
    largeAvatarUrl:            null | string;
    portraitAvatarUrl:         null | string;
    moreDetailsUrl:            string;
    spellCastingAbilityId:     number | null;
    sources:                   Source[];
    classFeatures:             DefinitionClassFeature[];
    hitDice:                   number;
    wealthDice:                Die | null;
    canCastSpells:             boolean;
    knowsAllSpells:            boolean | null;
    spellPrepareType:          number | null;
    spellCastingLearningStyle: number | null;
    spellContainerName:        null | string;
    sourcePageNumber:          number;
    subclassDefinition:        null;
    isHomebrew:                boolean;
    primaryAbilities:          number[] | null;
    spellRules:                SpellRules | null;
    prerequisites:             Prerequisite[] | null;
}

export interface DefinitionClassFeature {
    id:            number;
    name:          string;
    prerequisite:  null;
    description:   string;
    requiredLevel: number;
    displayOrder:  number;
}

export interface Prerequisite {
    description:          string;
    prerequisiteMappings: PrerequisiteMapping[];
    hidePrerequisite:     boolean;
}

export interface PrerequisiteMapping {
    id:                  number;
    entityId:            number | null;
    entityTypeId:        number | null;
    type:                string;
    subType:             string;
    value:               number;
    friendlyTypeName:    string;
    friendlySubTypeName: string;
}

export interface SpellRules {
    multiClassSpellSlotDivisor:  number;
    isRitualSpellCaster:         boolean;
    levelCantripsKnownMaxes:     number[];
    levelSpellKnownMaxes:        number[];
    levelSpellSlots:             Array<number[]>;
    multiClassSpellSlotRounding: number;
    levelPreparedSpellMaxes:     number[];
}

export interface Configuration {
    startingEquipmentType: number;
    abilityScoreType:      number;
    showHelpText:          boolean;
}

export interface Currencies {
    cp: number;
    sp: number;
    gp: number;
    ep: number;
    pp: number;
}

export interface CustomItem {
    id:          number;
    name:        string;
    description: null | string;
    weight:      number | null;
    cost:        null;
    quantity:    number;
    notes:       null | string;
}

export interface DeathSaves {
    failCount:    number | null;
    successCount: number | null;
    isStabilized: boolean;
}

export interface Decorations {
    avatarUrl:                            null | string;
    frameAvatarUrl:                       null;
    backdropAvatarUrl:                    null;
    smallBackdropAvatarUrl:               null;
    largeBackdropAvatarUrl:               null;
    thumbnailBackdropAvatarUrl:           null;
    defaultBackdrop:                      DefaultBackdrop;
    avatarId:                             number | null;
    portraitDecorationKey:                null | string;
    frameAvatarDecorationKey:             null;
    frameAvatarId:                        null;
    backdropAvatarDecorationKey:          null;
    backdropAvatarId:                     null;
    smallBackdropAvatarDecorationKey:     string;
    smallBackdropAvatarId:                null;
    largeBackdropAvatarDecorationKey:     string;
    largeBackdropAvatarId:                null;
    thumbnailBackdropAvatarDecorationKey: string;
    thumbnailBackdropAvatarId:            null;
    themeColor:                           null;
}

export interface DefaultBackdrop {
    backdropAvatarUrl:          string;
    smallBackdropAvatarUrl:     string;
    largeBackdropAvatarUrl:     string;
    thumbnailBackdropAvatarUrl: string;
}

export interface DataFeat {
    componentTypeId: number | null;
    componentId:     number | null;
    definition:      PurpleDefinition;
    definitionId:    number;
}

export interface PurpleDefinition {
    id:                 number;
    entityTypeId:       number;
    definitionKey:      string;
    name:               string;
    description:        string;
    snippet:            string;
    activation:         Activation;
    sourceId:           null;
    sourcePageNumber:   null;
    creatureRules:      any[];
    prerequisites:      Prerequisite[];
    isHomebrew:         boolean;
    sources:            Source[];
    spellListIds:       any[];
    isRepeatable:       boolean;
    repeatableParentId: null;
    categories:         Category[];
}

export interface Category {
    id:            number;
    entityTypeId:  number;
    entityId:      number;
    definitionKey: string;
    entityTagId:   number;
    tagName:       string;
}

export interface Inventory {
    id:                     number;
    entityTypeId:           number;
    definition:             InventoryDefinition;
    definitionId:           number;
    definitionTypeId:       number;
    displayAsAttack:        null;
    quantity:               number;
    isAttuned:              boolean;
    equipped:               boolean;
    equippedEntityTypeId:   number | null;
    equippedEntityId:       number | null;
    chargesUsed:            number;
    limitedUse:             InventoryLimitedUse | null;
    containerEntityId:      number;
    containerEntityTypeId:  number;
    containerDefinitionKey: ContainerDefinitionKey;
    currency:               null;
}

export enum ContainerDefinitionKey {
    The14394935481038780496 = "1439493548:1038780496",
    The14394935481468125354 = "1439493548:1468125354",
    The14394935481634660052 = "1439493548:1634660052",
    The14394935481640503322 = "1439493548:1640503322",
    The1581111423142363753 = "1581111423:142363753",
    The1581111423142829252 = "1581111423:142829252",
    The158111142393464408 = "1581111423:93464408",
}

export interface InventoryDefinition {
    id:                    number;
    baseTypeId:            number;
    entityTypeId:          number;
    definitionKey:         string;
    canEquip:              boolean;
    magic:                 boolean;
    name:                  string;
    snippet:               null | string;
    weight:                number;
    weightMultiplier:      number;
    capacity:              null | string;
    capacityWeight:        number;
    type:                  null | string;
    description:           string;
    canAttune:             boolean;
    attunementDescription: AttunementDescription | null;
    rarity:                Rarity;
    isHomebrew:            boolean;
    version:               null | string;
    sourceId:              null;
    sourcePageNumber:      null;
    stackable:             boolean;
    bundleSize:            number;
    avatarUrl:             null | string;
    largeAvatarUrl:        null | string;
    filterType:            FilterType;
    cost:                  number | null;
    isPack:                boolean;
    tags:                  string[];
    grantedModifiers:      ItemElement[];
    subType:               SubType | null;
    isConsumable:          boolean;
    weaponBehaviors:       WeaponBehavior[];
    baseItemId:            number | null;
    baseArmorName:         BaseArmorName | null;
    strengthRequirement:   number | null;
    armorClass:            number | null;
    stealthCheck:          number | null;
    damage:                Die | null;
    damageType:            DamageType | null;
    fixedDamage:           number | null;
    properties:            Property[] | null;
    attackType:            number | null;
    categoryId:            number | null;
    range:                 number | null;
    longRange:             number | null;
    isMonkWeapon:          boolean;
    levelInfusionGranted:  number | null;
    sources:               Source[];
    armorTypeId:           number | null;
    gearTypeId:            number | null;
    groupedId:             number | null;
    canBeAddedToInventory: boolean;
    isContainer:           boolean;
    isCustomItem:          boolean;
    isLegacy:              boolean;
}

export enum AttunementDescription {
    Empty = "",
    NeedsToBeTiedAgainstYourSkinForANight = "Needs to be tied against your skin for a night.",
}

export enum BaseArmorName {
    Leather = "Leather",
    StuddedLeather = "Studded Leather",
}

export enum DamageType {
    Bludgeoning = "Bludgeoning",
    Piercing = "Piercing",
    Slashing = "Slashing",
}

export enum FilterType {
    Armor = "Armor",
    OtherGear = "Other Gear",
    Potion = "Potion",
    Ring = "Ring",
    Weapon = "Weapon",
    WondrousItem = "Wondrous item",
}

export interface Property {
    id:          number;
    name:        string;
    description: string;
    notes:       null | string;
}

export enum Rarity {
    Common = "Common",
    Legendary = "Legendary",
    Rare = "Rare",
    Uncommon = "Uncommon",
    VeryRare = "Very Rare",
}

export enum SubType {
    AdventuringGear = "Adventuring Gear",
    ArcaneFocus = "Arcane Focus",
    Tool = "Tool",
}

export interface WeaponBehavior {
    baseItemId:   number;
    baseTypeId:   number;
    type:         string;
    attackType:   number;
    categoryId:   number;
    properties:   Property[];
    damage:       Die;
    damageType:   DamageType;
    range:        number;
    longRange:    number;
    isMonkWeapon: boolean;
}

export interface InventoryLimitedUse {
    maxUses:              number;
    numberUsed:           number;
    resetType:            string;
    resetTypeDescription: string;
}

export interface Modifiers {
    race:       ItemElement[];
    class:      ItemElement[];
    background: ItemElement[];
    item:       ItemElement[];
    feat:       ItemElement[];
    condition:  any[];
}

export interface Notes {
    allies:              null;
    personalPossessions: null | string;
    otherHoldings:       null;
    organizations:       null | string;
    enemies:             null;
    backstory:           null | string;
    otherNotes:          null | string;
}

export interface Options {
    race:       OptionsClass[];
    class:      OptionsClass[];
    background: null;
    item:       null;
    feat:       OptionsClass[];
}

export interface OptionsClass {
    componentId:     number;
    componentTypeId: number;
    definition:      RaceDefinition;
}

export interface RaceDefinition {
    id:               number;
    entityTypeId:     number;
    name:             string;
    description:      string;
    snippet:          string;
    activation:       null;
    sourceId:         number | null;
    sourcePageNumber: number | null;
    creatureRules:    any[];
    spellListIds:     any[];
}

export interface PactMagic {
    level:     number;
    used:      number;
    available: number;
}

export interface Preferences {
    useHomebrewContent:          boolean;
    progressionType:             number;
    encumbranceType:             number;
    ignoreCoinWeight:            boolean;
    hitPointType:                number;
    showUnarmedStrike:           boolean;
    showScaledSpells:            boolean;
    primarySense:                number;
    primaryMovement:             number;
    privacyType:                 number;
    sharingType:                 number;
    abilityScoreDisplayType:     number;
    enforceFeatRules:            boolean;
    enforceMulticlassRules:      boolean;
    enableOptionalClassFeatures: boolean;
    enableOptionalOrigins:       boolean;
    enableDarkMode:              boolean;
    enableContainerCurrency:     boolean;
}

export interface Race {
    isSubRace:         boolean;
    baseRaceName:      string;
    entityRaceId:      number;
    entityRaceTypeId:  number;
    definitionKey:     string;
    fullName:          string;
    baseRaceId:        number;
    baseRaceTypeId:    number;
    description:       string;
    avatarUrl:         string;
    largeAvatarUrl:    string;
    portraitAvatarUrl: string;
    moreDetailsUrl:    string;
    isHomebrew:        boolean;
    isLegacy:          boolean;
    groupIds:          number[];
    type:              number;
    supportsSubrace:   null;
    subRaceShortName:  null;
    baseName:          string;
    racialTraits:      RacialTrait[];
    weightSpeeds:      WeightSpeeds;
    featIds:           any[];
    size:              null;
    sizeId:            number;
    sources:           Source[];
}

export interface RacialTrait {
    definition: RacialTraitDefinition;
}

export interface RacialTraitDefinition {
    id:                            number;
    definitionKey:                 string;
    entityTypeId:                  number;
    displayOrder:                  number | null;
    name:                          string;
    description:                   string;
    snippet:                       null | string;
    hideInBuilder:                 boolean;
    hideInSheet:                   boolean;
    activation:                    null;
    sourceId:                      number;
    sourcePageNumber:              number | null;
    creatureRules:                 any[];
    spellListIds:                  any[];
    featureType:                   number;
    sources:                       Source[];
    affectedFeatureDefinitionKeys: any[];
    isCalledOut:                   boolean;
    entityType:                    FluffyEntityType;
    entityID:                      string;
    entityRaceId:                  number;
    entityRaceTypeId:              number;
    displayConfiguration:          DisplayConfiguration;
    requiredLevel:                 null;
    categories:                    Category[];
}

export interface DisplayConfiguration {
    RACIALTRAIT:  number;
    ABILITYSCORE: number;
    LANGUAGE:     number;
    CLASSFEATURE: number;
}

export enum FluffyEntityType {
    RacialTrait = "racial-trait",
}

export interface WeightSpeeds {
    normal:            Normal;
    encumbered:        null;
    heavilyEncumbered: null;
    pushDragLift:      null;
    override:          null;
}

export interface Normal {
    walk:   number;
    fly:    number;
    burrow: number;
    swim:   number;
    climb:  number;
}

export interface Spells {
    race:       any[];
    class:      any[];
    background: null;
    item:       Item[];
    feat:       SpellsFeat[];
}

export interface SpellsFeat {
    overrideSaveDc:        null;
    limitedUse:            ClassLimitedUse | null;
    id:                    number;
    entityTypeId:          number;
    definition:            SpellDefinition;
    definitionId:          number;
    prepared:              boolean;
    countsAsKnownSpell:    boolean;
    usesSpellSlot:         boolean;
    castAtLevel:           number | null;
    alwaysPrepared:        boolean;
    restriction:           string;
    spellCastingAbilityId: number | null;
    displayAsAttack:       null;
    additionalDescription: string;
    castOnlyAsRitual:      boolean;
    ritualCastingType:     null;
    range:                 DefinitionRange;
    activation:            Activation;
    baseLevelAtWill:       boolean;
    atWillLimitedUseLevel: null;
    isSignatureSpell:      null;
    componentId:           number;
    componentTypeId:       number;
    spellListId:           null;
}

export interface Item {
    overrideSaveDc:        null;
    limitedUse:            null;
    id:                    number;
    entityTypeId:          number;
    definition:            SpellDefinition;
    definitionId:          number;
    prepared:              boolean;
    countsAsKnownSpell:    null;
    usesSpellSlot:         boolean;
    castAtLevel:           null;
    alwaysPrepared:        boolean;
    restriction:           null;
    spellCastingAbilityId: null;
    displayAsAttack:       boolean;
    additionalDescription: null;
    castOnlyAsRitual:      boolean;
    ritualCastingType:     null;
    range:                 DefinitionRange;
    activation:            Activation;
    baseLevelAtWill:       boolean;
    atWillLimitedUseLevel: null;
    isSignatureSpell:      null;
    componentId:           number;
    componentTypeId:       number;
    spellListId:           null;
}

export interface Traits {
    personalityTraits: string;
    ideals:            string;
    bonds:             string;
    flaws:             string;
    appearance:        null;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): Welcome[] {
        return cast(JSON.parse(json), a(r("Welcome")));
    }

    public static welcomeToJson(value: Welcome[]): string {
        return JSON.stringify(uncast(value, a(r("Welcome"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "id", js: "id", typ: 0 },
        { json: "success", js: "success", typ: true },
        { json: "message", js: "message", typ: "" },
        { json: "data", js: "data", typ: r("Data") },
        { json: "pagination", js: "pagination", typ: null },
    ], false),
    "Data": o([
        { json: "id", js: "id", typ: 0 },
        { json: "userId", js: "userId", typ: 0 },
        { json: "username", js: "username", typ: "" },
        { json: "isAssignedToPlayer", js: "isAssignedToPlayer", typ: true },
        { json: "readonlyUrl", js: "readonlyUrl", typ: "" },
        { json: "decorations", js: "decorations", typ: r("Decorations") },
        { json: "name", js: "name", typ: "" },
        { json: "socialName", js: "socialName", typ: null },
        { json: "gender", js: "gender", typ: "" },
        { json: "faith", js: "faith", typ: "" },
        { json: "age", js: "age", typ: 0 },
        { json: "hair", js: "hair", typ: "" },
        { json: "eyes", js: "eyes", typ: "" },
        { json: "skin", js: "skin", typ: u(null, "") },
        { json: "height", js: "height", typ: "" },
        { json: "weight", js: "weight", typ: u(0, null) },
        { json: "inspiration", js: "inspiration", typ: true },
        { json: "baseHitPoints", js: "baseHitPoints", typ: 0 },
        { json: "bonusHitPoints", js: "bonusHitPoints", typ: null },
        { json: "overrideHitPoints", js: "overrideHitPoints", typ: null },
        { json: "removedHitPoints", js: "removedHitPoints", typ: 0 },
        { json: "temporaryHitPoints", js: "temporaryHitPoints", typ: 0 },
        { json: "currentXp", js: "currentXp", typ: 0 },
        { json: "alignmentId", js: "alignmentId", typ: 0 },
        { json: "lifestyleId", js: "lifestyleId", typ: u(0, null) },
        { json: "stats", js: "stats", typ: a(r("Stat")) },
        { json: "bonusStats", js: "bonusStats", typ: a(r("Stat")) },
        { json: "overrideStats", js: "overrideStats", typ: a(r("Stat")) },
        { json: "background", js: "background", typ: r("DataBackground") },
        { json: "race", js: "race", typ: r("Race") },
        { json: "raceDefinitionId", js: "raceDefinitionId", typ: null },
        { json: "raceDefinitionTypeId", js: "raceDefinitionTypeId", typ: null },
        { json: "notes", js: "notes", typ: r("Notes") },
        { json: "traits", js: "traits", typ: r("Traits") },
        { json: "preferences", js: "preferences", typ: r("Preferences") },
        { json: "configuration", js: "configuration", typ: r("Configuration") },
        { json: "lifestyle", js: "lifestyle", typ: null },
        { json: "inventory", js: "inventory", typ: a(r("Inventory")) },
        { json: "currencies", js: "currencies", typ: r("Currencies") },
        { json: "classes", js: "classes", typ: a(r("DataClass")) },
        { json: "feats", js: "feats", typ: a(r("DataFeat")) },
        { json: "features", js: "features", typ: null },
        { json: "customDefenseAdjustments", js: "customDefenseAdjustments", typ: a("any") },
        { json: "customSenses", js: "customSenses", typ: a("any") },
        { json: "customSpeeds", js: "customSpeeds", typ: a("any") },
        { json: "customProficiencies", js: "customProficiencies", typ: a("any") },
        { json: "customActions", js: "customActions", typ: a("any") },
        { json: "characterValues", js: "characterValues", typ: a(r("CharacterValue")) },
        { json: "conditions", js: "conditions", typ: a("any") },
        { json: "deathSaves", js: "deathSaves", typ: r("DeathSaves") },
        { json: "adjustmentXp", js: "adjustmentXp", typ: null },
        { json: "spellSlots", js: "spellSlots", typ: a(r("PactMagic")) },
        { json: "pactMagic", js: "pactMagic", typ: a(r("PactMagic")) },
        { json: "activeSourceCategories", js: "activeSourceCategories", typ: a(0) },
        { json: "spells", js: "spells", typ: r("Spells") },
        { json: "options", js: "options", typ: r("Options") },
        { json: "choices", js: "choices", typ: r("Choices") },
        { json: "actions", js: "actions", typ: r("Actions") },
        { json: "modifiers", js: "modifiers", typ: r("Modifiers") },
        { json: "classSpells", js: "classSpells", typ: a(r("ClassSpell")) },
        { json: "customItems", js: "customItems", typ: a(r("CustomItem")) },
        { json: "campaign", js: "campaign", typ: r("Campaign") },
        { json: "creatures", js: "creatures", typ: a("any") },
        { json: "optionalOrigins", js: "optionalOrigins", typ: a("any") },
        { json: "optionalClassFeatures", js: "optionalClassFeatures", typ: a("any") },
        { json: "dateModified", js: "dateModified", typ: Date },
        { json: "providedFrom", js: "providedFrom", typ: "" },
        { json: "canEdit", js: "canEdit", typ: true },
        { json: "status", js: "status", typ: 0 },
        { json: "statusSlug", js: "statusSlug", typ: null },
        { json: "campaignSetting", js: "campaignSetting", typ: null },
    ], false),
    "Actions": o([
        { json: "race", js: "race", typ: a(r("ActionsClass")) },
        { json: "class", js: "class", typ: a(r("ActionsClass")) },
        { json: "background", js: "background", typ: null },
        { json: "item", js: "item", typ: null },
        { json: "feat", js: "feat", typ: a(r("ActionsClass")) },
    ], false),
    "ActionsClass": o([
        { json: "componentId", js: "componentId", typ: 0 },
        { json: "componentTypeId", js: "componentTypeId", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "entityTypeId", js: "entityTypeId", typ: "" },
        { json: "limitedUse", js: "limitedUse", typ: u(r("ClassLimitedUse"), null) },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: u(null, "") },
        { json: "snippet", js: "snippet", typ: "" },
        { json: "abilityModifierStatId", js: "abilityModifierStatId", typ: u(0, null) },
        { json: "onMissDescription", js: "onMissDescription", typ: u(null, "") },
        { json: "saveFailDescription", js: "saveFailDescription", typ: u(null, "") },
        { json: "saveSuccessDescription", js: "saveSuccessDescription", typ: u(r("SaveSuccessDescription"), null) },
        { json: "saveStatId", js: "saveStatId", typ: u(0, null) },
        { json: "fixedSaveDc", js: "fixedSaveDc", typ: null },
        { json: "attackTypeRange", js: "attackTypeRange", typ: u(0, null) },
        { json: "actionType", js: "actionType", typ: 0 },
        { json: "attackSubtype", js: "attackSubtype", typ: u(0, null) },
        { json: "dice", js: "dice", typ: u(r("Die"), null) },
        { json: "value", js: "value", typ: null },
        { json: "damageTypeId", js: "damageTypeId", typ: u(0, null) },
        { json: "isMartialArts", js: "isMartialArts", typ: true },
        { json: "isProficient", js: "isProficient", typ: true },
        { json: "spellRangeType", js: "spellRangeType", typ: null },
        { json: "displayAsAttack", js: "displayAsAttack", typ: u(true, null) },
        { json: "range", js: "range", typ: r("ClassRange") },
        { json: "activation", js: "activation", typ: r("Activation") },
        { json: "numberOfTargets", js: "numberOfTargets", typ: null },
        { json: "fixedToHit", js: "fixedToHit", typ: null },
        { json: "ammunition", js: "ammunition", typ: null },
    ], false),
    "Activation": o([
        { json: "activationTime", js: "activationTime", typ: u(0, null) },
        { json: "activationType", js: "activationType", typ: u(0, null) },
    ], false),
    "Die": o([
        { json: "diceCount", js: "diceCount", typ: u(0, null) },
        { json: "diceValue", js: "diceValue", typ: u(0, null) },
        { json: "diceMultiplier", js: "diceMultiplier", typ: u(0, null) },
        { json: "fixedValue", js: "fixedValue", typ: u(0, null) },
        { json: "diceString", js: "diceString", typ: u(null, "") },
    ], false),
    "ClassLimitedUse": o([
        { json: "name", js: "name", typ: null },
        { json: "statModifierUsesId", js: "statModifierUsesId", typ: null },
        { json: "resetType", js: "resetType", typ: 0 },
        { json: "numberUsed", js: "numberUsed", typ: 0 },
        { json: "minNumberConsumed", js: "minNumberConsumed", typ: u(0, null) },
        { json: "maxNumberConsumed", js: "maxNumberConsumed", typ: 0 },
        { json: "maxUses", js: "maxUses", typ: 0 },
        { json: "operator", js: "operator", typ: 0 },
        { json: "useProficiencyBonus", js: "useProficiencyBonus", typ: true },
        { json: "proficiencyBonusOperator", js: "proficiencyBonusOperator", typ: 0 },
        { json: "resetDice", js: "resetDice", typ: null },
    ], false),
    "ClassRange": o([
        { json: "range", js: "range", typ: u(0, null) },
        { json: "longRange", js: "longRange", typ: null },
        { json: "aoeType", js: "aoeType", typ: u(0, null) },
        { json: "aoeSize", js: "aoeSize", typ: u(0, null) },
        { json: "hasAoeSpecialDescription", js: "hasAoeSpecialDescription", typ: true },
        { json: "minimumRange", js: "minimumRange", typ: null },
    ], false),
    "DataBackground": o([
        { json: "hasCustomBackground", js: "hasCustomBackground", typ: true },
        { json: "definition", js: "definition", typ: r("BackgroundDefinition") },
        { json: "definitionId", js: "definitionId", typ: null },
        { json: "customBackground", js: "customBackground", typ: r("CustomBackground") },
    ], false),
    "CustomBackground": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "name", js: "name", typ: null },
        { json: "description", js: "description", typ: null },
        { json: "featuresBackground", js: "featuresBackground", typ: null },
        { json: "characteristicsBackground", js: "characteristicsBackground", typ: null },
        { json: "featuresBackgroundDefinitionId", js: "featuresBackgroundDefinitionId", typ: null },
        { json: "characteristicsBackgroundDefinitionId", js: "characteristicsBackgroundDefinitionId", typ: null },
        { json: "backgroundType", js: "backgroundType", typ: null },
    ], false),
    "BackgroundDefinition": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "snippet", js: "snippet", typ: "" },
        { json: "shortDescription", js: "shortDescription", typ: "" },
        { json: "skillProficienciesDescription", js: "skillProficienciesDescription", typ: "" },
        { json: "toolProficienciesDescription", js: "toolProficienciesDescription", typ: "" },
        { json: "languagesDescription", js: "languagesDescription", typ: "" },
        { json: "equipmentDescription", js: "equipmentDescription", typ: "" },
        { json: "featureName", js: "featureName", typ: "" },
        { json: "featureDescription", js: "featureDescription", typ: "" },
        { json: "avatarUrl", js: "avatarUrl", typ: null },
        { json: "largeAvatarUrl", js: "largeAvatarUrl", typ: null },
        { json: "suggestedCharacteristicsDescription", js: "suggestedCharacteristicsDescription", typ: "" },
        { json: "suggestedProficiencies", js: "suggestedProficiencies", typ: null },
        { json: "suggestedLanguages", js: "suggestedLanguages", typ: null },
        { json: "organization", js: "organization", typ: null },
        { json: "contractsDescription", js: "contractsDescription", typ: "" },
        { json: "spellsPreDescription", js: "spellsPreDescription", typ: "" },
        { json: "spellsPostDescription", js: "spellsPostDescription", typ: "" },
        { json: "personalityTraits", js: "personalityTraits", typ: a(r("Bond")) },
        { json: "ideals", js: "ideals", typ: a(r("Bond")) },
        { json: "bonds", js: "bonds", typ: a(r("Bond")) },
        { json: "flaws", js: "flaws", typ: a(r("Bond")) },
        { json: "isHomebrew", js: "isHomebrew", typ: true },
        { json: "sources", js: "sources", typ: a(r("Source")) },
        { json: "spellListIds", js: "spellListIds", typ: a("any") },
        { json: "featList", js: "featList", typ: u(r("FeatList"), null) },
        { json: "grantedFeats", js: "grantedFeats", typ: a(r("FeatList")) },
    ], false),
    "Bond": o([
        { json: "id", js: "id", typ: 0 },
        { json: "description", js: "description", typ: "" },
        { json: "diceRoll", js: "diceRoll", typ: 0 },
    ], false),
    "FeatList": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "featIds", js: "featIds", typ: a(0) },
    ], false),
    "Source": o([
        { json: "sourceId", js: "sourceId", typ: 0 },
        { json: "pageNumber", js: "pageNumber", typ: u(0, null) },
        { json: "sourceType", js: "sourceType", typ: 0 },
    ], false),
    "Stat": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: null },
        { json: "value", js: "value", typ: u(0, null) },
    ], false),
    "Campaign": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "link", js: "link", typ: "" },
        { json: "publicNotes", js: "publicNotes", typ: "" },
        { json: "dmUserId", js: "dmUserId", typ: 0 },
        { json: "dmUsername", js: "dmUsername", typ: "" },
        { json: "characters", js: "characters", typ: a(r("Character")) },
    ], false),
    "Character": o([
        { json: "userId", js: "userId", typ: 0 },
        { json: "username", js: "username", typ: "" },
        { json: "characterId", js: "characterId", typ: 0 },
        { json: "characterName", js: "characterName", typ: "" },
        { json: "characterUrl", js: "characterUrl", typ: "" },
        { json: "avatarUrl", js: "avatarUrl", typ: u(null, "") },
        { json: "privacyType", js: "privacyType", typ: 0 },
        { json: "campaignId", js: "campaignId", typ: null },
        { json: "isAssigned", js: "isAssigned", typ: true },
    ], false),
    "CharacterValue": o([
        { json: "typeId", js: "typeId", typ: 0 },
        { json: "value", js: "value", typ: u(0, "") },
        { json: "notes", js: "notes", typ: u(null, "") },
        { json: "valueId", js: "valueId", typ: u(null, "") },
        { json: "valueTypeId", js: "valueTypeId", typ: u(null, "") },
        { json: "contextId", js: "contextId", typ: null },
        { json: "contextTypeId", js: "contextTypeId", typ: null },
    ], false),
    "Choices": o([
        { json: "race", js: "race", typ: a(r("ChoicesBackground")) },
        { json: "class", js: "class", typ: a(r("ChoicesBackground")) },
        { json: "background", js: "background", typ: a(r("ChoicesBackground")) },
        { json: "item", js: "item", typ: null },
        { json: "feat", js: "feat", typ: a(r("ChoicesBackground")) },
        { json: "choiceDefinitions", js: "choiceDefinitions", typ: a(r("ChoiceDefinition")) },
        { json: "definitionKeyNameMap", js: "definitionKeyNameMap", typ: r("DefinitionKeyNameMap") },
    ], false),
    "ChoicesBackground": o([
        { json: "componentId", js: "componentId", typ: 0 },
        { json: "componentTypeId", js: "componentTypeId", typ: 0 },
        { json: "id", js: "id", typ: "" },
        { json: "parentChoiceId", js: "parentChoiceId", typ: u(null, "") },
        { json: "type", js: "type", typ: 0 },
        { json: "subType", js: "subType", typ: u(0, null) },
        { json: "optionValue", js: "optionValue", typ: u(0, null) },
        { json: "label", js: "label", typ: u(null, "") },
        { json: "isOptional", js: "isOptional", typ: true },
        { json: "isInfinite", js: "isInfinite", typ: true },
        { json: "defaultSubtypes", js: "defaultSubtypes", typ: a("") },
        { json: "displayOrder", js: "displayOrder", typ: u(0, null) },
        { json: "options", js: "options", typ: a("any") },
        { json: "optionIds", js: "optionIds", typ: a(0) },
        { json: "tagConstraints", js: "tagConstraints", typ: a(r("TagConstraint")) },
    ], false),
    "TagConstraint": o([
        { json: "id", js: "id", typ: 0 },
        { json: "parentComponentTypeId", js: "parentComponentTypeId", typ: 0 },
        { json: "parentComponentId", js: "parentComponentId", typ: 0 },
        { json: "entityModifierId", js: "entityModifierId", typ: 0 },
        { json: "entityTagId", js: "entityTagId", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "tagName", js: "tagName", typ: "" },
    ], false),
    "ChoiceDefinition": o([
        { json: "id", js: "id", typ: "" },
        { json: "options", js: "options", typ: a(r("Option")) },
    ], false),
    "Option": o([
        { json: "id", js: "id", typ: 0 },
        { json: "label", js: "label", typ: "" },
        { json: "description", js: "description", typ: u(null, "") },
        { json: "sourceId", js: "sourceId", typ: u(0, null) },
    ], false),
    "DefinitionKeyNameMap": o([
        { json: "feat:1970713", js: "feat:1970713", typ: u(undefined, "") },
        { json: "feat:1789165", js: "feat:1789165", typ: u(undefined, "") },
        { json: "feat:1789181", js: "feat:1789181", typ: u(undefined, "") },
    ], false),
    "ClassSpell": o([
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "characterClassId", js: "characterClassId", typ: 0 },
        { json: "spells", js: "spells", typ: a(r("Spell")) },
    ], false),
    "Spell": o([
        { json: "overrideSaveDc", js: "overrideSaveDc", typ: null },
        { json: "limitedUse", js: "limitedUse", typ: null },
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "definition", js: "definition", typ: r("SpellDefinition") },
        { json: "definitionId", js: "definitionId", typ: 0 },
        { json: "prepared", js: "prepared", typ: true },
        { json: "countsAsKnownSpell", js: "countsAsKnownSpell", typ: true },
        { json: "usesSpellSlot", js: "usesSpellSlot", typ: true },
        { json: "castAtLevel", js: "castAtLevel", typ: null },
        { json: "alwaysPrepared", js: "alwaysPrepared", typ: true },
        { json: "restriction", js: "restriction", typ: null },
        { json: "spellCastingAbilityId", js: "spellCastingAbilityId", typ: null },
        { json: "displayAsAttack", js: "displayAsAttack", typ: null },
        { json: "additionalDescription", js: "additionalDescription", typ: null },
        { json: "castOnlyAsRitual", js: "castOnlyAsRitual", typ: true },
        { json: "ritualCastingType", js: "ritualCastingType", typ: null },
        { json: "range", js: "range", typ: r("DefinitionRange") },
        { json: "activation", js: "activation", typ: r("Activation") },
        { json: "baseLevelAtWill", js: "baseLevelAtWill", typ: true },
        { json: "atWillLimitedUseLevel", js: "atWillLimitedUseLevel", typ: null },
        { json: "isSignatureSpell", js: "isSignatureSpell", typ: null },
        { json: "componentId", js: "componentId", typ: 0 },
        { json: "componentTypeId", js: "componentTypeId", typ: 0 },
        { json: "spellListId", js: "spellListId", typ: null },
    ], false),
    "SpellDefinition": o([
        { json: "id", js: "id", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "level", js: "level", typ: 0 },
        { json: "school", js: "school", typ: "" },
        { json: "duration", js: "duration", typ: r("DefinitionDuration") },
        { json: "activation", js: "activation", typ: r("Activation") },
        { json: "range", js: "range", typ: r("DefinitionRange") },
        { json: "asPartOfWeaponAttack", js: "asPartOfWeaponAttack", typ: true },
        { json: "description", js: "description", typ: "" },
        { json: "snippet", js: "snippet", typ: "" },
        { json: "concentration", js: "concentration", typ: true },
        { json: "ritual", js: "ritual", typ: true },
        { json: "rangeArea", js: "rangeArea", typ: null },
        { json: "damageEffect", js: "damageEffect", typ: null },
        { json: "components", js: "components", typ: a(0) },
        { json: "componentsDescription", js: "componentsDescription", typ: "" },
        { json: "saveDcAbilityId", js: "saveDcAbilityId", typ: u(0, null) },
        { json: "healing", js: "healing", typ: null },
        { json: "healingDice", js: "healingDice", typ: a("any") },
        { json: "tempHpDice", js: "tempHpDice", typ: a("any") },
        { json: "attackType", js: "attackType", typ: u(0, null) },
        { json: "canCastAtHigherLevel", js: "canCastAtHigherLevel", typ: true },
        { json: "isHomebrew", js: "isHomebrew", typ: true },
        { json: "version", js: "version", typ: u(null, "") },
        { json: "sourceId", js: "sourceId", typ: null },
        { json: "sourcePageNumber", js: "sourcePageNumber", typ: u(0, null) },
        { json: "requiresSavingThrow", js: "requiresSavingThrow", typ: true },
        { json: "requiresAttackRoll", js: "requiresAttackRoll", typ: true },
        { json: "atHigherLevels", js: "atHigherLevels", typ: r("AtHigherLevels") },
        { json: "modifiers", js: "modifiers", typ: a(r("ItemElement")) },
        { json: "conditions", js: "conditions", typ: a(r("Condition")) },
        { json: "tags", js: "tags", typ: a("") },
        { json: "castingTimeDescription", js: "castingTimeDescription", typ: "" },
        { json: "scaleType", js: "scaleType", typ: u(r("ScaleType"), null) },
        { json: "sources", js: "sources", typ: a(r("Source")) },
        { json: "spellGroups", js: "spellGroups", typ: a(0) },
        { json: "isLegacy", js: "isLegacy", typ: true },
    ], false),
    "AtHigherLevels": o([
        { json: "higherLevelDefinitions", js: "higherLevelDefinitions", typ: a(r("HigherLevelDefinition")) },
        { json: "additionalAttacks", js: "additionalAttacks", typ: a("any") },
        { json: "additionalTargets", js: "additionalTargets", typ: a("any") },
        { json: "areaOfEffect", js: "areaOfEffect", typ: a("any") },
        { json: "duration", js: "duration", typ: a("any") },
        { json: "creatures", js: "creatures", typ: a("any") },
        { json: "special", js: "special", typ: a("any") },
        { json: "points", js: "points", typ: a("any") },
        { json: "range", js: "range", typ: a("any") },
    ], false),
    "HigherLevelDefinition": o([
        { json: "level", js: "level", typ: u(0, null) },
        { json: "typeId", js: "typeId", typ: 0 },
        { json: "dice", js: "dice", typ: u(r("Die"), null) },
        { json: "value", js: "value", typ: u(0, null) },
        { json: "details", js: "details", typ: "" },
    ], false),
    "Condition": o([
        { json: "type", js: "type", typ: 0 },
        { json: "conditionId", js: "conditionId", typ: 0 },
        { json: "conditionDuration", js: "conditionDuration", typ: 0 },
        { json: "durationUnit", js: "durationUnit", typ: r("DurationUnit") },
        { json: "exception", js: "exception", typ: "" },
    ], false),
    "DefinitionDuration": o([
        { json: "durationInterval", js: "durationInterval", typ: 0 },
        { json: "durationUnit", js: "durationUnit", typ: u(r("DurationUnit"), null) },
        { json: "durationType", js: "durationType", typ: r("DurationType") },
    ], false),
    "ItemElement": o([
        { json: "fixedValue", js: "fixedValue", typ: u(0, null) },
        { json: "id", js: "id", typ: "" },
        { json: "entityId", js: "entityId", typ: u(0, null) },
        { json: "entityTypeId", js: "entityTypeId", typ: u(0, null) },
        { json: "type", js: "type", typ: r("Type") },
        { json: "subType", js: "subType", typ: "" },
        { json: "dice", js: "dice", typ: u(r("Die"), null) },
        { json: "restriction", js: "restriction", typ: u(null, "") },
        { json: "statId", js: "statId", typ: u(0, null) },
        { json: "requiresAttunement", js: "requiresAttunement", typ: true },
        { json: "duration", js: "duration", typ: u(r("BackgroundDuration"), null) },
        { json: "friendlyTypeName", js: "friendlyTypeName", typ: r("FriendlyTypeName") },
        { json: "friendlySubtypeName", js: "friendlySubtypeName", typ: "" },
        { json: "isGranted", js: "isGranted", typ: true },
        { json: "bonusTypes", js: "bonusTypes", typ: a(0) },
        { json: "value", js: "value", typ: u(0, null) },
        { json: "availableToMulticlass", js: "availableToMulticlass", typ: u(true, null) },
        { json: "modifierTypeId", js: "modifierTypeId", typ: 0 },
        { json: "modifierSubTypeId", js: "modifierSubTypeId", typ: 0 },
        { json: "componentId", js: "componentId", typ: 0 },
        { json: "componentTypeId", js: "componentTypeId", typ: 0 },
        { json: "die", js: "die", typ: u(undefined, r("Die")) },
        { json: "count", js: "count", typ: u(undefined, 0) },
        { json: "durationUnit", js: "durationUnit", typ: u(undefined, null) },
        { json: "usePrimaryStat", js: "usePrimaryStat", typ: u(undefined, true) },
        { json: "atHigherLevels", js: "atHigherLevels", typ: u(undefined, r("AtHigherLevels")) },
        { json: "tagConstraints", js: "tagConstraints", typ: u(undefined, a("any")) },
    ], false),
    "BackgroundDuration": o([
        { json: "durationInterval", js: "durationInterval", typ: 0 },
        { json: "durationUnit", js: "durationUnit", typ: r("DurationUnit") },
    ], false),
    "DefinitionRange": o([
        { json: "origin", js: "origin", typ: r("Origin") },
        { json: "rangeValue", js: "rangeValue", typ: u(0, null) },
        { json: "aoeType", js: "aoeType", typ: u(r("AoeType"), null) },
        { json: "aoeValue", js: "aoeValue", typ: u(0, null) },
    ], false),
    "DataClass": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "level", js: "level", typ: 0 },
        { json: "isStartingClass", js: "isStartingClass", typ: true },
        { json: "hitDiceUsed", js: "hitDiceUsed", typ: 0 },
        { json: "definitionId", js: "definitionId", typ: 0 },
        { json: "subclassDefinitionId", js: "subclassDefinitionId", typ: null },
        { json: "definition", js: "definition", typ: r("SubclassDefinitionClass") },
        { json: "subclassDefinition", js: "subclassDefinition", typ: r("SubclassDefinitionClass") },
        { json: "classFeatures", js: "classFeatures", typ: a(r("ClassClassFeature")) },
    ], false),
    "ClassClassFeature": o([
        { json: "definition", js: "definition", typ: r("ClassFeatureDefinition") },
        { json: "levelScale", js: "levelScale", typ: u(r("LevelScale"), null) },
    ], false),
    "ClassFeatureDefinition": o([
        { json: "id", js: "id", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "displayOrder", js: "displayOrder", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "snippet", js: "snippet", typ: u(null, "") },
        { json: "activation", js: "activation", typ: null },
        { json: "multiClassDescription", js: "multiClassDescription", typ: "" },
        { json: "requiredLevel", js: "requiredLevel", typ: 0 },
        { json: "isSubClassFeature", js: "isSubClassFeature", typ: true },
        { json: "limitedUse", js: "limitedUse", typ: a(r("LimitedUseElement")) },
        { json: "hideInBuilder", js: "hideInBuilder", typ: true },
        { json: "hideInSheet", js: "hideInSheet", typ: true },
        { json: "sourceId", js: "sourceId", typ: 0 },
        { json: "sourcePageNumber", js: "sourcePageNumber", typ: u(0, null) },
        { json: "creatureRules", js: "creatureRules", typ: a("any") },
        { json: "levelScales", js: "levelScales", typ: a(r("LevelScale")) },
        { json: "infusionRules", js: "infusionRules", typ: a("any") },
        { json: "spellListIds", js: "spellListIds", typ: a("any") },
        { json: "classId", js: "classId", typ: 0 },
        { json: "featureType", js: "featureType", typ: 0 },
        { json: "sources", js: "sources", typ: a(r("Source")) },
        { json: "affectedFeatureDefinitionKeys", js: "affectedFeatureDefinitionKeys", typ: a("any") },
        { json: "entityType", js: "entityType", typ: r("PurpleEntityType") },
        { json: "entityID", js: "entityID", typ: "" },
        { json: "grantedFeats", js: "grantedFeats", typ: a("any") },
    ], false),
    "LevelScale": o([
        { json: "id", js: "id", typ: 0 },
        { json: "level", js: "level", typ: 0 },
        { json: "description", js: "description", typ: "" },
        { json: "dice", js: "dice", typ: u(r("Die"), null) },
        { json: "fixedValue", js: "fixedValue", typ: u(0, null) },
    ], false),
    "LimitedUseElement": o([
        { json: "level", js: "level", typ: null },
        { json: "uses", js: "uses", typ: 0 },
    ], false),
    "SubclassDefinitionClass": o([
        { json: "id", js: "id", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "equipmentDescription", js: "equipmentDescription", typ: u(null, "") },
        { json: "parentClassId", js: "parentClassId", typ: u(0, null) },
        { json: "avatarUrl", js: "avatarUrl", typ: u(null, "") },
        { json: "largeAvatarUrl", js: "largeAvatarUrl", typ: u(null, "") },
        { json: "portraitAvatarUrl", js: "portraitAvatarUrl", typ: u(null, "") },
        { json: "moreDetailsUrl", js: "moreDetailsUrl", typ: "" },
        { json: "spellCastingAbilityId", js: "spellCastingAbilityId", typ: u(0, null) },
        { json: "sources", js: "sources", typ: a(r("Source")) },
        { json: "classFeatures", js: "classFeatures", typ: a(r("DefinitionClassFeature")) },
        { json: "hitDice", js: "hitDice", typ: 0 },
        { json: "wealthDice", js: "wealthDice", typ: u(r("Die"), null) },
        { json: "canCastSpells", js: "canCastSpells", typ: true },
        { json: "knowsAllSpells", js: "knowsAllSpells", typ: u(true, null) },
        { json: "spellPrepareType", js: "spellPrepareType", typ: u(0, null) },
        { json: "spellCastingLearningStyle", js: "spellCastingLearningStyle", typ: u(0, null) },
        { json: "spellContainerName", js: "spellContainerName", typ: u(null, "") },
        { json: "sourcePageNumber", js: "sourcePageNumber", typ: 0 },
        { json: "subclassDefinition", js: "subclassDefinition", typ: null },
        { json: "isHomebrew", js: "isHomebrew", typ: true },
        { json: "primaryAbilities", js: "primaryAbilities", typ: u(a(0), null) },
        { json: "spellRules", js: "spellRules", typ: u(r("SpellRules"), null) },
        { json: "prerequisites", js: "prerequisites", typ: u(a(r("Prerequisite")), null) },
    ], false),
    "DefinitionClassFeature": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "prerequisite", js: "prerequisite", typ: null },
        { json: "description", js: "description", typ: "" },
        { json: "requiredLevel", js: "requiredLevel", typ: 0 },
        { json: "displayOrder", js: "displayOrder", typ: 0 },
    ], false),
    "Prerequisite": o([
        { json: "description", js: "description", typ: "" },
        { json: "prerequisiteMappings", js: "prerequisiteMappings", typ: a(r("PrerequisiteMapping")) },
        { json: "hidePrerequisite", js: "hidePrerequisite", typ: true },
    ], false),
    "PrerequisiteMapping": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityId", js: "entityId", typ: u(0, null) },
        { json: "entityTypeId", js: "entityTypeId", typ: u(0, null) },
        { json: "type", js: "type", typ: "" },
        { json: "subType", js: "subType", typ: "" },
        { json: "value", js: "value", typ: 0 },
        { json: "friendlyTypeName", js: "friendlyTypeName", typ: "" },
        { json: "friendlySubTypeName", js: "friendlySubTypeName", typ: "" },
    ], false),
    "SpellRules": o([
        { json: "multiClassSpellSlotDivisor", js: "multiClassSpellSlotDivisor", typ: 0 },
        { json: "isRitualSpellCaster", js: "isRitualSpellCaster", typ: true },
        { json: "levelCantripsKnownMaxes", js: "levelCantripsKnownMaxes", typ: a(0) },
        { json: "levelSpellKnownMaxes", js: "levelSpellKnownMaxes", typ: a(0) },
        { json: "levelSpellSlots", js: "levelSpellSlots", typ: a(a(0)) },
        { json: "multiClassSpellSlotRounding", js: "multiClassSpellSlotRounding", typ: 0 },
        { json: "levelPreparedSpellMaxes", js: "levelPreparedSpellMaxes", typ: a(0) },
    ], false),
    "Configuration": o([
        { json: "startingEquipmentType", js: "startingEquipmentType", typ: 0 },
        { json: "abilityScoreType", js: "abilityScoreType", typ: 0 },
        { json: "showHelpText", js: "showHelpText", typ: true },
    ], false),
    "Currencies": o([
        { json: "cp", js: "cp", typ: 0 },
        { json: "sp", js: "sp", typ: 0 },
        { json: "gp", js: "gp", typ: 0 },
        { json: "ep", js: "ep", typ: 0 },
        { json: "pp", js: "pp", typ: 0 },
    ], false),
    "CustomItem": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: u(null, "") },
        { json: "weight", js: "weight", typ: u(0, null) },
        { json: "cost", js: "cost", typ: null },
        { json: "quantity", js: "quantity", typ: 0 },
        { json: "notes", js: "notes", typ: u(null, "") },
    ], false),
    "DeathSaves": o([
        { json: "failCount", js: "failCount", typ: u(0, null) },
        { json: "successCount", js: "successCount", typ: u(0, null) },
        { json: "isStabilized", js: "isStabilized", typ: true },
    ], false),
    "Decorations": o([
        { json: "avatarUrl", js: "avatarUrl", typ: u(null, "") },
        { json: "frameAvatarUrl", js: "frameAvatarUrl", typ: null },
        { json: "backdropAvatarUrl", js: "backdropAvatarUrl", typ: null },
        { json: "smallBackdropAvatarUrl", js: "smallBackdropAvatarUrl", typ: null },
        { json: "largeBackdropAvatarUrl", js: "largeBackdropAvatarUrl", typ: null },
        { json: "thumbnailBackdropAvatarUrl", js: "thumbnailBackdropAvatarUrl", typ: null },
        { json: "defaultBackdrop", js: "defaultBackdrop", typ: r("DefaultBackdrop") },
        { json: "avatarId", js: "avatarId", typ: u(0, null) },
        { json: "portraitDecorationKey", js: "portraitDecorationKey", typ: u(null, "") },
        { json: "frameAvatarDecorationKey", js: "frameAvatarDecorationKey", typ: null },
        { json: "frameAvatarId", js: "frameAvatarId", typ: null },
        { json: "backdropAvatarDecorationKey", js: "backdropAvatarDecorationKey", typ: null },
        { json: "backdropAvatarId", js: "backdropAvatarId", typ: null },
        { json: "smallBackdropAvatarDecorationKey", js: "smallBackdropAvatarDecorationKey", typ: "" },
        { json: "smallBackdropAvatarId", js: "smallBackdropAvatarId", typ: null },
        { json: "largeBackdropAvatarDecorationKey", js: "largeBackdropAvatarDecorationKey", typ: "" },
        { json: "largeBackdropAvatarId", js: "largeBackdropAvatarId", typ: null },
        { json: "thumbnailBackdropAvatarDecorationKey", js: "thumbnailBackdropAvatarDecorationKey", typ: "" },
        { json: "thumbnailBackdropAvatarId", js: "thumbnailBackdropAvatarId", typ: null },
        { json: "themeColor", js: "themeColor", typ: null },
    ], false),
    "DefaultBackdrop": o([
        { json: "backdropAvatarUrl", js: "backdropAvatarUrl", typ: "" },
        { json: "smallBackdropAvatarUrl", js: "smallBackdropAvatarUrl", typ: "" },
        { json: "largeBackdropAvatarUrl", js: "largeBackdropAvatarUrl", typ: "" },
        { json: "thumbnailBackdropAvatarUrl", js: "thumbnailBackdropAvatarUrl", typ: "" },
    ], false),
    "DataFeat": o([
        { json: "componentTypeId", js: "componentTypeId", typ: u(0, null) },
        { json: "componentId", js: "componentId", typ: u(0, null) },
        { json: "definition", js: "definition", typ: r("PurpleDefinition") },
        { json: "definitionId", js: "definitionId", typ: 0 },
    ], false),
    "PurpleDefinition": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "snippet", js: "snippet", typ: "" },
        { json: "activation", js: "activation", typ: r("Activation") },
        { json: "sourceId", js: "sourceId", typ: null },
        { json: "sourcePageNumber", js: "sourcePageNumber", typ: null },
        { json: "creatureRules", js: "creatureRules", typ: a("any") },
        { json: "prerequisites", js: "prerequisites", typ: a(r("Prerequisite")) },
        { json: "isHomebrew", js: "isHomebrew", typ: true },
        { json: "sources", js: "sources", typ: a(r("Source")) },
        { json: "spellListIds", js: "spellListIds", typ: a("any") },
        { json: "isRepeatable", js: "isRepeatable", typ: true },
        { json: "repeatableParentId", js: "repeatableParentId", typ: null },
        { json: "categories", js: "categories", typ: a(r("Category")) },
    ], false),
    "Category": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "entityId", js: "entityId", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "entityTagId", js: "entityTagId", typ: 0 },
        { json: "tagName", js: "tagName", typ: "" },
    ], false),
    "Inventory": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "definition", js: "definition", typ: r("InventoryDefinition") },
        { json: "definitionId", js: "definitionId", typ: 0 },
        { json: "definitionTypeId", js: "definitionTypeId", typ: 0 },
        { json: "displayAsAttack", js: "displayAsAttack", typ: null },
        { json: "quantity", js: "quantity", typ: 0 },
        { json: "isAttuned", js: "isAttuned", typ: true },
        { json: "equipped", js: "equipped", typ: true },
        { json: "equippedEntityTypeId", js: "equippedEntityTypeId", typ: u(0, null) },
        { json: "equippedEntityId", js: "equippedEntityId", typ: u(0, null) },
        { json: "chargesUsed", js: "chargesUsed", typ: 0 },
        { json: "limitedUse", js: "limitedUse", typ: u(r("InventoryLimitedUse"), null) },
        { json: "containerEntityId", js: "containerEntityId", typ: 0 },
        { json: "containerEntityTypeId", js: "containerEntityTypeId", typ: 0 },
        { json: "containerDefinitionKey", js: "containerDefinitionKey", typ: r("ContainerDefinitionKey") },
        { json: "currency", js: "currency", typ: null },
    ], false),
    "InventoryDefinition": o([
        { json: "id", js: "id", typ: 0 },
        { json: "baseTypeId", js: "baseTypeId", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "canEquip", js: "canEquip", typ: true },
        { json: "magic", js: "magic", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "snippet", js: "snippet", typ: u(null, "") },
        { json: "weight", js: "weight", typ: 3.14 },
        { json: "weightMultiplier", js: "weightMultiplier", typ: 0 },
        { json: "capacity", js: "capacity", typ: u(null, "") },
        { json: "capacityWeight", js: "capacityWeight", typ: 0 },
        { json: "type", js: "type", typ: u(null, "") },
        { json: "description", js: "description", typ: "" },
        { json: "canAttune", js: "canAttune", typ: true },
        { json: "attunementDescription", js: "attunementDescription", typ: u(r("AttunementDescription"), null) },
        { json: "rarity", js: "rarity", typ: r("Rarity") },
        { json: "isHomebrew", js: "isHomebrew", typ: true },
        { json: "version", js: "version", typ: u(null, "") },
        { json: "sourceId", js: "sourceId", typ: null },
        { json: "sourcePageNumber", js: "sourcePageNumber", typ: null },
        { json: "stackable", js: "stackable", typ: true },
        { json: "bundleSize", js: "bundleSize", typ: 0 },
        { json: "avatarUrl", js: "avatarUrl", typ: u(null, "") },
        { json: "largeAvatarUrl", js: "largeAvatarUrl", typ: u(null, "") },
        { json: "filterType", js: "filterType", typ: r("FilterType") },
        { json: "cost", js: "cost", typ: u(3.14, null) },
        { json: "isPack", js: "isPack", typ: true },
        { json: "tags", js: "tags", typ: a("") },
        { json: "grantedModifiers", js: "grantedModifiers", typ: a(r("ItemElement")) },
        { json: "subType", js: "subType", typ: u(r("SubType"), null) },
        { json: "isConsumable", js: "isConsumable", typ: true },
        { json: "weaponBehaviors", js: "weaponBehaviors", typ: a(r("WeaponBehavior")) },
        { json: "baseItemId", js: "baseItemId", typ: u(0, null) },
        { json: "baseArmorName", js: "baseArmorName", typ: u(r("BaseArmorName"), null) },
        { json: "strengthRequirement", js: "strengthRequirement", typ: u(0, null) },
        { json: "armorClass", js: "armorClass", typ: u(0, null) },
        { json: "stealthCheck", js: "stealthCheck", typ: u(0, null) },
        { json: "damage", js: "damage", typ: u(r("Die"), null) },
        { json: "damageType", js: "damageType", typ: u(r("DamageType"), null) },
        { json: "fixedDamage", js: "fixedDamage", typ: u(0, null) },
        { json: "properties", js: "properties", typ: u(a(r("Property")), null) },
        { json: "attackType", js: "attackType", typ: u(0, null) },
        { json: "categoryId", js: "categoryId", typ: u(0, null) },
        { json: "range", js: "range", typ: u(0, null) },
        { json: "longRange", js: "longRange", typ: u(0, null) },
        { json: "isMonkWeapon", js: "isMonkWeapon", typ: true },
        { json: "levelInfusionGranted", js: "levelInfusionGranted", typ: u(0, null) },
        { json: "sources", js: "sources", typ: a(r("Source")) },
        { json: "armorTypeId", js: "armorTypeId", typ: u(0, null) },
        { json: "gearTypeId", js: "gearTypeId", typ: u(0, null) },
        { json: "groupedId", js: "groupedId", typ: u(0, null) },
        { json: "canBeAddedToInventory", js: "canBeAddedToInventory", typ: true },
        { json: "isContainer", js: "isContainer", typ: true },
        { json: "isCustomItem", js: "isCustomItem", typ: true },
        { json: "isLegacy", js: "isLegacy", typ: true },
    ], false),
    "Property": o([
        { json: "id", js: "id", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "notes", js: "notes", typ: u(null, "") },
    ], false),
    "WeaponBehavior": o([
        { json: "baseItemId", js: "baseItemId", typ: 0 },
        { json: "baseTypeId", js: "baseTypeId", typ: 0 },
        { json: "type", js: "type", typ: "" },
        { json: "attackType", js: "attackType", typ: 0 },
        { json: "categoryId", js: "categoryId", typ: 0 },
        { json: "properties", js: "properties", typ: a(r("Property")) },
        { json: "damage", js: "damage", typ: r("Die") },
        { json: "damageType", js: "damageType", typ: r("DamageType") },
        { json: "range", js: "range", typ: 0 },
        { json: "longRange", js: "longRange", typ: 0 },
        { json: "isMonkWeapon", js: "isMonkWeapon", typ: true },
    ], false),
    "InventoryLimitedUse": o([
        { json: "maxUses", js: "maxUses", typ: 0 },
        { json: "numberUsed", js: "numberUsed", typ: 0 },
        { json: "resetType", js: "resetType", typ: "" },
        { json: "resetTypeDescription", js: "resetTypeDescription", typ: "" },
    ], false),
    "Modifiers": o([
        { json: "race", js: "race", typ: a(r("ItemElement")) },
        { json: "class", js: "class", typ: a(r("ItemElement")) },
        { json: "background", js: "background", typ: a(r("ItemElement")) },
        { json: "item", js: "item", typ: a(r("ItemElement")) },
        { json: "feat", js: "feat", typ: a(r("ItemElement")) },
        { json: "condition", js: "condition", typ: a("any") },
    ], false),
    "Notes": o([
        { json: "allies", js: "allies", typ: null },
        { json: "personalPossessions", js: "personalPossessions", typ: u(null, "") },
        { json: "otherHoldings", js: "otherHoldings", typ: null },
        { json: "organizations", js: "organizations", typ: u(null, "") },
        { json: "enemies", js: "enemies", typ: null },
        { json: "backstory", js: "backstory", typ: u(null, "") },
        { json: "otherNotes", js: "otherNotes", typ: u(null, "") },
    ], false),
    "Options": o([
        { json: "race", js: "race", typ: a(r("OptionsClass")) },
        { json: "class", js: "class", typ: a(r("OptionsClass")) },
        { json: "background", js: "background", typ: null },
        { json: "item", js: "item", typ: null },
        { json: "feat", js: "feat", typ: a(r("OptionsClass")) },
    ], false),
    "OptionsClass": o([
        { json: "componentId", js: "componentId", typ: 0 },
        { json: "componentTypeId", js: "componentTypeId", typ: 0 },
        { json: "definition", js: "definition", typ: r("RaceDefinition") },
    ], false),
    "RaceDefinition": o([
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "snippet", js: "snippet", typ: "" },
        { json: "activation", js: "activation", typ: null },
        { json: "sourceId", js: "sourceId", typ: u(0, null) },
        { json: "sourcePageNumber", js: "sourcePageNumber", typ: u(0, null) },
        { json: "creatureRules", js: "creatureRules", typ: a("any") },
        { json: "spellListIds", js: "spellListIds", typ: a("any") },
    ], false),
    "PactMagic": o([
        { json: "level", js: "level", typ: 0 },
        { json: "used", js: "used", typ: 0 },
        { json: "available", js: "available", typ: 0 },
    ], false),
    "Preferences": o([
        { json: "useHomebrewContent", js: "useHomebrewContent", typ: true },
        { json: "progressionType", js: "progressionType", typ: 0 },
        { json: "encumbranceType", js: "encumbranceType", typ: 0 },
        { json: "ignoreCoinWeight", js: "ignoreCoinWeight", typ: true },
        { json: "hitPointType", js: "hitPointType", typ: 0 },
        { json: "showUnarmedStrike", js: "showUnarmedStrike", typ: true },
        { json: "showScaledSpells", js: "showScaledSpells", typ: true },
        { json: "primarySense", js: "primarySense", typ: 0 },
        { json: "primaryMovement", js: "primaryMovement", typ: 0 },
        { json: "privacyType", js: "privacyType", typ: 0 },
        { json: "sharingType", js: "sharingType", typ: 0 },
        { json: "abilityScoreDisplayType", js: "abilityScoreDisplayType", typ: 0 },
        { json: "enforceFeatRules", js: "enforceFeatRules", typ: true },
        { json: "enforceMulticlassRules", js: "enforceMulticlassRules", typ: true },
        { json: "enableOptionalClassFeatures", js: "enableOptionalClassFeatures", typ: true },
        { json: "enableOptionalOrigins", js: "enableOptionalOrigins", typ: true },
        { json: "enableDarkMode", js: "enableDarkMode", typ: true },
        { json: "enableContainerCurrency", js: "enableContainerCurrency", typ: true },
    ], false),
    "Race": o([
        { json: "isSubRace", js: "isSubRace", typ: true },
        { json: "baseRaceName", js: "baseRaceName", typ: "" },
        { json: "entityRaceId", js: "entityRaceId", typ: 0 },
        { json: "entityRaceTypeId", js: "entityRaceTypeId", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "fullName", js: "fullName", typ: "" },
        { json: "baseRaceId", js: "baseRaceId", typ: 0 },
        { json: "baseRaceTypeId", js: "baseRaceTypeId", typ: 0 },
        { json: "description", js: "description", typ: "" },
        { json: "avatarUrl", js: "avatarUrl", typ: "" },
        { json: "largeAvatarUrl", js: "largeAvatarUrl", typ: "" },
        { json: "portraitAvatarUrl", js: "portraitAvatarUrl", typ: "" },
        { json: "moreDetailsUrl", js: "moreDetailsUrl", typ: "" },
        { json: "isHomebrew", js: "isHomebrew", typ: true },
        { json: "isLegacy", js: "isLegacy", typ: true },
        { json: "groupIds", js: "groupIds", typ: a(0) },
        { json: "type", js: "type", typ: 0 },
        { json: "supportsSubrace", js: "supportsSubrace", typ: null },
        { json: "subRaceShortName", js: "subRaceShortName", typ: null },
        { json: "baseName", js: "baseName", typ: "" },
        { json: "racialTraits", js: "racialTraits", typ: a(r("RacialTrait")) },
        { json: "weightSpeeds", js: "weightSpeeds", typ: r("WeightSpeeds") },
        { json: "featIds", js: "featIds", typ: a("any") },
        { json: "size", js: "size", typ: null },
        { json: "sizeId", js: "sizeId", typ: 0 },
        { json: "sources", js: "sources", typ: a(r("Source")) },
    ], false),
    "RacialTrait": o([
        { json: "definition", js: "definition", typ: r("RacialTraitDefinition") },
    ], false),
    "RacialTraitDefinition": o([
        { json: "id", js: "id", typ: 0 },
        { json: "definitionKey", js: "definitionKey", typ: "" },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "displayOrder", js: "displayOrder", typ: u(0, null) },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "snippet", js: "snippet", typ: u(null, "") },
        { json: "hideInBuilder", js: "hideInBuilder", typ: true },
        { json: "hideInSheet", js: "hideInSheet", typ: true },
        { json: "activation", js: "activation", typ: null },
        { json: "sourceId", js: "sourceId", typ: 0 },
        { json: "sourcePageNumber", js: "sourcePageNumber", typ: u(0, null) },
        { json: "creatureRules", js: "creatureRules", typ: a("any") },
        { json: "spellListIds", js: "spellListIds", typ: a("any") },
        { json: "featureType", js: "featureType", typ: 0 },
        { json: "sources", js: "sources", typ: a(r("Source")) },
        { json: "affectedFeatureDefinitionKeys", js: "affectedFeatureDefinitionKeys", typ: a("any") },
        { json: "isCalledOut", js: "isCalledOut", typ: true },
        { json: "entityType", js: "entityType", typ: r("FluffyEntityType") },
        { json: "entityID", js: "entityID", typ: "" },
        { json: "entityRaceId", js: "entityRaceId", typ: 0 },
        { json: "entityRaceTypeId", js: "entityRaceTypeId", typ: 0 },
        { json: "displayConfiguration", js: "displayConfiguration", typ: r("DisplayConfiguration") },
        { json: "requiredLevel", js: "requiredLevel", typ: null },
        { json: "categories", js: "categories", typ: a(r("Category")) },
    ], false),
    "DisplayConfiguration": o([
        { json: "RACIALTRAIT", js: "RACIALTRAIT", typ: 0 },
        { json: "ABILITYSCORE", js: "ABILITYSCORE", typ: 0 },
        { json: "LANGUAGE", js: "LANGUAGE", typ: 0 },
        { json: "CLASSFEATURE", js: "CLASSFEATURE", typ: 0 },
    ], false),
    "WeightSpeeds": o([
        { json: "normal", js: "normal", typ: r("Normal") },
        { json: "encumbered", js: "encumbered", typ: null },
        { json: "heavilyEncumbered", js: "heavilyEncumbered", typ: null },
        { json: "pushDragLift", js: "pushDragLift", typ: null },
        { json: "override", js: "override", typ: null },
    ], false),
    "Normal": o([
        { json: "walk", js: "walk", typ: 0 },
        { json: "fly", js: "fly", typ: 0 },
        { json: "burrow", js: "burrow", typ: 0 },
        { json: "swim", js: "swim", typ: 0 },
        { json: "climb", js: "climb", typ: 0 },
    ], false),
    "Spells": o([
        { json: "race", js: "race", typ: a("any") },
        { json: "class", js: "class", typ: a("any") },
        { json: "background", js: "background", typ: null },
        { json: "item", js: "item", typ: a(r("Item")) },
        { json: "feat", js: "feat", typ: a(r("SpellsFeat")) },
    ], false),
    "SpellsFeat": o([
        { json: "overrideSaveDc", js: "overrideSaveDc", typ: null },
        { json: "limitedUse", js: "limitedUse", typ: u(r("ClassLimitedUse"), null) },
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "definition", js: "definition", typ: r("SpellDefinition") },
        { json: "definitionId", js: "definitionId", typ: 0 },
        { json: "prepared", js: "prepared", typ: true },
        { json: "countsAsKnownSpell", js: "countsAsKnownSpell", typ: true },
        { json: "usesSpellSlot", js: "usesSpellSlot", typ: true },
        { json: "castAtLevel", js: "castAtLevel", typ: u(0, null) },
        { json: "alwaysPrepared", js: "alwaysPrepared", typ: true },
        { json: "restriction", js: "restriction", typ: "" },
        { json: "spellCastingAbilityId", js: "spellCastingAbilityId", typ: u(0, null) },
        { json: "displayAsAttack", js: "displayAsAttack", typ: null },
        { json: "additionalDescription", js: "additionalDescription", typ: "" },
        { json: "castOnlyAsRitual", js: "castOnlyAsRitual", typ: true },
        { json: "ritualCastingType", js: "ritualCastingType", typ: null },
        { json: "range", js: "range", typ: r("DefinitionRange") },
        { json: "activation", js: "activation", typ: r("Activation") },
        { json: "baseLevelAtWill", js: "baseLevelAtWill", typ: true },
        { json: "atWillLimitedUseLevel", js: "atWillLimitedUseLevel", typ: null },
        { json: "isSignatureSpell", js: "isSignatureSpell", typ: null },
        { json: "componentId", js: "componentId", typ: 0 },
        { json: "componentTypeId", js: "componentTypeId", typ: 0 },
        { json: "spellListId", js: "spellListId", typ: null },
    ], false),
    "Item": o([
        { json: "overrideSaveDc", js: "overrideSaveDc", typ: null },
        { json: "limitedUse", js: "limitedUse", typ: null },
        { json: "id", js: "id", typ: 0 },
        { json: "entityTypeId", js: "entityTypeId", typ: 0 },
        { json: "definition", js: "definition", typ: r("SpellDefinition") },
        { json: "definitionId", js: "definitionId", typ: 0 },
        { json: "prepared", js: "prepared", typ: true },
        { json: "countsAsKnownSpell", js: "countsAsKnownSpell", typ: null },
        { json: "usesSpellSlot", js: "usesSpellSlot", typ: true },
        { json: "castAtLevel", js: "castAtLevel", typ: null },
        { json: "alwaysPrepared", js: "alwaysPrepared", typ: true },
        { json: "restriction", js: "restriction", typ: null },
        { json: "spellCastingAbilityId", js: "spellCastingAbilityId", typ: null },
        { json: "displayAsAttack", js: "displayAsAttack", typ: true },
        { json: "additionalDescription", js: "additionalDescription", typ: null },
        { json: "castOnlyAsRitual", js: "castOnlyAsRitual", typ: true },
        { json: "ritualCastingType", js: "ritualCastingType", typ: null },
        { json: "range", js: "range", typ: r("DefinitionRange") },
        { json: "activation", js: "activation", typ: r("Activation") },
        { json: "baseLevelAtWill", js: "baseLevelAtWill", typ: true },
        { json: "atWillLimitedUseLevel", js: "atWillLimitedUseLevel", typ: null },
        { json: "isSignatureSpell", js: "isSignatureSpell", typ: null },
        { json: "componentId", js: "componentId", typ: 0 },
        { json: "componentTypeId", js: "componentTypeId", typ: 0 },
        { json: "spellListId", js: "spellListId", typ: null },
    ], false),
    "Traits": o([
        { json: "personalityTraits", js: "personalityTraits", typ: "" },
        { json: "ideals", js: "ideals", typ: "" },
        { json: "bonds", js: "bonds", typ: "" },
        { json: "flaws", js: "flaws", typ: "" },
        { json: "appearance", js: "appearance", typ: null },
    ], false),
    "SaveSuccessDescription": [
        "",
        "Half Damage",
    ],
    "DurationUnit": [
        "Hour",
        "Minute",
        "Round",
    ],
    "DurationType": [
        "Concentration",
        "Instantaneous",
        "Time",
    ],
    "FriendlyTypeName": [
        "Advantage",
        "Bonus",
        "Damage",
        "Expertise",
        "Language",
        "Natural Weapon",
        "Proficiency",
        "Resistance",
        "Sense",
        "Set",
        "Set Base",
        "Size",
        "Weapon Property",
    ],
    "Type": [
        "advantage",
        "bonus",
        "damage",
        "expertise",
        "language",
        "natural-weapon",
        "proficiency",
        "resistance",
        "sense",
        "set",
        "set-base",
        "size",
        "weapon-property",
    ],
    "AoeType": [
        "Cone",
        "Cube",
        "Sphere",
    ],
    "Origin": [
        "Ranged",
        "Self",
        "Touch",
    ],
    "ScaleType": [
        "characterlevel",
        "spelllevel",
        "spellscale",
    ],
    "PurpleEntityType": [
        "class-feature",
    ],
    "ContainerDefinitionKey": [
        "1439493548:1038780496",
        "1439493548:1468125354",
        "1439493548:1634660052",
        "1439493548:1640503322",
        "1581111423:142363753",
        "1581111423:142829252",
        "1581111423:93464408",
    ],
    "AttunementDescription": [
        "",
        "Needs to be tied against your skin for a night.",
    ],
    "BaseArmorName": [
        "Leather",
        "Studded Leather",
    ],
    "DamageType": [
        "Bludgeoning",
        "Piercing",
        "Slashing",
    ],
    "FilterType": [
        "Armor",
        "Other Gear",
        "Potion",
        "Ring",
        "Weapon",
        "Wondrous item",
    ],
    "Rarity": [
        "Common",
        "Legendary",
        "Rare",
        "Uncommon",
        "Very Rare",
    ],
    "SubType": [
        "Adventuring Gear",
        "Arcane Focus",
        "Tool",
    ],
    "FluffyEntityType": [
        "racial-trait",
    ],
};

import {
    AbilityScore, Action,
    CharacterConstructorArgs, Condition,
    DamageSet,
    DamageType, flatResource, Modifiable, ResourceKey
} from "@/types";
import {CharacterClass} from "../character/layers/charclass/CharacterClass";
import {ModifierManager} from "../character/modifiers/ModifierManager";
import {Race} from "../character/layers/race/Race";
import {Background} from "../character/layers/background/Background";
import {InventoryManager} from "../item/Inventory";
import {ConditionManager} from "../character/condition/ConditionManager";
import {ActionManager} from "../character/actions/ActionManager";
import {Item} from "../item/item";
import {Feature} from "../character/feature/Feature"


/*
Character is a class which compiles many core behaviours of a DnD characters. Many of the responsibilities
of the character is managed by other Manager classes, and character mostly acts as an easy access point
for all the various Managers. It also keeps track of HP, initiative, name, speed, and level. On initialization,
character will use the given classes, race, and background to initialize its ActionManager, ModifierManager,
and InventoryManager.

This will essentially act as a central access point for all things related to one instance of a character.
 */
export class Character {
    public id: string;
    public level: number;
    public maxHP: number;
    public name: string;
    public HP: number;
    public side: 'ally' | 'enemy';
    public initiative?: number;
    public speed: number;
    public classes: Map<CharacterClass, number>;
    public race: Race;
    public background: Background;
    public actions: ActionManager;
    public conditions: ConditionManager;
    public inventory: InventoryManager;
    public modifiers: ModifierManager;

    constructor(data: CharacterConstructorArgs) {
        this.id = data.id;
        this.level = data.level ?? 1;
        this.maxHP = data.maxHP ?? data.HP;
        this.name = data.name;
        this.side = data.side;
        this.HP = data.HP ?? this.maxHP;
        this.classes = data.classes;
        this.race = data.race;
        this.background = data.background;
        this.conditions = new ConditionManager({});
        this.inventory = new InventoryManager(100);

        /** placeholder **/
        this.speed = 0;

        this.modifiers = new ModifierManager({
            abilityScores: data.abilityScores ?? {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10
            },
            proficiency: this.calculateProficiency(this.level)
    });

        this.actions = new ActionManager();

        this.initiative = data.initiative;

        for (const charClass of this.classes.keys()) {
            charClass.applyModifiers(this);
        }
        this.race.applyModifiers(this);
        this.background.applyModifiers(this);
    }

    private calculateProficiency(level: number) {
        return Math.ceil(level / 4) + 1;
    }

    /**
     * Return true if character is alive
     */
    public isAlive() {
        return this.HP > 0;
    }

    /**
     * Return true if character can currently act
     */
    public canAct() {
        return this.isAlive() && !(
            this.conditions.conditions.incapacitated ||
            this.conditions.conditions.paralyzed ||
            this.conditions.conditions.petrified ||
            this.conditions.conditions.stunned ||
            this.conditions.conditions.unconscious
        );
    }

    /**
     * Reduce character HP according to damageSet and character's damage modifiers (resistance, vulnerabilities, etc)
     * @param damageSet
     */
    public takeDamage(damageSet: DamageSet) {
        for (const damage of damageSet) {

            if (this.conditions.isImmune(damage.type)) {
                continue; //do nothing
            }

            if (this.conditions.isVulnerable(damage.type) && this.conditions.isResistant(damage.type)) {
                this.HP = Math.max(0, this.HP - damage.value);
                continue;
            }

            if (this.conditions.isResistant(damage.type)) {
                this.HP = Math.max(0, this.HP - Math.floor(damage.value / 2));
                continue;//set to itself - the floor of dmg /2
            }

            if (this.conditions.isVulnerable(damage.type)) {
                this.HP = Math.max(0, this.HP - (damage.value * 2));
                continue;
            }

            this.HP = Math.max(0, this.HP - damage.value);
        }
    }

    /**
     * Increase character HP by value
     * @param value
     */
    public healSelf(value: number) {
        this.HP = Math.min(this.HP + value, this.maxHP);
    }

    /**
     * Revert character to default state
     */
    public reset() {
        this.HP = this.maxHP;
        this.conditions.reset();
        this.initiative = undefined;
    }

    /**
     * Return roll modifier for stat check
     * @param stat
     */
    public getModifier(stat: Modifiable) {
        return this.modifiers.getModifier(stat);
    }

    /**
     * Return ability score modifier
     * @param stat
     */
    public getAbilityScoreModifier(stat: AbilityScore) {
        return this.modifiers.getAbilityScoreModifier(stat);
    }

    /**
     * Return ability score
     * @param stat
     */
    public getStat(stat: AbilityScore) {
        return this.modifiers.abilityScores[stat];
    }

    /**
     * Give character modifier of a given amount for specified stat, from specified source
     * Give proficiency modifier if amount is not specified
     * @param stat
     * @param source
     * @param amount
     */
    public addModifier(stat: Modifiable, source: string, amount?: number) {
        this.modifiers.addModifier(stat, source, amount);
    }

    /**
     * Remove all modifiers from a given source
     * @param source
     */
    public removeModifier(source: string) {
        this.modifiers.removeModifier(source);
    }

    /**
     * Return all character's items with amounts
     */
    public getInventory() {
        return this.inventory.inventory;
    }

    /**
     * Return amount of gold
     */
    public getGold() {
        return this.inventory.gold;
    }

    /**
     * Give character amount of gold
     * @param amount
     */
    public addGold(amount: number) {
        this.inventory.addGold(amount)
    }

    /**
     * Remove amount of gold from character
     * @param amount
     */
    public spendGold(amount: number) {
        this.inventory.spendGold(amount)
    }

    /**
     * Add a quantity of an item to character's inventory
     * Only add 1 item if quantity is not specified
     * @param item
     * @param quantity
     */
    public addItem(item: Item, quantity?: number) {
        this.inventory.addItem(item, quantity ?? 1);
    }

    /**
     * Use a quantity of items from character's inventory
     * Remove if consumable
     * Only use 1 item if quantity is not specified
     * @param item
     * @param quantity
     */
    public useItem(item: Item, quantity?: number) {
        if (item.consumable) {
            this.inventory.removeItem(item, quantity ?? 1);
        }
    }

    /**
     * Remove a quantity of items from character's inventory
     * Only remove 1 item if quantity is not specified
     * @param item
     * @param quantity
     */
    public dropItem(item: Item, quantity?: number) {
        this.inventory.removeItem(item, quantity ?? 1);
    }

    /**
     * Return true if character suffers from given condition
     * @param condition
     */
    public hasCondition(condition: Condition) {
        return this.conditions.conditions[condition];
    }

    /**
     * Apply given condition to character
     * @param condition
     */
    public giveCondition(condition: Condition) {
        this.conditions.giveCondition(condition);
    }

    /**
     * Remove given condition from character
     * @param condition
     */
    public removeCondition(condition: Condition) {
        this.conditions.removeCondition(condition);
    }

    /**
     * Return all character vulnerabilities
     */
    public getVulnerabilities() {
        return this.conditions.getVulnerabilities();
    }

    /**
     * Return true if character is vulnerable to given damageType
     * @param damageType
     */
    public isVulnerable(damageType: DamageType): boolean {
        return this.conditions.isVulnerable(damageType)
    }

    /**
     * Return all character resistances
     */
    public getResistances() {
        return this.conditions.getResistances();
    }

    /**
     * Return true if character is resistant to given damageType
     * @param damageType
     */
    public isResistant(damageType: DamageType): boolean {
        return this.conditions.isResistant(damageType)
    }

    /**
     * Return all character immunities
     */
    public getImmunities() {
        return this.conditions.getImmunities();
    }

    /**
     * Return true if character is immune to given damageType
     * @param damageType
     */
    public isImmune(damageType: DamageType): boolean {
            return this.conditions.isImmune(damageType)
    }

    /**
     * Return true if character has advantage for given stat checks
     * @param stat
     */
    public hasAdvantage(stat: Modifiable) {
        return this.conditions.hasAdvantage(stat);
    }

    /**
     * Return true if character has disadvantage for given stat checks
     * @param stat
     */
    public hasDisadvantage(stat: Modifiable) {
        this.conditions.hasAdvantage(stat);
    }

    /**
     * Give character advantage for given stat checks
     * @param stat
     */
    public giveAdvantage(stat: Modifiable): void {
        this.conditions.giveAdvantage(stat);
    }

    /**
     * Remove advantage from character for given stat checks
     * @param stat
     */
    public removeAdvantage(stat: Modifiable) {
        this.conditions.removeAdvantage(stat);
    }

    /**
     * Give character disadvantage for given stat checks
     * @param stat
     */
    public giveDisadvantage(stat: Modifiable) {
        this.conditions.giveDisadvantage(stat);
    }

    /**
     * Remove disadvantage from character for given stat checks
     * @param stat
     */
    public removeDisadvantage(stat: Modifiable) {
        this.conditions.removeDisadvantage(stat);
    }

    /**
     * Return all available actions for character
     */
    public getActions() {
        return this.actions.getActions();
    }

    /**
     * Add action to character's arsenal of actions
     * @param action
     */
    public addAction(action: Action) {
        this.actions.addAction(action);
    }

    /**
     * Return all character's known spells
     */
    public getSpells() {
        return this.actions.getSpells();
    }

    /**
     * Return amount of spell slots for given spell level
     * @param level
     */
    public getSpellSlots(level: number) {
        return this.actions.getSpellSlots(level);
    }

    /**
     * Decrease spell slots for given level by amount
     * Decrease by 1 if amount is not specified
     * Return true if spell slots were used
     * Return false if there are not enough spell slots to be used
     * @param level
     * @param amount
     */
    public useSpellSlot(level: number, amount?: number) {
        return this.actions.useSpellSlots(level, amount);
    }

    /**
     * Increase spell slots for given level by amount
     * Increase by 1 if amount is not specified
     * @param level
     * @param amount
     */
    public addSpellSlots(level: number, amount?: number) {
        this.actions.addSpellSlot(level, amount);
    }

    /**
     * Use resources in resource pool for given resource type by amount
     * Use 1 if amount is not specified
     * Return true if resources were used
     * Return false if character does not have resource type, or if there are not enough resources to use
     * @param reseource
     * @param amount
     */
    public useResource(reseource: ResourceKey, amount?: number) {
        return this.actions.useResource(reseource, amount);
    }

    /**
     * Return all resources in resource pool to max for given resource type if recharge type matches
     * @param recharge
     */
    public rechargeResources(recharge: "shortRest" | "longRest" | "daily" | "encounter") {
        this.actions.resetResource(recharge);
    }

    /**
     * Return all resource pools
     */
    public getResources() {
        return this.actions.getResources();
    }

    /**
     * Return resource pool for given resource type
     * Return undefined if character does not have specified resource
     * @param resource
     */
    public getResource(resource: ResourceKey) {
        return this.actions.getResources().get(resource) as flatResource | undefined;
    }

    /**
     * Return all character features
     */
    public getFeatures() {
        const feats: Feature[] = [];

        for (const c of this.classes.keys()) {
            for (const f of c.getFeatures()) {
                feats.push(f);
            }
        }

        if (this.race) {
            for (const f of this.race.getFeatures()) {
                feats.push(f);
            }
        }

        if (this.background) {
            for (const f of this.background.getFeatures()) {
                feats.push(f);
            }
        }

        return feats;
    }
}
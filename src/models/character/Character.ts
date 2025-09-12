import {
    AbilityScore, Action,
    CharacterConstructorArgs, ConditionEvaluator,
    Conditions,
    DamageSet,
    DamageType
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
            abilityScores: {
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

    public isAlive() {
        return this.HP > 0;
    }

    public canAct() {
        return this.isAlive() && !(
            this.conditions.conditions.incapacitated ||
            this.conditions.conditions.paralyzed ||
            this.conditions.conditions.petrified ||
            this.conditions.conditions.stunned ||
            this.conditions.conditions.unconscious
        );
    }

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

    public healSelf(value: number) {
        this.HP = Math.min(this.HP + value, this.maxHP);
    }

    public reset() {
        this.HP = this.maxHP;
        this.conditions.reset();
        this.initiative = undefined;
    }

    public getModifier(stat: string) {
        return this.modifiers.getModifier(stat);
    }

    public getStat(stat: AbilityScore) {
        return this.modifiers.abilityScores[stat];
    }

    public addModifier(stat: string, source: string, abilityScore?: AbilityScore, amount?: number) {
        if (abilityScore) {
            this.modifiers.addModifier(stat, source, abilityScore, amount);
        }
    }

    public removeModifier(source: string) {
        this.modifiers.removeModifier(source);
    }

    public getInventory() {
        return this.inventory.inventory;
    }

    public getGold() {
        return this.inventory.gold;
    }

    public addGold(amount: number) {
        this.inventory.addGold(amount)
    }

    public spendGold(amount: number) {
        this.inventory.spendGold(amount)
    }

    public addItem(item: Item, quantity?: number) {
        this.inventory.addItem(item, quantity ?? 1);
    }

    public useItem(item: Item, quantity?: number) {
        if (item.consumable) {
            this.inventory.removeItem(item, quantity ?? 1);
        }
    }

    public dropItem(item: Item, quantity?: number) {
        this.inventory.removeItem(item, quantity ?? 1);
    }

    public hasCondition(condition: keyof Conditions) {
        return this.conditions.conditions[condition];
    }

    public giveCondition(condition: keyof Conditions) {
        this.conditions.giveCondition(condition);
    }

    public removeCondition(condition: keyof Conditions) {
        this.conditions.removeCondition(condition);
    }

    public getVulnerabilities() {
        return this.conditions.getVulnerabilities();
    }

    public isVulnerable(damageType: DamageType): boolean {
        return this.conditions.isVulnerable(damageType)
    }

    public getResistances() {
        return this.conditions.getResistances();
    }

    public isResistant(damageType: DamageType): boolean {
        return this.conditions.isResistant(damageType)
    }

    public getImmunities() {
        return this.conditions.getImmunities();
    }

    public isImmune(damageType: DamageType): boolean {
            return this.conditions.isImmune(damageType)
    }

    public hasAdvantage(stat: string) {
        return this.conditions.hasAdvantage(stat);
    }

    public hadDisadvantage(stat: string) {
        this.conditions.hasAdvantage(stat);
    }

    public giveAdvantage(stat: string): void {
        this.conditions.giveAdvantage(stat);
    }

    public removeAdvantage(stat: string) {
        this.conditions.removeAdvantage(stat);
    }

    public giveDisadvantage(stat: string) {
        this.conditions.giveDisadvantage(stat);
    }

    public removeDisadvantage(stat: string) {
        this.conditions.removeDisadvantage(stat);
    }

    public getActions() {
        return this.actions.getActions();
    }

    public addAction(action: Action) {
        this.actions.addAction(action);
    }

    public getSpells() {
        return this.actions.getSpells();
    }

    public getSpellSlots(level: number) {
        return this.actions.getSpellSlots(level);
    }

    public useSpellSlot(level: number, amount?: number) {
        this.actions.useSpellSlots(level, amount);
    }

    public addSpellSlots(level: number, amount?: number) {
        this.actions.addSpellSlot(level, amount);
    }

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
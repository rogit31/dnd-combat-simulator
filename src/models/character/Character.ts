import {
    AbilityScores,
    Action,
    Conditions,
    SavingThrowMod,
    CharacterConstructorArgs, DamageSet, DamageType
} from "@/types";
import {Item} from "@/src/models/item/item";
import {CharacterClass} from "@/src/models/character/layers/charclass/CharacterClass";

export class Character {
    id: string;
    level?: number;
    AC: number;
    maxHP: number;
    name: string;
    HP: number;
    side: 'ally' | 'enemy';
    classes: Map<CharacterClass, number>;
    abilityScores: AbilityScores;
    actions: Action[];
    conditions: Conditions;
    initiative?: number;
    savingThrows: SavingThrowMod;
    resistances?: DamageType[];
    immunities?: DamageType[];
    vulnerabilities?: DamageType[];
    inventory: Item[];


    constructor(data: CharacterConstructorArgs) {
        this.id = data.id;
        this.level = data.level;
        this.AC = data.AC;
        this.maxHP = data.maxHP ?? data.HP;
        this.name = data.name;
        this.side = data.side;
        this.HP = data.HP ?? this.maxHP;
        this.classes = data.classes;
        this.resistances = data.resistances;
        this.immunities = data.immunities;
        this.vulnerabilities = data.immunities;
        this.inventory = []; //TODO: Add constructor argument as well

        this.abilityScores = data.abilityScores ?? {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        };

        const baseSavingThrows: SavingThrowMod = {
            strength: calculateAbilityModifier(this.abilityScores.strength),
            dexterity: calculateAbilityModifier(this.abilityScores.dexterity),
            constitution: calculateAbilityModifier(this.abilityScores.constitution),
            intelligence: calculateAbilityModifier(this.abilityScores.intelligence),
            wisdom: calculateAbilityModifier(this.abilityScores.wisdom),
            charisma: calculateAbilityModifier(this.abilityScores.charisma)
        };

        this.savingThrows = {
            ...baseSavingThrows,
            ...data.savingThrows
        };

        this.actions = data.actions ?? [];

        this.conditions = data.conditions ?? {
            exhausted: false,
            restrained: false,
            poisoned: false,
            grappled: false,
            frightened: false,
            blinded: false,
            prone: false,
            invisible: false,
            deafened: false,
            charmed: false,
            unconscious: false,
            stunned: false,
            petrified: false,
            paralyzed: false,
            incapacitated: false
        };

        this.initiative = data.initiative;
    }


    isAlive() {
        return this.HP > 0;
    }

    canAct() {
        return this.isAlive() && !(
            this.conditions.incapacitated ||
            this.conditions.paralyzed ||
            this.conditions.petrified ||
            this.conditions.stunned ||
            this.conditions.unconscious
        );
    }

    takeDamage(damageSet: DamageSet) {
        //TODO: Make a case for if the character has a vuln and resistance at the same time.
        //obviously in that case they take the normal amount of damage.
        for (const damage of damageSet) {

            if (this.immunities?.includes(damage.type)) {
                continue; //do nothing
            }

            if (this.resistances?.includes(damage.type)) {
                this.HP = Math.max(0, this.HP - Math.floor(damage.value / 2));
                continue;//set to itself - the floor of dmg /2
            }

            if (this.vulnerabilities?.includes(damage.type)) {
                this.HP = Math.max(0, this.HP - (damage.value * 2));
                continue;
            }

            this.HP = Math.max(0, this.HP - damage.value);

        }

    }

    healSelf(value: number) {
        this.HP = Math.min(this.HP + value, this.maxHP);
    }

    public reset() {
        this.HP = this.maxHP;
        this.conditions = {
            exhausted: false,
            restrained: false,
            poisoned: false,
            grappled: false,
            frightened: false,
            blinded: false,
            prone: false,
            invisible: false,
            deafened: false,
            charmed: false,
            unconscious: false,
            stunned: false,
            petrified: false,
            paralyzed: false,
            incapacitated: false,
        };
        this.initiative = undefined;
    }
}

function calculateAbilityModifier(abilityScore: number) {
    return Math.floor((abilityScore - 10) / 2)
}
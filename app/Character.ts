import {
    AbilityScores,
    Action,
    Conditions,
    Character as CharacterType,
    Resources,
    SavingThrowMod,
    CharacterConstructorArgs
} from "@/app/types";

export class Character implements CharacterType{
    id: string;
    level?: number;
    AC: number;
    maxHP: number;
    name: string;
    HP: number;
    side: 'ally' | 'enemy';
    abilityScores: AbilityScores;
    actions: Action[];
    conditions: Conditions;
    initiative?: number;
    savingThrows: SavingThrowMod;
    resources: Resources;

    constructor(data: CharacterConstructorArgs) {
        this.id = data.id;
        this.level = data.level;
        this.AC = data.AC;
        this.maxHP = data.maxHP ?? data.HP;
        this.name = data.name;
        this.side = data.side;
        this.HP = data.HP ?? this.maxHP;

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

        this.resources = data.resources ?? {};
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

    applyDamage(amount: number) {
        this.HP = Math.max(this.HP - amount, 0);
    }

    applyHealing(amount: number) {
        this.HP = Math.min(this.HP + amount, this.maxHP);
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

function calculateAbilityModifier(abilityScore: number){
    return Math.floor((abilityScore - 10) / 2)
}
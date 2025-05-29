import {AbilityScores, Action, Conditions, Character as CharacterType, Resources, SavingThrowMod} from "@/app/types";

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

    constructor(data: CharacterType) {
        this.id = data.id;
        this.level = data.level;
        this.AC = data.AC;
        this.maxHP = data.HP;
        this.name = data.name;
        this.side = data.side;
        this.maxHP = data.maxHP ?? data.HP;
        this.HP = data.HP ?? this.maxHP;
        this.abilityScores = data.abilityScores ?? {
            dexterity: 10,
            wisdom: 10,
            strength: 10,
            intelligence: 10,
            constitution: 10,
            charisma: 10
        };
        this.savingThrows = data.savingThrows ??
            {
                charisma: calculateAbilityModifier(this.abilityScores.charisma),
                wisdom: calculateAbilityModifier(this.abilityScores.wisdom),
                strength: calculateAbilityModifier(this.abilityScores.strength),
                intelligence: calculateAbilityModifier(this.abilityScores.intelligence),
                constitution: calculateAbilityModifier(this.abilityScores.constitution),
                dexterity: calculateAbilityModifier(this.abilityScores.dexterity)
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
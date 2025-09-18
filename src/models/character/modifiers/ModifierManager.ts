import {AbilityModifier} from "../modifiers/CharacterModifier";
import {
    AbilityScore,
    AbilityScores,
    CombatStats,
    Modifiable,
    ModifierManagerConstructorArgs,
    SavingThrows,
    SkillProficiencies,
    modifiableToAbility
} from "../../../../types";

/**
Oh boy!
The ModifierManager class keeps track of a characters stat modifiers, including skills, saving throws,
AC, and any other proficiencies that involve rolling a die (tool proficiencies, weapon proficiencies, etc.)
The base ability scores are kept in this class as well.
 **/
export class ModifierManager {
    abilityScores: AbilityScores;
    modifiers: Map<Modifiable, AbilityModifier>; // key is stat to add modifiers, value is modifiers
    sources: Map<string, Modifiable[]>;
    // key is source of modifiers, value is stats associated with source (used for removing modifiers like shield)
    proficiency: { val : number }

    constructor(data: ModifierManagerConstructorArgs) {
        this.abilityScores = data.abilityScores;
        this.modifiers = new Map<Modifiable, AbilityModifier>();
        this.initModMap();
        this.sources = new Map<string, Modifiable[]>();
        this.proficiency = { val : data.proficiency };
    }

    /**
     * Gives modifiers map the set of base skills, saving throws and regular stats like AC and initiative
     */
    private initModMap(): void {
        this.modifiers.set(SavingThrows.strengthSave, new AbilityModifier("strength", this.abilityScores));
        this.modifiers.set(SavingThrows.dexteritySave, new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set(SavingThrows.constitutionSave, new AbilityModifier("constitution", this.abilityScores));
        this.modifiers.set(SavingThrows.intelligenceSave, new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set(SavingThrows.wisdomSave, new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set(SavingThrows.charismaSave, new AbilityModifier("charisma", this.abilityScores));

        this.modifiers.set(SkillProficiencies.acrobatics, new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set(SkillProficiencies.animalHandling, new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set(SkillProficiencies.arcana, new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set(SkillProficiencies.athletics, new AbilityModifier("strength", this.abilityScores));
        this.modifiers.set(SkillProficiencies.deception, new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set(SkillProficiencies.history, new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set(SkillProficiencies.insight, new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set(SkillProficiencies.intimidation, new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set(SkillProficiencies.investigation, new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set(SkillProficiencies.medicine, new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set(SkillProficiencies.nature, new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set(SkillProficiencies.perception, new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set(SkillProficiencies.performance, new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set(SkillProficiencies.persuasion, new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set(SkillProficiencies.religion, new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set(SkillProficiencies.sleightOfHand, new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set(SkillProficiencies.stealth, new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set(SkillProficiencies.survival, new AbilityModifier("wisdom", this.abilityScores));

        this.modifiers.set(CombatStats.AC, new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set(CombatStats.initiative, new AbilityModifier("dexterity", this.abilityScores));
    }

    /**
     * Add modifier to specified stat with a recorded source and a base stat. If stat is already recorded, just add
     * a modifier normally, otherwise, add a new entry to the this.modifiers map. If a modifier amount is specified,
     * use the amount as the modifier. Otherwise, use proficiency. Also add stat to the this.source map.
     */
    public addModifier(stat: Modifiable, source: string, amount?: number) {
        if (!this.modifiers.has(stat)) {
            this.modifiers.set(stat, new AbilityModifier(modifiableToAbility[stat], this.abilityScores));
        }

        if (amount) {
            this.modifiers.get(stat)?.addModifier(source, {val: amount});
        } else {
            this.modifiers.get(stat)?.addModifier(source, this.proficiency);
        }

        if (!this.sources.has(source)) {
            this.sources.set(source, []);
        }
        this.sources.get(source)?.push(stat);
    }

    /**
     * Given a source which should be removed from a character, remove all modifiers associated with this source
     */
    public removeModifier(source: string) {
        if (!this.sources.has(source)) {
            return;
        }

        const stats = this.sources.get(source);

        if (stats) {
            for (let i = 0; i < stats?.length; i++) {
                this.modifiers.get(stats[i])?.removeModifier(source);
            }
        }

        this.sources.delete(source);
    }

    /**
     * Given a modifiable stat, return the modifier to apply for this character
     */
    public getModifier(stat: Modifiable) {
        const mod = this.modifiers.get(stat)
        if (mod) {
            return mod.getTotal();
        } else {
            return 0;
        }
    }

    /**
     * Given an ability score, return the base modifier that this character applies
     */
    public getAbilityScoreModifier(stat: AbilityScore) {
        return this.calculateAbilityModifier(this.abilityScores[stat])
    }

    private calculateAbilityModifier(abilityScore: number) {
        return Math.floor((abilityScore - 10) / 2)
    }
}
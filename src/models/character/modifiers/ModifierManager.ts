import {AbilityModifier} from "../modifiers/CharacterModifier";
import {ModifierManagerConstructorArgs, AbilityScores, AbilityScore} from "../../../../types";

/*
Oh boy!
The ModifierManager class keeps track of a characters stat modifiers, including skills, saving throws,
AC, and any other proficiencies that involve rolling a die (tool proficiencies, weapon proficiencies, etc.)
The base ability scores are kept in this class as well.
 */
export class ModifierManager {
    abilityScores: AbilityScores;
    modifiers: Map<string, AbilityModifier>; // key is stat to add modifiers, value is modifiers
    sources: Map<string, string[]>;
    // key is source of modifiers, value is stats associated with source (used for removing modifiers like shield)
    proficiency: { val : number }

    constructor(data: ModifierManagerConstructorArgs) {
        this.abilityScores = data.abilityScores;
        this.modifiers = new Map<string, AbilityModifier>();
        this.initModMap();
        this.sources = new Map<string, string[]>();
        this.proficiency = { val : data.proficiency };
    }

    // Gives modifiers map the set of base skills, saving throws and regular stats like AC and initiative
    private initModMap(): void {
        this.modifiers.set("str save", new AbilityModifier("strength", this.abilityScores));
        this.modifiers.set("dex save", new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set("con save", new AbilityModifier("constitution", this.abilityScores));
        this.modifiers.set("int save", new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set("wis save", new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set("cha save", new AbilityModifier("charisma", this.abilityScores));

        this.modifiers.set("acrobatics", new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set("animal handling", new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set("arcana", new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set("athletics", new AbilityModifier("strength", this.abilityScores));
        this.modifiers.set("deception", new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set("history", new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set("insight", new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set("intimidation", new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set("investigation", new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set("medicine", new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set("nature", new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set("perception", new AbilityModifier("wisdom", this.abilityScores));
        this.modifiers.set("performance", new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set("persuasion", new AbilityModifier("charisma", this.abilityScores));
        this.modifiers.set("religion", new AbilityModifier("intelligence", this.abilityScores));
        this.modifiers.set("sleight of hand", new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set("stealth", new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set("survival", new AbilityModifier("wisdom", this.abilityScores));

        this.modifiers.set("AC", new AbilityModifier("dexterity", this.abilityScores));
        this.modifiers.set("initiative", new AbilityModifier("dexterity", this.abilityScores));
    }

    // Add modifier to specified stat with a recorded source and a base stat. If stat is already recorded, just add
    // a modifier normally, otherwise, add a new entry to the this.modifiers map. If a modifier amount is specified,
    // use the amount as the modifier. Otherwise, use proficiency. Also add stat to the this.source map.
    public addModifier(stat: string, source: string, base: AbilityScore, amount?: number) {
        if (!this.modifiers.has(stat)) {
            this.modifiers.set(stat, new AbilityModifier(base, this.abilityScores));
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

    // Given a source which should be removed from a character, remove all modifiers associated with this source.
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

    // TODO: Please god change this switch statement
    public getModifier(stat: string) {
        const mod = this.modifiers.get(stat)
        if (mod) {
            return mod.getTotal();
        } else if (stat == 'strength') {
            return this.calculateAbilityModifier(this.abilityScores[stat]);
        } else if (stat == 'dexterity') {
            return this.calculateAbilityModifier(this.abilityScores[stat]);
        } else if (stat == 'constitution') {
            return this.calculateAbilityModifier(this.abilityScores[stat]);
        } else if (stat == 'intelligence') {
            return this.calculateAbilityModifier(this.abilityScores[stat]);
        } else if (stat == 'wisdom') {
            return this.calculateAbilityModifier(this.abilityScores[stat]);
        } else if (stat == 'charisma') {
            return this.calculateAbilityModifier(this.abilityScores[stat]);
        } else {
            return 0;
        }
    }

    private calculateAbilityModifier(abilityScore: number) {
        return Math.floor((abilityScore - 10) / 2)
    }
}
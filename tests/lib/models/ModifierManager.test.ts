import {describe} from "@jest/globals";
import {ModifierManager} from "../../../src/models/character/modifiers/ModifierManager";
import {CombatStats, SavingThrows, SkillProficiencies} from "../../../types";

describe('AbilityModifierTest', () => {

    let manager: ModifierManager;

    beforeEach(async () => {
        manager = new ModifierManager({
            abilityScores: {
                strength: 10,
                dexterity: 10,
                constitution: 10,
                intelligence: 10,
                wisdom: 10,
                charisma: 10
            },
            proficiency: 2
        });
    });

    test("Should construct modifier with default values", () => {
        expect(manager.abilityScores.strength).toBe(10);
        expect(manager.abilityScores.dexterity).toBe(10);
        expect(manager.abilityScores.constitution).toBe(10);
        expect(manager.abilityScores.intelligence).toBe(10);
        expect(manager.abilityScores.wisdom).toBe(10);
        expect(manager.abilityScores.charisma).toBe(10);
        expect(manager.proficiency.val).toBe(2);
        expect(manager.modifiers.size).toBe(26);
        expect(manager.sources.size).toBe(0);
    });

    test("GetModifier() should return zero with no mods + default stats", () => {
        expect(manager.getAbilityScoreModifier("strength")).toBe(0);
        expect(manager.getAbilityScoreModifier("dexterity")).toBe(0);
        expect(manager.getAbilityScoreModifier("constitution")).toBe(0);
        expect(manager.getAbilityScoreModifier("intelligence")).toBe(0);
        expect(manager.getAbilityScoreModifier("wisdom")).toBe(0);
        expect(manager.getAbilityScoreModifier("charisma")).toBe(0);
    });

    test("GetModifier() should return correct mod with no mods + new stats", () => {
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 12;
        manager.abilityScores.constitution = 14;
        manager.abilityScores.intelligence = 13;
        manager.abilityScores.wisdom = 7;
        manager.abilityScores.charisma = 11;
        expect(manager.getAbilityScoreModifier("strength")).toBe(-1);
        expect(manager.getAbilityScoreModifier("dexterity")).toBe(1);
        expect(manager.getAbilityScoreModifier("constitution")).toBe(2);
        expect(manager.getAbilityScoreModifier("intelligence")).toBe(1);
        expect(manager.getAbilityScoreModifier("wisdom")).toBe(-2);
        expect(manager.getAbilityScoreModifier("charisma")).toBe(0);
    });

    test("GetModifier() should return correct mod with some mods + default stats or new stats", () => {
        manager.addModifier(SkillProficiencies.sleightOfHand, "Test1");
        expect(manager.getModifier(SkillProficiencies.sleightOfHand)).toBe(2);
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 15;
        expect(manager.getModifier(SkillProficiencies.sleightOfHand)).toBe(4);
        manager.addModifier(SkillProficiencies.sleightOfHand, "Test2");
        expect(manager.getModifier(SkillProficiencies.sleightOfHand)).toBe(6);
        manager.addModifier(SkillProficiencies.athletics, "Test1");
        expect(manager.getModifier(SkillProficiencies.sleightOfHand)).toBe(6);
        expect(manager.getModifier(SkillProficiencies.athletics)).toBe(1);
    });

    test("GetModifier() should remove all mods associated with source", () => {
        manager.addModifier(SkillProficiencies.athletics, "Test1");
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 15;
        manager.addModifier(SkillProficiencies.athletics, "Test2");
        manager.addModifier(SkillProficiencies.sleightOfHand, "Test1");
        expect(manager.getModifier(SkillProficiencies.athletics)).toBe(3);
        expect(manager.getModifier(SkillProficiencies.sleightOfHand)).toBe(4);
        manager.removeModifier("Test1");
        expect(manager.getModifier(SkillProficiencies.athletics)).toBe(1);
        expect(manager.getModifier(SkillProficiencies.sleightOfHand)).toBe(2);
    });

    test("GetModifier() should return correct mod with no mods + preset skills", () => {
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 12;
        manager.abilityScores.constitution = 14;
        manager.abilityScores.intelligence = 13;
        manager.abilityScores.wisdom = 7;
        manager.abilityScores.charisma = 11;
        expect(manager.getModifier(SkillProficiencies.acrobatics)).toBe(1);
        expect(manager.getModifier(SkillProficiencies.athletics)).toBe(-1);
        expect(manager.getModifier(SkillProficiencies.history)).toBe(1);
        expect(manager.getModifier(SkillProficiencies.perception)).toBe(-2);
        expect(manager.getModifier(SkillProficiencies.deception)).toBe(0);
    });

    test("GetModifier() should return correct mod for first of two enums", () => {
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 12;
        manager.abilityScores.constitution = 14;
        manager.abilityScores.intelligence = 13;
        manager.abilityScores.wisdom = 7;
        manager.abilityScores.charisma = 11;
        expect(manager.getModifier(SkillProficiencies.athletics)).toBe(-1);
        expect(manager.getModifier(CombatStats.AC)).toBe(1);

        expect(manager.getModifier(SkillProficiencies.sleightOfHand)).toBe(1);
        expect(manager.getModifier(SavingThrows.constitutionSave)).toBe(2);
    });

    test("GetModifier() should return correct mod with preset skills", () => {
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 12;
        manager.abilityScores.constitution = 14;
        manager.abilityScores.intelligence = 13;
        manager.abilityScores.wisdom = 7;
        manager.abilityScores.charisma = 11;
        manager.addModifier(SkillProficiencies.acrobatics, "test");
        manager.addModifier(SkillProficiencies.athletics, "Test1", 7);
        manager.addModifier(SkillProficiencies.deception, "test", -1);
        expect(manager.getModifier(SkillProficiencies.acrobatics)).toBe(3);
        expect(manager.getModifier(SkillProficiencies.athletics)).toBe(6);
        expect(manager.getModifier(SkillProficiencies.history)).toBe(1);
        expect(manager.getModifier(SkillProficiencies.deception)).toBe(-1);
    });
})
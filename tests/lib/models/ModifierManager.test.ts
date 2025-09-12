import {describe} from "@jest/globals";
import {ModifierManager} from "../../../src/models/character/modifiers/ModifierManager";

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
        expect(manager.getModifier("strength")).toBe(0);
        expect(manager.getModifier("dexterity")).toBe(0);
        expect(manager.getModifier("constitution")).toBe(0);
        expect(manager.getModifier("intelligence")).toBe(0);
        expect(manager.getModifier("wisdom")).toBe(0);
        expect(manager.getModifier("charisma")).toBe(0);
        expect(manager.getModifier("randomSkill")).toBe(0);
    });

    test("GetModifier() should return correct mod with no mods + new stats", () => {
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 12;
        manager.abilityScores.constitution = 14;
        manager.abilityScores.intelligence = 13;
        manager.abilityScores.wisdom = 7;
        manager.abilityScores.charisma = 11;
        expect(manager.getModifier("strength")).toBe(-1);
        expect(manager.getModifier("dexterity")).toBe(1);
        expect(manager.getModifier("constitution")).toBe(2);
        expect(manager.getModifier("intelligence")).toBe(1);
        expect(manager.getModifier("wisdom")).toBe(-2);
        expect(manager.getModifier("charisma")).toBe(0);
        expect(manager.getModifier("randomSkill")).toBe(0);
    });

    test("GetModifier() should return correct mod with some mods + default stats or new stats", () => {
        manager.addModifier("testSkill", "Test1", "strength");
        expect(manager.getModifier("testSkill")).toBe(2);
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 15;
        expect(manager.getModifier("testSkill")).toBe(1);
        manager.addModifier("testSkill", "Test2", "strength");
        expect(manager.getModifier("testSkill")).toBe(3);
        manager.addModifier("testSkill2", "Test1", "dexterity");
        expect(manager.getModifier("testSkill2")).toBe(4);
        expect(manager.getModifier("testSkill")).toBe(3);
    });

    test("GetModifier() should remove all mods associated with source", () => {
        manager.addModifier("testSkill", "Test1", "strength");
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 15;
        manager.addModifier("testSkill", "Test2", "strength");
        manager.addModifier("testSkill2", "Test1", "dexterity");
        expect(manager.getModifier("testSkill")).toBe(3);
        expect(manager.getModifier("testSkill2")).toBe(4);
        manager.removeModifier("Test1");
        expect(manager.getModifier("testSkill")).toBe(1);
        expect(manager.getModifier("testSkill2")).toBe(2);
    });

    test("GetModifier() should return correct mod with no mods + preset skills", () => {
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 12;
        manager.abilityScores.constitution = 14;
        manager.abilityScores.intelligence = 13;
        manager.abilityScores.wisdom = 7;
        manager.abilityScores.charisma = 11;
        expect(manager.getModifier("acrobatics")).toBe(1);
        expect(manager.getModifier("athletics")).toBe(-1);
        expect(manager.getModifier("history")).toBe(1);
        expect(manager.getModifier("perception")).toBe(-2);
        expect(manager.getModifier("deception")).toBe(0);
    });

    test("GetModifier() should return correct mod with preset skills", () => {
        manager.abilityScores.strength = 8;
        manager.abilityScores.dexterity = 12;
        manager.abilityScores.constitution = 14;
        manager.abilityScores.intelligence = 13;
        manager.abilityScores.wisdom = 7;
        manager.abilityScores.charisma = 11;
        manager.addModifier("acrobatics", "test", "dexterity");
        manager.addModifier("athletics", "Test1", "strength", 7);
        manager.addModifier("deception", "test", "dexterity", -1);
        expect(manager.getModifier("acrobatics")).toBe(3);
        expect(manager.getModifier("athletics")).toBe(6);
        expect(manager.getModifier("history")).toBe(1);
        expect(manager.getModifier("deception")).toBe(-1);
    });
})
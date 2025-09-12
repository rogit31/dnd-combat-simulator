import {describe} from "@jest/globals";
import {AbilityModifier} from "../../../src/models/character/modifiers/CharacterModifier";
import {AbilityScores} from "../../../types";

describe('AbilityModifierTest', () => {

    let mod: AbilityModifier;
    let proficiencyTest1: { val : number }
    let proficiencyTest2: { val : number }

    beforeEach(async () => {
        const as: AbilityScores = {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        }
        mod = new AbilityModifier("strength", as);
        proficiencyTest1 = { val : 2 };
        proficiencyTest2 = { val : 3 };
    });

    test("Should create an ability modifier with a base stat, but no modifiers", () => {
        expect(mod.baseStat).toBe("strength");
        expect(mod.modifiers.length).toBe(0);
        expect(mod.getTotal()).toBe(0);
    });

    test('Should have add a modifier with proper source, and only remove modifiers from particular source', () => {
        mod.addModifier("Test1", proficiencyTest1);
        expect(mod.modifiers.length).toBe(1);
        expect(mod.modifiers[0].source).toBe("Test1");
        expect(mod.modifiers[0].value.val).toBe(2);
        expect(mod.getTotal()).toBe(2);

        mod.addModifier("Test2", proficiencyTest1);
        mod.addModifier("Test1", proficiencyTest2);
        expect(mod.modifiers.length).toBe(3);
        expect(mod.getTotal()).toBe(7);

        mod.removeModifier("Test1");
        expect(mod.modifiers.length).toBe(1);
        expect(mod.modifiers[0].source).toBe("Test2");
        expect(mod.getTotal()).toBe(2);
    });

    test('Should change the value once proficiency source is changed', () => {
        mod.addModifier("Test1", proficiencyTest1);
        mod.addModifier("Test2", proficiencyTest1);
        mod.addModifier("Test1", proficiencyTest2);

        expect(mod.getTotal()).toBe(7);
        proficiencyTest1.val = 4;
        expect(mod.getTotal()).toBe(11);
    });

})
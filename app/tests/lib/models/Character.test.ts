import {describe} from "@jest/globals";
import {createMockCharacter} from "../../testUtils";

describe('Character', () => {
    test("Should create a character with the correct properties", () => {
        const character = createMockCharacter({
            name: "Sol 741",
            HP: 500
        })
        expect(character.name).toBe("Sol 741");
        expect(character.HP).toBe(500);
    });

    test('should handle damage correctly', () => {
        const character = createMockCharacter({ HP: 30, maxHP: 30 });

        character.takeDamage([{value: 10, type: "fire"}]);
        expect(character.HP).toBe(20);
        expect(character.isAlive()).toBe(true);

        character.takeDamage([{value: 10, type: "cold"}, {value: 1000, type: "bludgeoning"}]);
        expect(character.HP).toBe(0);
        expect(character.isAlive()).toBe(false);
    });

})

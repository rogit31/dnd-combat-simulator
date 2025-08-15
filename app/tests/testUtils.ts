import {Action as ActionType, ActionConstructorArgs, Character as CharacterType} from "@/app/types";
import { Action } from "../lib/models/character/actions/Action";
import { Character } from "../lib/models/character/Character";

export function createMockCharacter(overrides: Partial<Character> = {}): CharacterType {
    return new Character({
        name: "Test Character",
        side: "ally",
        id: "test-char",
        AC: 15,
        HP: 30,
        maxHP: 30,
        level: 5,
        abilityScores: {
            strength: 14,
            dexterity: 12,
            constitution: 13,
            intelligence: 10,
            wisdom: 12,
            charisma: 8
        },
        actions: [],
        ...overrides
    });
}

export function createMockAction(overrides: Partial<ActionConstructorArgs> = {}): ActionType {
    return new Action({
        name: "Test Action",
        actionType: "attack",
        damageRoll: {
            baseEffect: [{
                effect: { n: 1, d: 8, flatBonus: 2 },
                effectType: "slashing"
            }],
            scaling: false
        },
        ...overrides
    });
}
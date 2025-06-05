import { Action, SpellAction } from '../../../lib/models/Action';

describe('Action', () => {
    test('should infer action type correctly', () => {
        const attack = new Action({
            name: "Sword Attack",
            actionType: "attack",
            damageRoll: {
                baseEffect: [{ effect: { n: 1, d: 8 }, effectType: "slashing" }],
                scaling: false
            }
        });

        expect(attack.actionType).toBe("attack");
    });

    test('should create spell with usage constraints', () => {
        const spell = new SpellAction({
            name: "Fireball",
            damageRoll: {
                baseEffect: [{ effect: { n: 8, d: 6 }, effectType: "fire" }],
                scaling: false
            },
            usageConstraints: [{ type: "resource", resourceName: "spellSlots", cost: 1, tier: 3 }],
            level: 3
        });

        expect(spell.actionType).toBe("spell");
        expect(spell.level).toBe(3);
        expect(spell.usageConstraints).toHaveLength(1);
    });
});
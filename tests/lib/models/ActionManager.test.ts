import {describe} from "@jest/globals";
import {ActionManager} from "../../../src/models/character/actions/ActionManager";
import {Action, SpellAction} from "../../../src/models/character/actions/Action";

describe('AbilityModifierTest', () => {

    let manager: ActionManager;
    let act1: Action;
    let act2: Action;
    let act3: Action;
    let spell1: SpellAction;
    let spell2: SpellAction;
    let spell3: SpellAction;

    beforeEach(async () => {
        manager = new ActionManager();
        act1 = new Action({
            name: "act1",
            actionType: "attack",
            attackBonus: 2
        });
        act2 = new Action({
            name: "act2",
            actionType: "feature"
        })
        act3 = new Action({
            name: "act3",
            actionType: "item"
        })
        spell1 = new SpellAction({
            name: "spell1",
            actionType: "spell",
            level: 1
        })
        spell2 = new SpellAction({
            name: "spell2",
            actionType: "spell",
            level: 2
        })
        spell3 = new SpellAction({
            name: "spell3",
            actionType: "spell",
            level: 2
        })

        manager.addAction(act1);
        manager.addAction(act2);
        manager.addAction(act3);
        manager.addAction(spell1);
        manager.addAction(spell2);
        manager.addAction(spell3);
    });

    test("Should return only demanded actions when getting actions", () => {
        expect(manager.getActions().length).toEqual(2);
        expect(manager.getSpells().length).toEqual(3);
        expect(manager.getFeatureActions().length).toEqual(1);
        expect(manager.getSpells(1).length).toEqual(1);
        expect(manager.getSpells(2).length).toEqual(2);
    });

    test("Should add specified spellslots", () => {
        manager.addSpellSlot(1, 5);
        manager.addSpellSlot(2);
        expect(manager.getSpellSlots(1)).toEqual(5);
        expect(manager.getSpellSlots(2)).toEqual(1);

        manager.useSpellSlots(1, 2);
        expect(manager.getSpellSlots(1)).toEqual(3);
        manager.useSpellSlots(1);
        expect(manager.getSpellSlots(1)).toEqual(2);
        expect(manager.getSpellSlots(3)).toEqual(0);
    });
})
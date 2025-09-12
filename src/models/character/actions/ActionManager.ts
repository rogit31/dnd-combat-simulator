import {Action, SpellAction} from "@/types"

/*
ActionManager keeps track of all the different actions that a character has,
as well as how many times they can use it. If keeps track of how many spell slots
a character has, as well as main actions, bonus actions, etc.
 */
export class ActionManager {
    /** in case we want to implement combat sim **/
    // private actions: Map<Action, number | "inf">;
    // private actionsPerRound: Map<string | undefined, number>;
    private actions: Action[];
    private spellSlots: Map<number, number>;

    constructor() {
        this.actions = [];
        this.spellSlots = new Map<number, number>();
    }

    public addAction(action: Action): void {
        this.actions.push(action);
    }

    public getSpells(level?: number): Action[] {
        const spells: Action[] = [];

        if (level) {
            for (const action of this.actions) {
                if (action.actionType == 'spell') {
                    const spell = action as SpellAction;
                    if (spell.level == level) {
                        spells.push(spell);
                    }
                }
            }
        } else {
            for (const action of this.actions) {
                if (action.actionType == "spell") {
                    spells.push(action);
                }
            }
        }

        return spells;
    }

    public getActions() {
        return this.actions;
    }

    public getBaseActions(): Action[] {
        const actions: Action[] = [];

        for (const action of this.actions) {
            if (action.actionType != "spell" && action.actionType != "feature") {
                actions.push(action);
            }
        }

        return actions;
    }

    public getFeatureActions() {
        const actions: Action[] = [];

        for (const action of this.actions) {
            if (action.actionType == "feature") {
                actions.push(action);
            }
        }

        return actions;
    }

    public addSpellSlot(level: number, amount?: number): void {
        const currSlots = this.spellSlots.get(level);
        if (currSlots && amount) {
            this.spellSlots.set(level, currSlots + amount);
        } else if (currSlots) {
            this.spellSlots.set(level, currSlots + 1);
        } else if (amount) {
            this.spellSlots.set(level, amount);
        } else {
            this.spellSlots.set(level, 1);
        }
    }

    public useSpellSlots(level: number, amount?: number): void {
        const currSlots = this.spellSlots.get(level);
        if (currSlots && amount) {
            if (currSlots < amount) {
                this.spellSlots.set(level, 0);
            } else {
                this.spellSlots.set(level, currSlots - amount);
            }
        } else if (currSlots) {
            this.spellSlots.set(level, currSlots - 1);
        }
    }

    public getSpellSlots(level: number) {
        return this.spellSlots.get(level) ?? 0;
    }
}
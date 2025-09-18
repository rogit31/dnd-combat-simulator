import {Action, flatResource, ResourceKey, Resources, SpellAction, tieredResource} from "@/types"

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
    private resources: Resources;
    private spellSlots: tieredResource;

    constructor() {
        this.actions = [];
        this.resources = new Map();
        this.spellSlots = {
            type: "tiered",
            tiers: new Map<number, { current: number; max: number }>(),
            recharge: "longRest"
        };
    }

    public addAction(action: Action): void {
        this.actions.push(action);
    }

    /**
     * returns all spells
     */
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

    /**
     * returns all actions
     */
    public getActions() {
        return this.actions;
    }

    /**
     * returns all actions which are not spells, or which come from a feature
     */
    public getBaseActions(): Action[] {
        const actions: Action[] = [];

        for (const action of this.actions) {
            if (action.actionType != "spell" && action.actionType != "feature") {
                actions.push(action);
            }
        }

        return actions;
    }

    /**
     * returns all actions from features
     */
    public getFeatureActions() {
        const actions: Action[] = [];

        for (const action of this.actions) {
            if (action.actionType == "feature") {
                actions.push(action);
            }
        }

        return actions;
    }

    /**
     * adds an amount of spell slots for specified level.
     * If no amount is specified, then add 1.
     */
    public addSpellSlot(level: number, amount?: number): void {
        // let currSlots = spellSlots.tiers.get(level) as {current: number, max: number};
        let currSlots = this.spellSlots.tiers.get(level)?.current;
        let max = this.spellSlots.tiers.get(level)?.max ?? 0;
        if (currSlots && amount) {
            // currSlots.current += amount;
            this.spellSlots.tiers.set(level, {current: currSlots + amount, max: max ?? 0});
        } else if (currSlots) {
            // currSlots.current++;
            this.spellSlots.tiers.set(level, {current: currSlots + 1, max: max ?? 0});
        } else if (amount) {
            this.spellSlots.tiers.set(level, {current: amount, max: max ?? 0});
        } else {
            this.spellSlots.tiers.set(level, {current: 1, max: max ?? 0});
        }

        currSlots = this.spellSlots.tiers.get(level)?.current as number;
        max = this.spellSlots.tiers.get(level)?.max as number;

        if (currSlots > max) {
            this.spellSlots.tiers.set(level, {current: max, max: max});
        }


    }

    /**
     * remove an amount of spell slots for specified level.
     * If no amount if specified, remove 1.
     * If new amount of spell slots is less than 0, set to 0.
     */
    public useSpellSlots(level: number, amount?: number): boolean {

        if (this.spellSlots) {
            const currSlots = this.spellSlots.tiers.get(level)?.current;
            const max = this.spellSlots.tiers.get(level)?.max as number;
            if (currSlots && amount) {
                if (currSlots < amount) {
                    return false;
                } else {
                    this.spellSlots.tiers.set(level, {current: currSlots - amount, max: max});
                    return true;
                }
            } else if (currSlots) {
                if (currSlots == 0) {
                    return false;
                }
                this.spellSlots.tiers.set(level, {current: currSlots - 1, max: max});
                return true;
            }
            return false;
        }
        return false;
    }

    /**
     * set the maximum amount of spell slots of a certain level to the specified amount
     */
    public setMaxSpellSlots(level: number, amount: number): void {
        const spellSlots = this.spellSlots.tiers.get(level);
        if (spellSlots) {
            spellSlots.max = amount;
        } else {
            this.spellSlots.tiers.set(level, {current: amount, max: amount});
        }
    }

    public getSpellSlots(level: number) {
        return this.spellSlots.tiers.get(level)?.current ?? 0;
    }

    /**
     * Add a flat ressource with a maximum amount and recharge time
     */
    public addResource(resource: ResourceKey, max: number,
                       recharge: "shortRest" | "longRest" | "daily" | "encounter" | undefined) {
        this.resources.set(resource, {
            type: "flat",
            current: max,
            max: max,
            recharge: recharge
        })
    }

    /**
     * use up a specified amount of resources from a specified resource pool.
     * Return false if there are not enough resources, or if this character doesn't
     * have the specified resource.
     */
    public useResource(resource: ResourceKey, amount?: number) {
        const resourcePool = this.resources.get(resource) as flatResource;
        if (resourcePool) {
            if (resourcePool.current < (amount ?? 1)) {
                return false;
            }
            resourcePool.current -= amount ?? 1;
            return true;
        }
        return false;
    }

    public getResources() {
        return this.resources;
    }

    /**
     * Reset the resources to max charge if their recharge matches the provided recharge
     */
    public resetResource(recharge: "shortRest" | "longRest" | "daily" | "encounter") {
        for (const resourceKey of this.resources.keys()) {
            const resourcePool = this.resources.get(resourceKey) as flatResource;
            if (resourcePool.recharge == recharge) {
                resourcePool.current = resourcePool.max;
            }
        }

        if (recharge == this.spellSlots.recharge) {
            for (const level of this.spellSlots.tiers.keys()) {
                const spellSlots = this.spellSlots.tiers.get(level) ?? {current: 0, max: 0};
                spellSlots.current = spellSlots.max;
            }
        }
    }
}
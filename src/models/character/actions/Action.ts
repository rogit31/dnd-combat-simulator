import {
    ActionType as ActionType,
    UsageConstraint,
    AOEType,
    DCType,
    ActionConstructorArgs, RollSet
} from "../../../../types"

export class Action {
    name: string;
    actionTime?: "action" | "bonusAction" | "freeAction" | "legendaryAction" | "reaction" | "lairAction" | "passive";
    actionType: "attack" | "spell" | "item" | "feature";
    targetingBehaviour?: "random" | "lowestHP" | "highestHP" | "highestLVL" | "lowestLVL" | "highestDPM";
    range?: string;
    area_of_effect?: AOEType;
    usageConstraints?: UsageConstraint[];

    constructor(data: ActionType) {
        this.name = data.name;
        this.actionTime = data.actionTime ?? "action";
        this.actionType = this.inferActionType(data);
        this.targetingBehaviour = data.targetingBehaviour ?? 'lowestHP';
        this.range = data.range ?? "5 feet";
        this.area_of_effect = data.area_of_effect;
        this.usageConstraints = data.usageConstraints;
    }

    private inferActionType(data: ActionConstructorArgs): "attack" | "spell" | "item" | "feature" {
        // If explicitly provided, use it
        if (data.actionType) {
            return data.actionType;
        }

        // If it has a heal or damage roll and a usage constraint it will usually be a spell
        if (data.damageRoll && data.usageConstraints || data.healingRoll && data.usageConstraints) {
            return "spell";
        }

        //otherwise if it does damage it will usually be an attack
        if (data.damageRoll) {
            return "attack";
        }

        // Default to feature
        return "feature";
    }
}

// Factory functions for creating specific action types with better defaults
export class SpellAction extends Action {
    duration?: string;
    concentration?: boolean;
    level?: number;
    dc?: DCType;

    constructor(data: ActionConstructorArgs & {
        duration?: string;
        concentration?: boolean;
        level?: number;
        dc?: DCType;
    }) {
        super({
            ...data,
            actionType: "spell",
            actionTime: data.actionTime ?? "action",
            range: data.range ?? "60 ft"
        });

        this.duration = data.duration ?? "Instantaneous";
        this.concentration = data.concentration ?? false;
        this.level = data.level ?? 0; // cantrip by default
        this.dc = data.dc;
    }
}

export class AttackAction extends Action {
    attackBonus?: number;

    constructor(data: ActionConstructorArgs & {
        attackBonus?: number;
    }) {
        super({
            ...data,
            actionType: "attack",
            actionTime: data.actionTime ?? "action",
            range: data.range ?? "5 ft"
        });

        this.attackBonus = data.attackBonus ?? 0;
    }
}

// Convenience factory functions
export function createSimpleAttack(name: string, damage?: RollSet, attackBonus?: number): AttackAction {
    return new AttackAction({
        name,
        damageRoll: damage,
        attackBonus
    });
}

export function createSimpleSpell(name: string, options?: {
    damage?: RollSet;
    healing?: RollSet;
    level?: number;
    dc?: DCType;
    duration?: string;
}): SpellAction {
    return new SpellAction({
        name,
        damageRoll: options?.damage,
        healingRoll: options?.healing,
        level: options?.level,
        dc: options?.dc,
        duration: options?.duration
    });
}

export function createSimpleHealing(name: string, healing: RollSet): Action {
    return new Action({
        name,
        healingRoll: healing,
        targetingBehaviour: "lowestHP", // Makes sense for healing
        actionType: "spell"
    });
}


import {AbilityScores, Action as ActionType, DieFormat, UsageConstraint} from "./types"

export class Action implements ActionType{

    name: string;
    priority: number; //the smaller, the higher priority
    actionTime: "action" | "bonusAction" | "freeAction" | "legendaryAction";
    actionType: "attack" | "heal" | "buff" | "debuff";
    targetingBehaviour: "random" | "lowestHP" | "highestHP" | "highestLVL" | "lowestLVL" | "highestDPM";
    onlyEnemies: boolean;
    healingRoll?: DieFormat;
    flatHealing?: number;
    flatDamage?: number;
    damageRoll?: DieFormat;
    conditions?: [];
    targets: number;
    effects?: [];
    bonusToHit?: number;
    spellSave?: number;
    spellSaveStat?: keyof AbilityScores;
    onSave?: "half" | "nothing";
    usageConstraints?: UsageConstraint[];

    constructor(data: ActionType) {
        this.name = data.name;
        this.priority = data.priority;
        this.actionTime = data.actionTime;
        this.actionType = data.actionType;
        this.targetingBehaviour = data.targetingBehaviour;
        this.onlyEnemies = data.onlyEnemies;
        this.healingRoll = data.healingRoll;
        this.flatHealing = data.flatHealing;
        this.damageRoll = data.damageRoll;
        this.flatDamage = data.flatDamage;
        this.conditions = data.conditions;
        this.targets = data.targets;
        this.effects = data.effects;
        this.bonusToHit = data.bonusToHit;
        this.spellSave = data.spellSave;
        this.spellSaveStat = data.spellSaveStat;
        this.onSave = data.onSave;
        this.usageConstraints = data.usageConstraints;
    }


}
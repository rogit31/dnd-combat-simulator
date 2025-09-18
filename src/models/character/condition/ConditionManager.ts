import {Condition, ConditionManagerConstructorArgs, Conditions, DamageType, Modifiable} from "@/types";

/*
ConditionManager keeps track of temporary conditions, whether positive or negative.
The includes status conditions, resistances/vulnerabilities/immunities, and whether
a character has advantage or disadvantage on any rolls from any effects (i.e. enhance ability).
 */
export class ConditionManager {
    public conditions: Conditions;
    private advantage: Modifiable[];
    private disadvantage: Modifiable[];
    private resistances: DamageType[];
    private immunities: DamageType[];
    private vulnerabilities: DamageType[];

    constructor(data: ConditionManagerConstructorArgs) {
        this.conditions = data.conditions ?? {
            blinded: false,
            charmed: false,
            deafened: false,
            frightened: false,
            grappled: false,
            incapacitated: false,
            invisible: false,
            paralyzed: false,
            petrified: false,
            poisoned: false,
            prone: false,
            restrained: false,
            stunned: false,
            unconscious: false,
            exhausted: false
        };
        this.advantage = data.advantage ?? [];
        this.disadvantage = data.disadvantage ?? [];
        this.resistances = data.resistances ?? [];
        this.immunities = data.immunities ?? [];
        this.vulnerabilities = data.vulnerabilities ?? [];
    }

    public addResistance(resistance: DamageType) {
        this.resistances.push(resistance);
    }

    public addImmunity(immunity: DamageType) {
        this.immunities.push(immunity);
    }

    public addVulnerability(vulnerability: DamageType) {
        this.vulnerabilities.push(vulnerability);
    }

    public hasAdvantage(stat: Modifiable) {
        return this.advantage.includes(stat);
    }

    public giveAdvantage(stat: Modifiable) {
        this.advantage.push(stat);
    }

    public removeAdvantage(stat: Modifiable) {
        this.advantage.splice(this.advantage.indexOf(stat), 1);
    }

    public hasDisdvantage(stat: Modifiable) {
        return this.disadvantage.includes(stat);
    }

    public giveDisadvantage(stat: Modifiable) {
        this.disadvantage.push(stat);
    }

    public removeDisadvantage(stat: Modifiable) {
        this.disadvantage.splice(this.disadvantage.indexOf(stat), 1);
    }

    public getResistances() {
        return this.resistances;
    }

    public isResistant(damageType: DamageType) {
        return this.resistances.includes(damageType);
    }

    public getImmunities() {
        return this.immunities;
    }

    public isImmune(damageType: DamageType) {
        return this.immunities.includes(damageType);
    }

    public getVulnerabilities() {
        return this.vulnerabilities;
    }

    public isVulnerable(damageType: DamageType) {
        return this.vulnerabilities.includes(damageType);
    }

    public giveCondition(condition: Condition) {
        this.conditions[condition] = true;
    }

    public removeCondition(condition: Condition) {
        this.conditions[condition] = false;
    }

    public reset() {
        this.conditions = {
            exhausted: false,
            restrained: false,
            poisoned: false,
            grappled: false,
            frightened: false,
            blinded: false,
            prone: false,
            invisible: false,
            deafened: false,
            charmed: false,
            unconscious: false,
            stunned: false,
            petrified: false,
            paralyzed: false,
            incapacitated: false,
        };
        this.advantage = []
        this.disadvantage = [];
    }
}
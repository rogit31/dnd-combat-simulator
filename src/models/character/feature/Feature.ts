import {Action} from "../actions//Action";
import {AbilityScore} from "../../../../types";

/*
feature is going to be a little difficult to deal with
A feature which has an action associated with it should give this action to the character to whom
this feature belongs.
A feature may also have a simple one time permanent effect upon creation, such as a stat increase.
In which case, just increase the character's stats and enter the source of the stat increase with
the name of the feature.
Some class features have unique stats, such as sorcery points, or bardic inspiration. In which case,
these stats should be tracked in this class with a unique object. (e.g. {statName: "ki points", amount: 3})
 */
export class Feature {
    public name: string;
    public description: string;
    public actions?: Action[];
    public mods?: {stat: string; amount: number, base: AbilityScore}[];
    public customStat?: {statName: string, amount: number};

    constructor(name: string, description: string,
                actions?: Action[], mods?: {stat: string; amount: number, base: AbilityScore}[], customStat?: {statName: string, amount: number}) {
        this.name = name;
        this.description = description;
        this.actions = actions;
        this.mods = mods;
        this.customStat = customStat;
    }
}
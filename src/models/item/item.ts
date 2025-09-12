import {ItemConstructorArgs} from "../../../types";
import {Rarity} from "../../../types/dndBeyondApiType";

export class Item {
    public id: number;
    public name: string;
    public weightPer: number;
    public description: string;
    public consumable: boolean;
    public isAttuned: boolean;
    public equipped: boolean;
    public rarity: Rarity;

    constructor(data: ItemConstructorArgs) {
        this.id = data.id;
        this.name = data.name;
        this.weightPer = data.weightPer;
        this.description = data.description;
        this.consumable = data.consumable ?? false;
        this.isAttuned = data.isAttuned ?? false;
        this.equipped = data.equipped ?? false;
        this.rarity = data.rarity ?? Rarity.Common;
    }
}
import {Item} from "@/types";

/*
InventoryManager keeps track of a character's possessions, including equipment, money, weapons, and items.
It keeps track of the total load a character is carrying, and whether they are being overloaded.
 */
export class InventoryManager {
    public inventory: Map<Item, number>;
    public maxLoad: number;
    public currLoad: number;
    public gold: number;

    constructor(maxLoad: number) {
        this.maxLoad = maxLoad;
        this.currLoad = 0;
        this.inventory = new Map<Item, number>();
        this.gold = 0;
    }

    public addItem(item: Item, quantity: number) {
        this.inventory.set(item, quantity);
        this.currLoad += item.weightPer *  quantity;
    }

    /**
     * remove a quantity of an item from inventory, if none are left after
     * removal, delete the entry from the inventory map
     */
    public removeItem(item: Item, quantity: number) {
        const supply = this.inventory.get(item);
        if (supply) {
            if (quantity >= supply) {
                this.currLoad -= item.weightPer * supply;
                this.inventory.delete(item);
            } else {
                this.currLoad -= item.weightPer * quantity;
                this.inventory.set(item, supply - quantity);
            }
        }
    }

    public addGold(amount: number) {
        this.gold += amount;
    }

    public spendGold(amount: number) {
        this.gold -= amount;
    }
}
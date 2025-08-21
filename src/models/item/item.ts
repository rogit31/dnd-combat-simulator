export class Item {

    public name: string;
    public weightPer: number;
    public description: string;

    constructor(data: ItemConstructorData) {
        this.name = data.name;
        this.weightPer = data.weightPer;
        this.description = data.description;
    }
}

export interface ItemConstructorData{
    name: string,
    weightPer: number,
    description: string
}
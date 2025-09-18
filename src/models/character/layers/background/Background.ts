import {BackgroundConstructorArgs, Item, Modifiable} from "../../../../../types";
import {Character} from "../../Character"
import {CharacterLayer} from "../CharacterLayer";

export class Background extends CharacterLayer{
    private proficiencies: Modifiable[];
    private startingEquipment: Map<Item, number>;

    constructor(data: BackgroundConstructorArgs) {
        super(data.name, data.features ?? []);
        this.proficiencies = data.proficiencies;
        this.startingEquipment = data.startingEquipment;
    }

    public applyModifiers(character: Character) {
        for (const prof of this.proficiencies) {
            character.modifiers.addModifier(prof,
                this.name)
        }

        for (const kv of this.startingEquipment) {
            character.addItem(kv[0], kv[1]);
        }

        this.applyFeatures(character);
    }
}
import {BackgroundConstructorArgs, AbilityScore, Item} from "../../../../../types";
import {Character} from "../../Character"
import {CharacterLayer} from "../CharacterLayer";

export class Background extends CharacterLayer{
    private proficiencies: Map<string, AbilityScore>;
    private startingEquipment: Map<Item, number>;

    constructor(data: BackgroundConstructorArgs) {
        super(data.name, data.features ?? []);
        this.proficiencies = data.proficiencies;
        this.startingEquipment = data.startingEquipment;
    }

    public applyModifiers(character: Character) {
        for (const kv of this.proficiencies) {
            character.modifiers.addModifier(kv[0],
                this.name,
                kv[1])
        }

        for (const kv of this.startingEquipment) {
            character.addItem(kv[0], kv[1]);
        }

        this.applyFeatures(character);
    }
}
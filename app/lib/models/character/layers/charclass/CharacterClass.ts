import {CharacterLayer} from "@/app/lib/models/character/layers/CharacterLayer";
import {Character} from "@/app/lib/models/character/Character";

/** The data type to be passed to the CharacterClass constructor. **/
interface CharacterClassConstructor{
    name: string,
}

/** Represents the classes a character can have. **/
export abstract class CharacterClass extends CharacterLayer{
    //we want to pass the responsibility of implementing applymodifiers to the specific class.
    //so we extend it.
    //we can specify things that are common to a dnd class here though
    public name: string;

    constructor(data: CharacterClassConstructor) {
        super();
        this.name = data.name;
    }

}
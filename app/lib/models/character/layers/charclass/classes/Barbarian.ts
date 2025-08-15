import {CharacterClass} from "@/app/lib/models/character/layers/charclass/CharacterClass";
import {Character} from "@/app/lib/models/character/Character";

/** Represents the barbarian class. **/
export class Barbarian extends CharacterClass{

    constructor() {
        super({name: "Barbarian"}); //would rather use a type here
    }

    /** Returns a modified version of the character with modifiers applied to it. **/
    applyModifiers(character: Character): Character {
        return character;
    }
}
import {Character} from "@/src/models/character/Character";

/** Represents a character layer, a background, class, or race. **/

export abstract class CharacterLayer {
    /** A method that takes a character and returns the modified character.  **/
    public abstract applyModifiers(character : Character) : Character;

}
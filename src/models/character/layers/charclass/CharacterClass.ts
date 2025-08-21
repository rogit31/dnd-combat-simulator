import {CharacterLayer} from "@/src/models/character/layers/CharacterLayer";
import {AbilityScore, DieFormat, Item} from "@/types";
import {Character} from "@/src/models/character/Character";

/** The data type to be passed to the CharacterClass constructor. **/
interface CharacterClassConstructor{
    name: string,
    spellCastingModifierBase: AbilityScore,
    id: number
    hitDie: DieFormat[],
    hitPointsAtFirstLevel: number,
    hitPointsScaling: {
        base: DieFormat[],
        modifier: AbilityScore
    }
    startingEquipment: Map<Item, number>;
}

/** Represents the classes a character can have. **/
export class CharacterClass extends CharacterLayer{
    //we want to pass the responsibility of implementing applymodifiers to the specific class.
    //so we extend it.
    //we can specify things that are common to a dnd class here though
    /** The name of the class **/
    public name: string;

    /** The id of the class as fetched from the db. **/
    public id: number;

    /** The ability score the class depends on to cast spells, if any.  **/
    public spellCastingModifierBase: AbilityScore;

    private hitDie: DieFormat[];
    private hitPointsAtFirstLevel : number;
    private hitPointsScaling: {
        base: DieFormat[],
        modifier: AbilityScore
    };

    private startingEquipment: Map<Item, number>;

    public applyModifiers(character: Character) : Character {
        //TODO: create a copy of the character, apply modifiers and return
        //Stub
        return character;
    }


    // /** There's probably a better data structure to represent this. **/
    // private proficiencies: {
    //     armorProficiencies: Set<string>,
    //     weaponProficiencies: Set<string>,
    //     toolsProficiencies: Set<string>,
    //     savingThrowsProficiencies: Set<AbilityScores>,
    //     skillsProficiencies: Set<SkillProficiencies>,
    //     chooseSkillProficiencies: Set<SkillProficiencies>
    // };
    //
    // /** A list of modifiers, objects that represent a direct modification of the character from the class. **/
    // private modifiers: Modifier[];

    constructor(data: CharacterClassConstructor) {
        super();
        this.id = data.id;
        this.name = data.name;
        this.spellCastingModifierBase = data.spellCastingModifierBase;
        this.hitDie = data.hitDie;
        this.hitPointsAtFirstLevel = data.hitPointsAtFirstLevel;
        this.hitPointsScaling = data.hitPointsScaling;
        this.startingEquipment = data.startingEquipment;
    }

}
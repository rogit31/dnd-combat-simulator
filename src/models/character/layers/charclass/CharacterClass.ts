import {CharacterLayer} from "../CharacterLayer";
import {Character} from "../../Character"
import {AbilityScore, DieFormat, Item, CharClassConstructorArgs, Modifiable} from "../../../../../types";

/** Represents the classes a character can have. **/
export class CharacterClass extends CharacterLayer{
    //we want to pass the responsibility of implementing applymodifiers to the specific class.
    //so we extend it.
    //we can specify things that are common to a dnd class here though
    /** The id of the class as fetched from the db. **/

    /** The ability score the class depends on to cast spells, if any.  **/
    public spellCastingModifierBase?: AbilityScore;

    private hitDie: DieFormat[];
    private hitPointsAtFirstLevel : number;
    private hitPointsScaling: {
        base: DieFormat[],
        modifier: AbilityScore
    };

    private startingEquipment: Map<Item, number>;
    private proficiencies: Modifiable[];


    public applyModifiers(character: Character) {
        for (const prof of this.proficiencies) {
            character.modifiers.addModifier(prof,
                this.name)
        }

        for (const itemAmount of this.startingEquipment) {
            character.addItem(itemAmount[0], itemAmount[1]);
        }

        this.applyFeatures(character);
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

    constructor(data: CharClassConstructorArgs) {
        super(data.name, data.features ?? []);
        this.spellCastingModifierBase = data.spellCastingModifierBase;
        this.hitDie = data.hitDie;
        this.hitPointsAtFirstLevel = data.hitPointsAtFirstLevel;
        this.hitPointsScaling = data.hitPointsScaling;
        this.startingEquipment = data.startingEquipment;
        this.proficiencies = data.proficiencies;
    }
}
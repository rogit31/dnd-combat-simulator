import {Feature} from "../feature/Feature";
import {Character} from "../Character";

/** Represents a character layer, a background, class, or race. **/

export abstract class CharacterLayer {
    private features: Feature[];
    public name: string;

    constructor(name: string, features: Feature[]) {
        this.name = name;
        this.features = features;
    }

    /** A method that takes a character and returns the modified character.  **/
    public abstract applyModifiers(character : Character): void;

    public getFeatures(): Feature[] {
        return this.features;
    }

    protected applyFeatures(character: Character) {
        for (const f of this.features) {
            if (f.mods) {
                for (const stat of f.mods) {
                    character.addModifier(stat.stat, this.name, stat.base, stat.amount)
                }
            }

            if (f.actions) {
                for (const act of f.actions) {
                    character.addAction(act);
                }
            }
        }
    }

}
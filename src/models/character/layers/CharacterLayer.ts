import {Feature} from "../feature/Feature";
import {Character} from "../Character";
import {flatResource} from "@/types";

/** Represents a character layer, a background, class, or race. **/

export abstract class CharacterLayer {
    private features: Feature[];
    public name: string;

    constructor(name: string, features: Feature[]) {
        this.name = name;
        this.features = features;
    }

    /** Given a character, apply all applicable modifications to this character, including
     * equipment, features, proficiencies, and maybe some other stuff.
     **/
    public abstract applyModifiers(character : Character): void;

    public getFeatures(): Feature[] {
        return this.features;
    }

    /**
     * Given a character, apply the effects of all of this layer's features effects (if any)
     */
    protected applyFeatures(character: Character) {
        for (const f of this.features) {
            if (f.mods) {
                for (const stat of f.mods) {
                    character.addModifier(stat.stat, this.name, stat.amount)
                }
            }

            if (f.actions) {
                for (const act of f.actions) {
                    character.addAction(act);
                }
            }

            if (f.resources) {
                for (const resource of f.resources) {
                    const pool = resource[1] as flatResource;
                    character.actions.addResource(resource[0], pool.max, pool.recharge);
                }
            }
        }
    }

}
import {RaceConstructorArgs, DamageType, AbilityScores} from "../../../../../types";
import {Character} from "../../Character"
import {CharacterLayer} from "../CharacterLayer";

export class Race  extends CharacterLayer{
    private resistances?: DamageType[];
    private immunities?: DamageType[];
    private vulnerabilities?: DamageType[];
    private speed: number;
    private size: "Tiny" | "Small" | "Medium" | "Large";
    private abilityScoreIncrease: AbilityScores;

    constructor(data: RaceConstructorArgs) {
        super(data.name, data.features ?? []);
        this.name = data.name;
        this.resistances = data.resistances ?? [];
        this.immunities = data.immunities ?? [];
        this.vulnerabilities = data.vulnerabilities ?? [];
        this.speed = data.speed;
        this.size = data.size;
        this.abilityScoreIncrease = data.abilityScoreIncrease;
    }

    public applyModifiers(character: Character) {
        if (this.resistances) {
            for (const res of this.resistances) {
                character.conditions.addResistance(res);
            }
        }

        if (this.immunities) {
            for (const imm of this.immunities) {
                character.conditions.addImmunity(imm);
            }
        }

        if (this.vulnerabilities) {
            for (const vul of this.vulnerabilities) {
                character.conditions.addVulnerability(vul);
            }
        }

        character.modifiers.abilityScores.strength += this.abilityScoreIncrease.strength;
        character.modifiers.abilityScores.dexterity += this.abilityScoreIncrease.dexterity;
        character.modifiers.abilityScores.constitution += this.abilityScoreIncrease.constitution;
        character.modifiers.abilityScores.intelligence += this.abilityScoreIncrease.intelligence;
        character.modifiers.abilityScores.wisdom += this.abilityScoreIncrease.wisdom;
        character.modifiers.abilityScores.charisma += this.abilityScoreIncrease.charisma;

        character.speed = this.speed;

        this.applyFeatures(character);
    }
}
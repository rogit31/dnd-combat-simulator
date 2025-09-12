import {AbilityScore, AbilityScores} from "../../../../types";

class Modifier {
    source: string;
    value: { val : number};

    constructor(source: string, value: { val: number }) {
        this.source = source;
        this.value = value;
    }
}

export class AbilityModifier {
    baseStat: AbilityScore;
    abilityScores: AbilityScores;
    modifiers: Modifier[];

    constructor(baseStat: AbilityScore, abilityScores: AbilityScores) {
        this.baseStat = baseStat;
        this.abilityScores = abilityScores;
        this.modifiers = [];
    }

    addModifier(source: string, value: { val : number }) {
        this.modifiers.push(new Modifier(source, value));
    }

    removeModifier(source: string) {
        const idx: number[] = [];
        for (let i = 0; i < this.modifiers.length; i++) {
            if (this.modifiers[i].source === source) {
                idx.push(i);
            }
        }

        for (let i = idx.length - 1; i >= 0; i--) {
            this.modifiers.splice(idx[i], 1);
        }
    }

    getTotal() {
        let total = 0;
        for (let i = 0; i < this.modifiers.length; i++) {
            total += this.modifiers[i].value.val;
        }
        return total + this.calculateAbilityModifier(this.abilityScores[this.baseStat]);
    }

    private calculateAbilityModifier(abilityScore: number) {
        return Math.floor((abilityScore - 10) / 2)
    }
}
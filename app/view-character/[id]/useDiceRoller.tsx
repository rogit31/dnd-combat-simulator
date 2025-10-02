"use client"

import {useState} from "react";
import {RollSet} from "@/types";

export function useDiceRoller(autoHideMs = 3000){
    const [result, setResult] = useState<number | null>(null);

    function rollDice(diceSet: RollSet){
        let result = 0;
        for(const effectRoll of diceSet.baseEffect){
            for(let i = 0; i < effectRoll.effect.n; i++){
                const bonus = effectRoll.effect.flatBonus || 0;
                result += Math.floor(Math.random() * effectRoll.effect.d + 1 + bonus);
            }
        }

        if (diceSet.scaling) {
            if(diceSet.scaling.scalingValue.flatBonus){
                result += diceSet.scaling.scalingValue.flatBonus;
            } else if(diceSet.scaling.scalingValue.multiplier){
                result *= diceSet.scaling.scalingValue.multiplier;
            }
        }

        setResult(result);
        return result;
    }


    function clearRoll() {
        setResult(null);
    }

    return {result, rollDice, clearRoll, autoHideMs};
}
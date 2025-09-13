import React from 'react';
import {createPortal} from "react-dom";
import {RollSet} from "@/types";
import styles from './DiceRoller.module.css';

function DiceRoller({diceSet} : {diceSet: RollSet}) {
    const portalTarget = document.getElementById("portal-here");
    //TODO: Would be cool to have some roll history

    if(portalTarget){
        return createPortal(
            <div className={styles.result}>
                {rollDice(diceSet)}
            </div>,
            portalTarget
        );
    }

}

export default DiceRoller;

function rollDice(diceSet: RollSet){
    let result = 0;
    for(const effectRoll of diceSet.baseEffect){
        for(let i = 0; i < effectRoll.effect.n; i++){
            const bonus = effectRoll.effect.flatBonus || 0;
            result += Math.floor(Math.random() * effectRoll.effect.d + 1 + bonus);
        }
    }
    //TODO: I forgot what the scaling.scalingValue.base was supposed to be
    if(!diceSet.scaling){ //This can be made a bit cleaner
        return result;
    } else if(diceSet.scaling.scalingValue.flatBonus){
        result += diceSet.scaling.scalingValue.flatBonus;
    } else if(diceSet.scaling.scalingValue.multiplier){
        result *= diceSet.scaling.scalingValue.multiplier;
    }
    return result;
}
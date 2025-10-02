'use client'
import React from 'react';
import {Circle, Diamond} from "lucide-react";
import styles from './SkillDisplay.module.css';
import DiceRoller from "@/app/components/diceRoller/DiceRoller";
import {useDiceRoller} from "@/app/view-character/[id]/useDiceRoller";

function SkillDisplay({abilityScoreValue, name}: { abilityScoreValue: number, name: string }) {
    const iconSize = 12;
    const {result, rollDice, clearRoll, autoHideMs} = useDiceRoller();


    function displayRoll(bonus: number){
        rollDice({scaling: false, baseEffect: [{effect: {n: 1, d: 20, flatBonus: bonus}}]});
    }

    return (
        <>
            {name === 'Saving Throw' ?
                (
                    <div className={styles.skillWrapper}>
                        <span>
                            <Diamond size={iconSize}/>
                            Saving throw
                        </span>

                        <button onClick={() => displayRoll(calcMod(abilityScoreValue))} className={styles.skillButton}>{'+ ' + calcMod(abilityScoreValue)}</button>
                    </div>) :
                (
                    <div className={styles.skillWrapper}>
                        <span>
                            <Circle size={iconSize}/>
                            {formatString(name)}
                        </span>
                        <button onClick={() => displayRoll(calcMod(abilityScoreValue))} className={styles.skillButton}>{'+ ' + calcMod(abilityScoreValue)}</button>
                    </div>
                )}
            {result && <DiceRoller result={result} onClose={clearRoll} autoHideMs={autoHideMs}/>}
        </>
    );
}

export default SkillDisplay;

function calcMod(abilityScore: number) {
    return Math.floor((abilityScore - 10) / 2)
}

function formatString(unformatted: string): string {
    const replaced = unformatted.replace(/([A-Z])/g, " $1");
    return replaced.charAt(0).toUpperCase() + replaced.slice(1);
}
'use client'
import React, {useState} from 'react';
import {Circle, Diamond} from "lucide-react";
import styles from './SkillDisplay.module.css';
import DiceRoller from "@/app/components/diceRoller/DiceRoller";
import {RollSet} from "@/types";

function SkillDisplay({abilityScoreValue, name}: { abilityScoreValue: number, name: string }) {
    const iconSize = 12;
    const [showRoll, setShowRoll] = useState(false);
    const [rollData, setRollData] = useState<null | RollSet>(null);

    function displayRoll(bonus: number){
        const diceSet = {baseEffect: [{effect: {d: 20, n: 1, flatBonus: bonus}}]};
        setRollData(diceSet);
        setShowRoll(true);

        // Auto-hide after 3 seconds
        setTimeout(() => {
            setShowRoll(false);
        }, 3000);
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
            {showRoll && rollData && <DiceRoller diceSet={rollData} />}
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
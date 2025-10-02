"use client"

import React from 'react';
import {BowArrow, Sword} from "lucide-react";
import styles from './ActionDisplay.module.css'
import {useDiceRoller} from "@/app/view-character/[id]/useDiceRoller";
import DiceRoller from "@/app/components/diceRoller/DiceRoller";

interface ActionDisplayProps {
    action: {
        name: string,
        damage?: {
            n: number,
            d: number,
            flatBonus: number,
            type: string,
        },
        range: number,
        AOE: boolean,
        type: string,
        toHit?: number,
        source: string
    }
}

function ActionDisplay({action}: ActionDisplayProps) {

    const {result, rollDice, autoHideMs, clearRoll} = useDiceRoller();

    return (
        <div className={styles.wrapper}>
            {
                action.type === "meleeAttack" ? (
                    <>
                        <Sword/>
                    </>
                ) : (
                    <>
                        <BowArrow/>
                    </>
                )
            }
            <div className={styles.nameWrapper}>
                {action.name}
                <span className={styles.source}>{action.source}</span>
            </div>
            <div>
                {action.range} ft.
                <div className={styles.range}>
                    range
                </div>
            </div>
            <div className={styles.toHitWrapper}
                 onClick={() => rollDice({
                     scaling: false,
                     baseEffect: [{effect: {d: 20, n: 1, flatBonus: action.toHit}}]
                 })}>
                {action.toHit ? (
                    <>
                        + {action.toHit}
                        <div className={styles.toHit}>
                            to hit
                        </div>
                    </>
                ) : (
                    <>
                        --
                    </>
                )}
            </div>
            <div className={styles.damageWrapper}>
                {
                    (action.damage && action.damage.d && action.damage?.n) ?
                        (
                            <div>
                                <div
                                    onClick={() => rollDice({
                                        scaling: false,
                                        baseEffect: [{
                                            effect: {
                                                d: action.damage!.d,
                                                n: 1,
                                                flatBonus: action.damage?.flatBonus
                                            }
                                        }]
                                    })}>
                                    {action.damage?.n}
                                    d
                                    {action.damage?.d}
                                    +
                                    {action.damage?.flatBonus}
                                </div>
                                <div className={styles.damageType}>
                                    {action.damage?.type}
                                </div>
                            </div>

                        ) : (
                            <div>
                                --
                            </div>
                        )
                }


            </div>
            {result !== null && (
                <DiceRoller result={result} autoHideMs={autoHideMs} onClose={clearRoll}/>
            )}

        </div>
    );
}

export default ActionDisplay;
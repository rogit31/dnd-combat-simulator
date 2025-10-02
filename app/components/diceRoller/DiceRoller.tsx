"use client"

import React, {useEffect} from 'react';
import {createPortal} from "react-dom";
import styles from './DiceRoller.module.css';

interface DiceRollerProps{
    result: number,
    onClose?: () => void,
    autoHideMs?: number
}

function DiceRoller({result, onClose, autoHideMs = 3000} : DiceRollerProps) {

    useEffect(() => {
        if (onClose && autoHideMs) {
            const timer = setTimeout(onClose, autoHideMs);
            return () => clearTimeout(timer);
        }
    }, [onClose, autoHideMs]);

    const portalTarget = document.getElementById("portal-here");
    //TODO: Would be cool to have some roll history

    if(portalTarget){
        return createPortal(
            <div className={styles.result}>
                {result}
            </div>,
            portalTarget
        );
    }

}

export default DiceRoller;
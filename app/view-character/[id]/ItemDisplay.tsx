import React from 'react';
import styles from './ItemDisplay.module.css'
import {Square, SquareCheck} from "lucide-react";

type ItemProps = {
    itemId: number,
    itemName: string,
    itemWeight: number,
    itemType: string,
    range: number,
    equipped: boolean,
    damage: {
    n: number,
        d: number,
        flatBonus: number,
        type: string
    }
}

//TODO: Add equip action here

function ItemDisplay({ item } : {item: ItemProps}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topRow}>

                <div className={styles.labelGroup}>
                    {item.itemName}
                    <span>{item.itemType}</span>
                </div>

                <div className={styles.labelGroup}>
                    {item.damage.n}d{item.damage.d} + {item.damage.flatBonus}
                    <span>{item.damage.type}</span>
                </div>

                <div className={styles.labelGroup}>
                    {item.itemWeight}
                    <span>Weight</span>
                </div>

                <div className={styles.labelGroup}>
                    {item.equipped ? <SquareCheck/> : <Square/>}
                    <span>Equipped</span>
                </div>

            </div>
        </div>
    );
}

export default ItemDisplay;
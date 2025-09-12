import React from 'react';
import {ArrowLeft, Circle, Diamond} from "lucide-react";
import Link from "next/link";

import styles from './page.module.css';

interface CharacterProps {
    params: Promise<{ id: number }>;
}

//Dummy JSON data:
const JSON = {
    "characterId": 1,
    "name": "something",
    "HP": 20,
    "race": "human",
    "background": "acolyte",
    "classes": [
        {
            "classId": 1,
            "className": "Fighter",
            "level": 3,
            "spellCastingMod": null,
            "hitDie": "d10",
            "hitPointsAtFirstLevel": 10,
            "hitPointScaling": "+6 per level",
            "proficienciesId": 1,
            "modifiersId": 1,
            "startingEquipmentId": 1
        }
    ],
    "stats": {
        "strength": 16,
        "dexterity": 12,
        "constitution": 14,
        "intelligence": 10,
        "wisdom": 11,
        "charisma": 13
    },
    "inventory": [
        {
            "itemId": 1,
            "itemName": "Item",
            "itemWeight": 8
        },
        {
            "itemId": 2,
            "itemName": "Item2",
            "itemWeight": 9
        }
    ],
    "proficiencies": [
        {"proficiencyId": 1, "proficiencyName": "Light Armor", "category": "Armor"},
        {"proficiencyId": 2, "proficiencyName": "Quarterstaff", "category": "Weapon"}
    ],
    "modifiers": [
        {
            "modifierId": 1,
            "origin": "Fighter",
            "target": "strength",
            "operation": "+",
            "modCondition": "always",
            "modPhase": "base"
        },
        {
            "modifierId": 2,
            "origin": "Wizard",
            "target": "intelligence",
            "operation": "+",
            "modCondition": "always",
            "modPhase": "base"
        }
    ]
}

function formatClasses(classes: { className: string, level: number }[]) {
    let result = '';
    for (const cls of classes) {
        result += cls.className + " " + +cls.level
    }
    return result;
}

async function Page({params}: CharacterProps) {

    // Here we would await the parameter passed to the url of the page
    // and find the corresponding character associated with that id
    // something like this:
    // const id = await params;
    // const character = characters.get(id);
    // and then use the data below to display the full character

    const diamondSize = 12;

    return (
        <div className={styles.wrapper}>

            <h2>Character view</h2>
            <Link href="/">
                <ArrowLeft/>
            </Link>

            <div className={styles.characterSheet}>

                <div className={styles.metaWrapper}>
                    <h2>{JSON.name}</h2>

                    <div className={styles.meta}>
                        <span>{formatClasses(JSON.classes)}</span>
                        <span>{JSON.race}</span>
                        <span>{JSON.background}</span>
                    </div>
                </div>

                <div className={styles.statWrapper}>

                    <div className={styles.stat}>
                        <div className={styles.statNumberWrapper}>
                            <span className={styles.statNumber}>{JSON.stats.strength}</span>
                            Strength
                        </div>

                        <div className={styles.skills}>
                            <div>
                                <Diamond size={diamondSize}/>
                                Saving throw
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Athletics
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className={styles.stat}>

                        <div className={styles.statNumberWrapper}>
                            <span className={styles.statNumber}>{JSON.stats.dexterity}</span>
                            Dexterity
                        </div>
                        <div className={styles.skills}>
                            <div>
                                <Diamond size={diamondSize}/>
                                Saving throw
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Acrobatics
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Sleight of Hand
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Stealth
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className={styles.stat}>

                        <div className={styles.statNumberWrapper}>
                            <span className={styles.statNumber}>{JSON.stats.constitution}</span>
                            Constitution
                        </div>
                        <div className={styles.skills}>
                            <div>
                                <Diamond size={diamondSize}/>
                                Saving throw
                            </div>
                        </div>
                    </div>

                    <hr/>


                    <div className={styles.stat}>
                        <div className={styles.statNumberWrapper}>
                            <span className={styles.statNumber}>{JSON.stats.intelligence}</span>
                            Intelligence
                        </div>
                        <div className={styles.skills}>
                            <div>
                                <Diamond size={diamondSize}/>
                                Saving throw
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Arcana
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                History
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Investigation
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Nature
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Religion
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className={styles.stat}>

                        <div className={styles.statNumberWrapper}>
                            <span className={styles.statNumber}>{JSON.stats.wisdom}</span>
                            Wisdom
                        </div>

                        <div className={styles.skills}>
                            <div>
                                <Diamond size={diamondSize}/>
                                Saving throw
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Animal Handling
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Insight
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Medicine
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Perception
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Survival
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className={styles.stat}>

                        <div className={styles.statNumberWrapper}>
                            <span className={styles.statNumber}>{JSON.stats.charisma}</span>
                            Charisma
                        </div>

                        <div className={styles.skills}>
                            <div>
                                <Diamond size={diamondSize}/>
                                Saving throw
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Deception
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Intimidation
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Performance
                            </div>
                            <div>
                                <Circle size={diamondSize}/>
                                Persuasion
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Page;
import React from 'react';
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

import styles from './page.module.css';
import {AbilityScores, abilityToSkills, SkillProficiencies} from "@/types";
import SkillDisplay from "@/app/view-character/[id]/SkillDisplay";

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
                    {Object.entries(JSON.stats).map(([abilityName, abilityValue]) => {
                        const skillsForAbility = abilityToSkills[abilityName as keyof AbilityScores] || [];

                        return (
                            <div key={abilityName}>
                                <div className={styles.stat}>
                                    <div className={styles.statNumberWrapper}>
                                        <span className={styles.statNumber}>{abilityValue}</span>
                                        {abilityName.charAt(0).toUpperCase() + abilityName.slice(1)}
                                    </div>

                                    <div className={styles.skills}>

                                    <SkillDisplay abilityScoreValue={abilityValue} name={"Saving Throw"} />

                                        {skillsForAbility.map((skill) => (
                                            <SkillDisplay key={SkillProficiencies[skill]} abilityScoreValue={abilityValue} name={SkillProficiencies[skill]} />
                                        ))}

                                    </div>
                                </div>

                                {abilityName !== 'charisma' && <hr/>}
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    );
}

export default Page;
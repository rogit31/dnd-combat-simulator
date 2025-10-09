import React from 'react';
import {Anvil, ArrowLeft} from "lucide-react";
import Link from "next/link";

import styles from './page.module.css';
import {AbilityScores, abilityToSkills, SkillProficiencies} from "@/types";
import SkillDisplay from "@/app/view-character/[id]/SkillDisplay";
import ActionDisplay from "@/app/view-character/[id]/ActionDisplay";
import ItemDisplay from "@/app/view-character/[id]/ItemDisplay";

interface CharacterProps {
    params: Promise<{ id: number }>;
}

//Dummy jsonData data:
const jsonData = {
    "characterId": 1,
    "name": "something",
    "HP": 20,
    "maxHP": 22,
    "race": "human",
    "background": "acolyte",
    "proficiencyBonus": 2,
    "speed": 30,
    "initiative": 4,
    "armorClass": 14,
    "actions": [
        {
            "name": "Dagger",
            "damage": {
                "n": 1,
                "d": 4,
                "flatBonus": 2,
                "type": "piercing"
            },
            "range": 5,
            "AOE": false,
            "type": "meleeAttack",
            "toHit": 5,
            "source": "equipment"

        },
        {
            "name": "Longbow",
            "damage": {
                "n": 1,
                "d": 6,
                "flatBonus": 2,
                "type": "piercing"
            },
            "range": 160,
            "AOE": false,
            "type": "rangedAttack",
            "toHit": 5,
            "source": "equipment"
        }
    ],
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
            "itemName": "Dagger",
            "itemType": "Weapon",
            "range": 5,
            "equipped": true,
            "damage": {
                "n": 1,
                "d": 4,
                "flatBonus": 2,
                "type": "piercing"
            },
            "itemWeight": 8
        },
        {
            "itemId": 2,
            "itemName": "LongBow",
            "itemType": "Weapon",
            "range": 160,
            "equipped": false,
            "damage": {
                "n": 1,
                "d": 6,
                "flatBonus": 2,
                "type": "piercing"
            },
            "itemWeight": 9
        }
    ],
    "proficiencies": [
        {"proficiencyId": 1, "proficiencyName": "Light Armor", "category": "Armor"},
        {"proficiencyId": 2, "proficiencyName": "Quarterstaff", "category": "Weapon"},
        {"proficiencyId": 3, "proficiencyName": "Dagger", "category": "Weapon"}
    ],
    "features": [
        {
            "id": 1,
            "name": "Big boy",
            "description": "You're a real big boy and you do 1d4 extra damage with any melee weapons."
        },
        {
            "id": 2,
            "name": "Death's Warden",
            "description": "Once per day, when you drop to zero hit points you instead stay at 1."

        }
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
                    <h2>{jsonData.name}</h2>

                    <div className={styles.meta}>
                        <span>{formatClasses(jsonData.classes)}</span>
                        <span>{jsonData.race}</span>
                        <span>{jsonData.background}</span>
                    </div>

                    <div className={styles.crucialStats}>
                        <div className={styles.crucialStatWrapper}>
                            <p>Proficiency</p>
                            {"+ " + jsonData.proficiencyBonus}
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Speed</p>
                            {jsonData.speed + " ft."}
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Hit Points</p>
                            <p>{jsonData.HP} / {jsonData.maxHP}</p>
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Armor Class</p>
                            {jsonData.armorClass}
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Initiative</p>
                            {jsonData.initiative}
                        </div>

                    </div>

                    <div className={styles.actionButtons}>
                        <button><Anvil/>Edit</button>
                    </div>

                </div>

                <div className={styles.bottomGrid}>

                    {/*left hand stats and saving throws block*/}
                    <div className={styles.statWrapper}>
                        {Object.entries(jsonData.stats).map(([abilityName, abilityValue]) => {
                            const skillsForAbility = abilityToSkills[abilityName as keyof AbilityScores] || [];

                            return (
                                <div key={abilityName}>
                                    <div className={styles.stat}>
                                        <div className={styles.statNumberWrapper}>
                                            <span className={styles.statNumber}>{abilityValue}</span>
                                            {abilityName.charAt(0).toUpperCase() + abilityName.slice(1)}
                                        </div>

                                        <div className={styles.skills}>

                                            <SkillDisplay abilityScoreValue={abilityValue} name={"Saving Throw"}/>

                                            {skillsForAbility.map((skill) => (
                                                <SkillDisplay key={SkillProficiencies[skill]}
                                                              abilityScoreValue={abilityValue}
                                                              name={SkillProficiencies[skill]}/>
                                            ))}

                                        </div>
                                    </div>

                                    {abilityName !== 'charisma' && <hr/>}
                                </div>
                            );
                        })}
                    </div>

                    {/*Actions*/}
                    <div className={styles.actions}>
                        <h2>Actions</h2>
                        {jsonData.actions.map((action) => (
                                <ActionDisplay key={action.name}
                                    action={action}
                                />
                        ))}
                    </div>

                    {/*/!*Spells*!/*/}
                    {/*<div className={styles.spells}>*/}

                    {/*</div>*/}

                    {/*Inventory*/}
                    <div className={styles.inventory}>
                        <h2>Inventory</h2>
                        {jsonData.inventory.map((item) => (
                            <div key={item.itemId}>
                                <ItemDisplay item={item}/>
                            </div>
                        ))}
                    </div>

                    {/*Features */}
                    <div className={styles.features}>
                        <h2>Features</h2>
                        {jsonData.features.map((feature) => (
                            <div key={feature.id}>
                                {feature.name}
                                {feature.description}
                            </div>
                        ))}
                    </div>


                </div>


            </div>

        </div>
    );
}

export default Page;
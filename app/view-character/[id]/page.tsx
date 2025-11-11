"use client"
import React, {useMemo, useState} from 'react';
import {Anvil, ArrowLeft} from "lucide-react";
import Link from "next/link";

import styles from './page.module.css';
import {AbilityScores, abilityToSkills, MockAction, MockCharacterType, SkillProficiencies} from "@/types";
import SkillDisplay from "@/app/view-character/[id]/SkillDisplay";
import ActionDisplay from "@/app/view-character/[id]/ActionDisplay";
import ItemDisplay from "@/app/view-character/[id]/ItemDisplay";
import {calculateAbilityModifier} from "@/util/util";
import {useQuery} from "@tanstack/react-query";
import {fetchMock} from "@/app/layout";
import characterCard from "@/app/components/characters/CharacterCard";
import {useParams} from "next/navigation";

interface CharacterProps {
    params: Promise<{ id: number }>;
}

//Dummy jsonData data:
// const jsonData : MockCharacterType = {
//     "characterId": 1,
//     "name": "something",
//     "HP": 20,
//     "maxHP": 22,
//     "race": "human",
//     "background": "acolyte",
//     "proficiencyBonus": 2,
//     "speed": 30,
//     "initiative": 4,
//     "armorClass": 14,
//     "actions": [
//         {
//             "name": "Punch",
//             "damage": {
//                 "n": 1,
//                 "d": 4,
//                 "flatBonus": 2,
//                 "type": "blunt"
//             },
//             "range": 5,
//             "AOE": false,
//             "type": "meleeAttack",
//             "toHit": 5,
//             "source": "equipment"
//
//         }
//     ],
//     "classes": [
//         {
//             "classId": 1,
//             "className": "Fighter",
//             "level": 3,
//             "spellCastingMod": null,
//             "hitDie": "d10",
//             "hitPointsAtFirstLevel": 10,
//             "hitPointScaling": "+6 per level",
//             "proficienciesId": 1,
//             "modifiersId": 1,
//             "startingEquipmentId": 1
//         }
//     ],
//     "stats": {
//         "strength": 16,
//         "dexterity": 12,
//         "constitution": 14,
//         "intelligence": 10,
//         "wisdom": 11,
//         "charisma": 13
//     },
//     "inventory": [
//         {
//             "itemId": 1,
//             "itemName": "Dagger",
//             "itemType": "Weapon",
//             "range": 5,
//             "equipped": true,
//             "damage": {
//                 "n": 1,
//                 "d": 4,
//                 "flatBonus": 2,
//                 "type": "piercing"
//             },
//             "primaryStat": "dexterity",
//             "AOE": false,
//             "itemWeight": 8
//         },
//         {
//             "itemId": 2,
//             "itemName": "LongBow",
//             "itemType": "Weapon",
//             "range": 160,
//             "equipped": false,
//             "damage": {
//                 "n": 1,
//                 "d": 6,
//                 "flatBonus": 2,
//                 "type": "piercing"
//             },
//             "primaryStat": "dexterity",
//             "AOE": false,
//             "itemWeight": 9
//         }
//     ],
//     "proficiencies": [
//         {"proficiencyId": 1, "proficiencyName": "Light Armor", "category": "Armor"},
//         {"proficiencyId": 2, "proficiencyName": "Quarterstaff", "category": "Weapon"},
//         {"proficiencyId": 3, "proficiencyName": "Dagger", "category": "Weapon"}
//     ],
//     "features": [
//         {
//             "id": 1,
//             "name": "Big boy",
//             "description": "You're a real big boy and you do 1d4 extra damage with any melee weapons."
//         },
//         {
//             "id": 2,
//             "name": "Death's Warden",
//             "description": "Once per day, when you drop to zero hit points you instead stay at 1."
//
//         }
//     ],
//     "modifiers": [
//         {
//             "modifierId": 1,
//             "origin": "Fighter",
//             "target": "strength",
//             "operation": "+",
//             "modCondition": "always",
//             "modPhase": "base"
//         },
//         {
//             "modifierId": 2,
//             "origin": "Wizard",
//             "target": "intelligence",
//             "operation": "+",
//             "modCondition": "always",
//             "modPhase": "base"
//         }
//     ]
// }

function formatClasses(classes: { className: string, level: number }[]) {
    let result = '';
    for (const cls of classes) {
        result += cls.className + " " + +cls.level
    }
    return result;
}



function Page({params} : CharacterProps) {

    // Here we would await the parameter passed to the url of the page
    // and find the corresponding character associated with that id
    // something like this:
    // const id = await params;
    // const character = characters.get(id);
    // and then use the data below to display the full character


    const { id: idParam } = useParams();
    const id = Array.isArray(idParam) ? Number(idParam[0]) : Number(idParam);

    const data = localStorage.getItem("data");
    let characterData: MockCharacterType | undefined;

    if (data) {
        const allData: MockCharacterType[] = JSON.parse(data);
        characterData = allData.find(c => c.characterId === id);
    }

    //TODO: Fix this horrendous stuff above and actually either implement proper fetching with ReactQuery and page params
    // or go full SPA and prop drill data down
    // either way clean up the code in this page so it's not full of red

    function toggleEquipped(itemId: number){

        setCharacterData(prev => ({
            ...prev,
                inventory: prev.inventory.map((item) =>
                item.itemId === itemId ?
                    {...item, equipped: !item.equipped} :
                    item
                )
        }))
    }

    const deriveActions = useMemo(() : MockAction[]=> {
        const weaponActions = characterData.inventory
            .filter(item => item.equipped)
            .map(item => ({
                name: item.itemName,
                damage: item.damage,
                range: item.range,
                actionType: item.itemType === "Weapon" ? "attack" : "item",
                type: item.range <= 10  ? "meleeAttack" : "rangedAttack",
                source: "equipment",
                AOE: item.AOE,
                toHit: calculateAbilityModifier(characterData.stats[item.primaryStat]) //add proficiency if proficient
            }));

        return [...weaponActions, ...characterData.actions]
    }, [characterData])

    return (
        <div className={styles.wrapper}>

            <h2>Character view</h2>
            <Link href="/">
                <ArrowLeft/>
            </Link>

            <div className={styles.characterSheet}>

                <div className={styles.metaWrapper}>
                    <h2>{characterData.name}</h2>

                    <div className={styles.meta}>
                        <span>{formatClasses(characterData.classes)}</span>
                        <span>{characterData.race}</span>
                        <span>{characterData.background}</span>
                    </div>

                    <div className={styles.crucialStats}>
                        <div className={styles.crucialStatWrapper}>
                            <p>Proficiency</p>
                            {"+ " + characterData.proficiencyBonus}
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Speed</p>
                            {characterData.speed + " ft."}
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Hit Points</p>
                            <p>{characterData.HP} / {characterData.maxHP}</p>
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Armor Class</p>
                            {characterData.armorClass}
                        </div>

                        <div className={styles.crucialStatWrapper}>
                            <p>Initiative</p>
                            {characterData.initiative}
                        </div>

                    </div>

                    <div className={styles.actionButtons}>
                        <button><Anvil/>Edit</button>
                    </div>

                </div>

                <div className={styles.bottomGrid}>

                    {/*left hand stats and saving throws block*/}
                    <div className={styles.statWrapper}>
                        {Object.entries(characterData.stats).map(([abilityName, abilityValue]) => {
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
                        {deriveActions.map((action) => (
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
                        {characterData.inventory.map((item) => (
                            <div key={item.itemId}>
                                <ItemDisplay item={item} toggleEquip={toggleEquipped}/>
                            </div>
                        ))}
                    </div>

                    {/*Features */}
                    <div className={styles.features}>
                        <h2>Features</h2>
                        {characterData.features.map((feature) => (
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
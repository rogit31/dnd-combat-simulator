'use client'

import "./globals.css";
import Header from "@/app/components/header/Header";
import React from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {MockCharacterType} from "@/types";

//TODO: Re-add metadata export here, had to remove for testing

const mockCharacters: MockCharacterType[] = [
    {
        characterId: 1,
        name: "Something",
        HP: 20,
        maxHP: 22,
        race: "human",
        background: "acolyte",
        proficiencyBonus: 2,
        speed: 30,
        gold: 20,
        initiative: 4,
        armorClass: 14,
        actions: [
            {
                name: "Punch",
                damage: { n: 1, d: 4, flatBonus: 2, type: "blunt" },
                range: 5,
                AOE: false,
                type: "meleeAttack",
                toHit: 5,
                source: "equipment",
            },
        ],
        classes: [
            {
                classId: 1,
                className: "Fighter",
                level: 3,
                spellCastingMod: null,
                hitDie: "d10",
                hitPointsAtFirstLevel: 10,
                hitPointScaling: "+6 per level",
                proficienciesId: 1,
                modifiersId: 1,
                startingEquipmentId: 1,
            },
        ],
        stats: { strength: 16, dexterity: 12, constitution: 14, intelligence: 10, wisdom: 11, charisma: 13 },
        inventory: [
            {
                itemId: 1,
                itemName: "Dagger",
                itemType: "Weapon",
                range: 5,
                equipped: true,
                damage: { n: 1, d: 4, flatBonus: 2, type: "piercing" },
                primaryStat: "dexterity",
                AOE: false,
                itemWeight: 8,
            },
            {
                itemId: 2,
                itemName: "LongBow",
                itemType: "Weapon",
                range: 160,
                equipped: false,
                damage: { n: 1, d: 6, flatBonus: 2, type: "piercing" },
                primaryStat: "dexterity",
                AOE: false,
                itemWeight: 9,
            },
        ],
        proficiencies: [
            { proficiencyId: 1, proficiencyName: "Light Armor", category: "Armor" },
            { proficiencyId: 2, proficiencyName: "Quarterstaff", category: "Weapon" },
            { proficiencyId: 3, proficiencyName: "Dagger", category: "Weapon" },
        ],
        features: [
            { id: 1, name: "Big boy", description: "You're a real big boy and you do 1d4 extra damage with any melee weapons." },
            { id: 2, name: "Death's Warden", description: "Once per day, when you drop to zero hit points you instead stay at 1." },
        ],
        modifiers: [
            { modifierId: 1, origin: "Fighter", target: "strength", operation: "+", modCondition: "always", modPhase: "base" },
            { modifierId: 2, origin: "Wizard", target: "intelligence", operation: "+", modCondition: "always", modPhase: "base" },
        ],
    },
    {
        characterId: 2,
        name: "Hemlock",
        HP: 18,
        maxHP: 25,
        race: "elf",
        background: "sage",
        proficiencyBonus: 3,
        speed: 35,
        gold: 20,
        initiative: 5,
        armorClass: 15,
        actions: [
            {
                name: "Magic Missile",
                damage: { n: 1, d: 6, flatBonus: 0, type: "magic" },
                range: 120,
                AOE: false,
                type: "rangedAttack",
                toHit: 7,
                source: "spell",
            },
        ],
        classes: [
            {
                classId: 2,
                className: "Wizard",
                level: 5,
                spellCastingMod: "intelligence",
                hitDie: "d6",
                hitPointsAtFirstLevel: 6,
                hitPointScaling: "+4 per level",
                proficienciesId: 2,
                modifiersId: 2,
                startingEquipmentId: 2,
            },
        ],
        stats: { strength: 10, dexterity: 14, constitution: 12, intelligence: 18, wisdom: 13, charisma: 11 },
        inventory: [
            {
                itemId: 3,
                itemName: "Staff",
                itemType: "Weapon",
                range: 5,
                equipped: true,
                damage: { n: 1, d: 6, flatBonus: 1, type: "blunt" },
                primaryStat: "intelligence",
                AOE: false,
                itemWeight: 12,
            },
            {
                itemId: 4,
                itemName: "Spellbook",
                itemType: "Misc",
                range: 0,
                equipped: false,
                damage: { n: 0, d: 0, flatBonus: 0, type: "none" },
                primaryStat: "intelligence",
                AOE: false,
                itemWeight: 5,
            },
        ],
        proficiencies: [
            { proficiencyId: 4, proficiencyName: "Daggers", category: "Weapon" },
            { proficiencyId: 5, proficiencyName: "Light Armor", category: "Armor" },
        ],
        features: [
            { id: 3, name: "Arcane Recovery", description: "Regain some spell slots once per day after a short rest." },
        ],
        modifiers: [
            { modifierId: 3, origin: "Wizard", target: "intelligence", operation: "+", modCondition: "always", modPhase: "base" },
        ],
    },
    {
        characterId: 3,
        name: "Lyra",
        HP: 22,
        gold: 20,
        maxHP: 22,
        race: "tiefling",
        background: "criminal",
        proficiencyBonus: 2,
        avatar: "sampleAvatar.png",
        speed: 30,
        initiative: 3,
        armorClass: 13,
        actions: [
            {
                name: "Sneak Attack",
                damage: { n: 2, d: 6, flatBonus: 0, type: "piercing" },
                range: 5,
                AOE: false,
                type: "meleeAttack",
                toHit: 6,
                source: "classFeature",
            },
        ],
        classes: [
            {
                classId: 3,
                className: "Rogue",
                level: 4,
                spellCastingMod: null,
                hitDie: "d8",
                hitPointsAtFirstLevel: 8,
                hitPointScaling: "+5 per level",
                proficienciesId: 3,
                modifiersId: 3,
                startingEquipmentId: 3,
            },
        ],
        stats: { strength: 11, dexterity: 18, constitution: 12, intelligence: 14, wisdom: 10, charisma: 16 },
        inventory: [
            {
                itemId: 5,
                itemName: "Daggers",
                itemType: "Weapon",
                range: 5,
                equipped: true,
                damage: { n: 1, d: 4, flatBonus: 1, type: "piercing" },
                primaryStat: "dexterity",
                AOE: false,
                itemWeight: 2,
            },
            {
                itemId: 6,
                itemName: "Cloak of Shadows",
                itemType: "Armor",
                range: 0,
                equipped: true,
                damage: { n: 0, d: 0, flatBonus: 0, type: "none" },
                primaryStat: "dexterity",
                AOE: false,
                itemWeight: 3,
            },
        ],
        proficiencies: [
            { proficiencyId: 6, proficiencyName: "Light Armor", category: "Armor" },
            { proficiencyId: 7, proficiencyName: "Daggers", category: "Weapon" },
        ],
        features: [
            { id: 4, name: "Cunning Action", description: "Can take a bonus action to Dash, Disengage, or Hide." },
        ],
        modifiers: [
            { modifierId: 4, origin: "Rogue", target: "dexterity", operation: "+", modCondition: "always", modPhase: "base" },
        ],
    },
    {
        characterId: 4,
        name: "Garruk",
        HP: 30,
        maxHP: 30,
        gold: 20,
        race: "orc",
        avatar: "sampleAvatar.png",
        background: "soldier",
        proficiencyBonus: 3,
        speed: 30,
        initiative: 2,
        armorClass: 17,
        actions: [
            {
                name: "Great Axe Swing",
                damage: { n: 1, d: 12, flatBonus: 3, type: "slashing" },
                range: 5,
                AOE: false,
                type: "meleeAttack",
                toHit: 7,
                source: "equipment",
            },
        ],
        classes: [
            {
                classId: 4,
                className: "Barbarian",
                level: 5,
                spellCastingMod: null,
                hitDie: "d12",
                hitPointsAtFirstLevel: 12,
                hitPointScaling: "+7 per level",
                proficienciesId: 4,
                modifiersId: 4,
                startingEquipmentId: 4,
            },
        ],
        stats: { strength: 18, dexterity: 12, constitution: 16, intelligence: 9, wisdom: 10, charisma: 11 },
        inventory: [
            {
                itemId: 7,
                itemName: "Greatsword",
                itemType: "Weapon",
                range: 5,
                equipped: true,
                damage: { n: 2, d: 6, flatBonus: 4, type: "slashing" },
                primaryStat: "strength",
                AOE: false,
                itemWeight: 12,
            },
            {
                itemId: 8,
                itemName: "Shield",
                itemType: "Armor",
                range: 0,
                equipped: true,
                damage: { n: 0, d: 0, flatBonus: 0, type: "none" },
                primaryStat: "strength",
                AOE: false,
                itemWeight: 8,
            },
        ],
        proficiencies: [
            { proficiencyId: 8, proficiencyName: "Heavy Armor", category: "Armor" },
            { proficiencyId: 9, proficiencyName: "Greatswords", category: "Weapon" },
        ],
        features: [
            { id: 5, name: "Rage", description: "Can enter rage to gain bonus damage and resistance to physical damage." },
        ],
        modifiers: [
            { modifierId: 5, origin: "Barbarian", target: "strength", operation: "+", modCondition: "always", modPhase: "base" },
        ],
    },
];



/** Fake fetch function that just returns some mock data after a 300 ms. delay. To be replaced with our actual db call. **/
export async function fetchMock(): Promise<MockCharacterType[]> {
    console.log("Ran!");

    if (typeof window === "undefined") return []; // guard for SSR

    await new Promise((resolve) => setTimeout(resolve, 300)); // simulate network delay

    let data = localStorage.getItem("data");

    if (!data) {
        localStorage.setItem("data", JSON.stringify(mockCharacters));
        console.log("Mock data written!");
        data = localStorage.getItem("data");
    }

    try {
        const parsed = JSON.parse(data!);
        console.log("Local data parsed:", parsed);
        return parsed;
    } catch (err) {
        console.error("Failed to parse localStorage data:", err);
        return [];
    }
}

export async function writeMock(data: MockCharacterType){
    const jsonData = localStorage.getItem("data");

    if(!jsonData){
        console.error("Write mock was called but a local storage item `data` was not found.");
        return data;
    }
    const storedData : MockCharacterType[] = JSON.parse(jsonData);
    const newData = storedData.map(c  => c.characterId === data.characterId ? data : c);
    localStorage.setItem("data", JSON.stringify(newData));
    return data;
}

/** Mock delete function that operates on our mock data. Can optionally return a boolean or more structured data type to signal success or failure. **/
export function deleteMock(id: number) : Promise<boolean> {
    //don't worry about it it's just a stub!
    //TODO: Replace stub with implementation
    return new Promise((resolve) => true);
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] =  React.useState(() => new QueryClient());


    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <body>
                    <Header/>
                    {children}
                <div id={"portal-here"}></div>
                </body>
            </html>
        </QueryClientProvider>
    );
}

'use client'

import "./globals.css";
import Header from "@/app/components/header/Header";
import React from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {CharacterPreview} from "@/types";

//TODO: Re-add metadata export here, had to remove for testing

let mockData : CharacterPreview[] = [
    {
        name: "Something",
        id: 1,
        HP: 43,
        AC: 14,
        gold: 241,
        avatar: 'sampleAvatar.png',
        class: {name: "Barbarian", level: 8},
        inventory: [
            {name: "Greatsword", weight: 12, rarity: "uncommon"},
            {name: "Healing Potion", weight: 1, rarity: "common"},
            {name: "Bear Pelt Cloak", weight: 4, rarity: "rare"}
        ]
    },
    {
        name: "Hemlock",
        id: 2,
        HP: 47,
        AC: 16,
        gold: 214,
        class: {name: "Rogue", level: 8},
        inventory: [
            {name: "Daggers", weight: 2, rarity: "common"},
            {name: "Lockpicks", weight: 0.5, rarity: "uncommon"},
            {name: "Cloak of Shadows", weight: 3, rarity: "rare"}
        ]
    },
    {
        name: "Lyra",
        id: 3,
        HP: 35,
        AC: 13,
        gold: 318,
        class: {name: "Wizard", level: 7},
        inventory: [
            {name: "Spellbook", weight: 5, rarity: "uncommon"},
            {name: "Wand of Sparks", weight: 1, rarity: "rare"},
            {name: "Traveler’s Satchel", weight: 2, rarity: "common"}
        ]
    },
    {
        name: "Garruk",
        id: 4,
        HP: 60,
        AC: 17,
        gold: 112,
        class: {name: "Paladin", level: 9},
        inventory: [
            {name: "Longsword", weight: 6, rarity: "common"},
            {name: "Shield of Valor", weight: 8, rarity: "rare"},
            {name: "Holy Symbol", weight: 1, rarity: "uncommon"}
        ]
    }
];

/** Fake fetch function that just returns some mock data after a 300 ms. delay. To be replaced with our actual db call. **/
export function fetchMock() : Promise<CharacterPreview[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...mockData]), 300);
    })
}

/** Mock delete function that operates on our mock data. Can optionally return a boolean or more structured data type to signal success or failure. **/
export function deleteMock(id: number) : Promise<boolean> {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockData = mockData.filter((c) => c.id !== id);
        }, 300);
        resolve(true);
    });
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
                </body>
            </html>
        </QueryClientProvider>
    );
}

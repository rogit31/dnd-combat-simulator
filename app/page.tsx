'use client';

//TODO: Manager global context for the db and for character data.
//TODO: Consider zustand for global context management

import Header from "@/app/components/Header";
import {useState, useEffect, useRef} from 'react';
import styles from "./page.module.css";
import {WebDB} from "@/src/database/web";
import {CharacterRepository} from "@/src/persistence/CharacterRepository";
import {Character} from "@/src/models/character/Character";
import {manualTests} from "@/tests/manutalTests";
import {HandCoins, HeartPulse, Shield, Pencil, Trash} from "lucide-react";

const mockData = [
    {
        name: "Something",
        id: 1,
        HP: 43,
        AC: 14,
        gold: 241,
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


export default function Home() {
    const characters = mockData;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const db = useRef<null | WebDB>(null);

    //Specifically to enable manual tests here without worrying about extending the window type.
    //it's actually just not working now for some reason, will just disable for now.
    /* eslint-disable */
    // (window as any).manualTests = manualTests;
    /* eslint-enable */

    async function exportSave() {
        if (!db.current) {
            console.error("DB not initialized!");
            return;
        }
        const data = await db.current.export();
        if (data === undefined) {
            console.error("Data not returned!");
            return;
        }
        const blob = new Blob([data], {type: "application/octet-stream"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.download = "save.db";
        a.href = url;
        a.click();

        URL.revokeObjectURL(url);
    }

    async function importSave(event: React.ChangeEvent<HTMLInputElement>) {
        if (!db.current) {
            console.error("DB not initialized!");
            return;
        }
        if (!event.target.files || event.target.files.length < 1) {
            console.error("No files present!");
            return;
        }

        const file = event.target.files[0];
        await db.current.load(file);
        // const result = await db.current.query("SELECT * FROM characters");
        //TODO: reuse the map character function here
        // setCharacters(result);
    }

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             db.current = await WebDB.getInstance();
    //             const repo = new CharacterRepository(db.current);
    //             const result = await repo.getData();
    //             // Update state with results
    //             setCharacters(result);
    //             setLoading(false);
    //
    //         } catch (err) {
    //             console.error('Database initialization failed:', err);
    //             setError(err instanceof Error ? err.message : 'Unknown error');
    //             setLoading(false);
    //         }
    //     }
    //
    //     fetchData();
    // }, []); // Empty dependency array means this runs once on mount

    if (loading) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <h1>D&D Battle simulator</h1>
                    <p>Loading characters...</p>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <h1>D&D Battle simulator</h1>
                    <p>Error: {error}</p>
                </main>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Header exportSave={exportSave} importSave={importSave}/>
                {characters.length === 0 ? (
                    <p>No characters found</p>
                ) : (
                    <div>
                        <h2>Characters:</h2>
                        <div className={styles.charactersWrapper}>
                            {characters.map((character) => (
                                <div key={character.id} className={styles.character}>
                                    <a className={styles.characterTopWrapper} href={`/view-character/${character.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                             viewBox="0 0 34 34"
                                             fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="lucide lucide-square-user-round-icon lucide-square-user-round">
                                            <path d="M18 21a6 6 0 0 0-12 0"/>
                                            <circle cx="12" cy="11" r="4"/>
                                            <rect width="18" height="18" x="3" y="3" rx="2"/>
                                        </svg>

                                        <div className={styles.characterMetaWrapper}>

                                            <h2>{character.name}</h2>
                                            <p>{character.class.name} - Level {character.class.level}</p>

                                            <div>
                                                <span><HeartPulse/>{character.HP}</span>
                                                <span><Shield/>{character.AC}</span>
                                                <span><HandCoins/>{character.gold}</span>
                                            </div>

                                            <nav className={styles.characterButtonsWrapper}>
                                                <button>
                                                    <Pencil/>
                                                </button>
                                                <button>
                                                    <Trash/>
                                                </button>
                                            </nav>

                                        </div>

                                    </a>
                                </div>
                            ))}
                        </div>


                    </div>
                )}
            </main>
        </div>
    );
}
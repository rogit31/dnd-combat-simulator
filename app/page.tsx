'use client';

//TODO: Manager global context for the db and for character data.
//TODO: Consider zustand for global context management

import {useState, useEffect, useRef} from 'react';
import styles from "./page.module.css";
import {WebDB} from "@/src/database/web";
import {CharacterRepository} from "@/src/persistence/CharacterRepository";
import {Character} from "@/src/models/character/Character";
import {manualTests} from "@/tests/manutalTests";

export default function Home() {
    const [characters, setCharacters] = useState<Map<string, Character>>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const db = useRef<null | WebDB>(null);

    //Specifically to enable manual tests here without worrying about extending the window type.
    /* eslint-disable */
    (window as any).manualTests = manualTests;
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

    useEffect(() => {
        async function fetchData() {
            try {
                db.current = await WebDB.getInstance();
                const repo = new CharacterRepository(db.current);
                const result = await repo.getData();
                // Update state with results
                setCharacters(result);
                setLoading(false);

            } catch (err) {
                console.error('Database initialization failed:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                setLoading(false);
            }
        }

        fetchData();
    }, []); // Empty dependency array means this runs once on mount

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
                <h1>D&D Battle simulator</h1>
                {characters!.size === 0 ? (
                    <p>No characters found</p>
                ) : (
                    <div>
                        <h2>Characters:</h2>
                        <div className={styles.charactersWrapper}>
                            {characters!.values().map((character) => (
                                <div key={character.id} className={styles.character}>
                                    <h3>{character.name}</h3>
                                    <p>HP: {character.HP}</p>
                                    <p>AC: {character.AC}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => exportSave()}>Save sqlite file</button>
                        <input onChange={(e) => importSave(e)} id={'load-save'} type="file"/>
                    </div>
                )}
            </main>
        </div>
    );
}
'use client';

//TODO: Manager global context for the db and for character data.
//TODO: Consider zustand for global context management

import React, { useRef } from 'react';
import styles from "./page.module.css";
import {WebDB} from "@/src/database/web";
import CharacterCard from "@/app/components/characters/CharacterCard";
import {HardDriveDownload, HardDriveUpload} from "lucide-react";
import {useQuery} from "@tanstack/react-query";
import {fetchMock} from "@/app/layout";



export default function Home() {

    const { data, isLoading } = useQuery({
        queryKey: ["characters"],
        queryFn: fetchMock,
    });

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

    if (isLoading || typeof data === 'undefined') {
        return (
            <div className={styles.page}>
                <main className={styles.main}>
                    <h1>D&D Battle simulator</h1>
                    <p>Loading characters...</p>
                </main>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <main>
                {data.length === 0 ? (
                    <p>No characters found</p>
                ) : (
                    <div>
                        <h2>Characters:</h2>
                        <div className={styles.charactersWrapper}>
                            {data.map((character) => (
                                <CharacterCard character={character} key={character.id}/>
                            ))}
                        </div>
                        <nav className={styles.saveActions}>
                            <button onClick={() => exportSave()}><HardDriveDownload/>Export</button>
                            <input
                                type="file"
                                id="load-save"
                                onChange={(e) => importSave(e)}
                                style={{display: "none"}}
                            />

                            <label htmlFor="load-save" className="btn">
                                <HardDriveUpload/> Import
                            </label>
                        </nav>

                    </div>
                )}
            </main>
        </div>
    );
}
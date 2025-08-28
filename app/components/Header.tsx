import React from 'react';
import styles from "@/app/page.module.css";
import {HardDriveDownload, Import} from "lucide-react";

interface HeaderProps{
    exportSave: () => void;
    importSave: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

function Header({exportSave,  importSave} : HeaderProps) {
    return (
        <div className={styles.header}>
            <h1>BETTERD&D</h1>

            <nav className={styles.saveActions}>
                <button onClick={() => exportSave()}><HardDriveDownload/>Export</button>
                <input
                    type="file"
                    id="load-save"
                    onChange={(e) => importSave(e)}
                    style={{display: "none"}}
                />

                <label htmlFor="load-save" className="btn">
                    <Import/> Import
                </label>
            </nav>
        </div>
    );
}

export default Header;
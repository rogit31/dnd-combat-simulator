import React from 'react';
import styles from "./Header.module.css";
import MenuNav from "@/app/components/menuNav/MenuNav";

function Header() {
    return (
        <div className={styles.header}>
            <h1>BETTERD&D</h1>
            <MenuNav/>
        </div>
    );
}

export default Header;
'use client'

import React from 'react';
import {UserCircle, Anvil, Database, Swords, Settings} from "lucide-react";
import Link from "next/link";
import styles from './MenuNav.module.css';
import {usePathname} from "next/navigation";
import {clsx} from "clsx";

function MenuNav() {
    const iconSize = 28;
    const path = usePathname();

    return (
        <nav className={styles.outterWrapper}>
            <ul className={styles.navWrapper}>
                <li>
                    <Link href={'/'}>
                        <UserCircle className={clsx(path == '/' && styles.active)} size={iconSize}/>
                    </Link>
                </li>
                <li>
                    <Link href={'/forge'}>
                        <Anvil className={clsx(path == '/forge' && styles.active)} size={iconSize}/>
                    </Link>
                </li>
                <li>
                    <Link href={'/combat'}>
                        <Swords className={clsx(path == '/combat' && styles.active)} size={iconSize}/>
                    </Link>
                </li>
                <li>
                    <Link href={'/database'}>
                        <Database className={clsx(path == '/database' && styles.active)} size={iconSize}/>
                    </Link>
                </li>
                <li>
                    <Link href={'/settings'}>
                        <Settings className={clsx(path == '/settings' && styles.active)} size={iconSize}/>
                    </Link>
                </li>
            </ul>

        </nav>
    );
}

export default MenuNav;
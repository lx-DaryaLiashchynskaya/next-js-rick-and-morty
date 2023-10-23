'use client'
import styles from './Header.module.css'
import Link from "next/link";

export const Header = () => {
    return <header className={styles.headerContainer}>
        <Link href={'/'}>Characters</Link>
        <Link href={"/about"}>About</Link>
    </header>
}
'use client'
import styles from './Header.module.css'
import Link from "next/link";
import {INavigationLink} from "@/types/navigationLinks.types";

export const Header = ({navigationLinks}: { navigationLinks: INavigationLink[] }) => {
    return <header className={styles.headerContainer}>
        <div className={styles.linksContainer}>
            {navigationLinks.map((link) => (
                <Link key={link.title} className={styles.navLink} href={link.link}>{link.title}</Link>)
            )}
        </div>
    </header>
}
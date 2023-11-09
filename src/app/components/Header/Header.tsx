'use client'
import styles from './Header.module.css'
import Link from "next/link";
import {INavigationLink} from "@/types/navigationLinks.types";
import {useSession} from "next-auth/react";

export const Header = ({navigationLinks}: { navigationLinks: INavigationLink[] }) => {
    const session = useSession()

    return <header className={styles.headerContainer}>
        <div className={styles.linksContainer}>
            {navigationLinks.map((link) => (
                <Link key={link.title} className={styles.navLink} href={link.link}>{link.title}</Link>)
            )}
        </div>
        {session.status === 'authenticated' ?
            <div className={styles.authContainer}>
                <p>Hello, <b>{session.data.user?.name}</b></p>
                <Link href={'/api/auth/signout'}>
                    <button className={styles.authButton}>Sign Out</button>
                </Link>
            </div> :
            <Link href={'/api/auth/signin'}>
                <button className={styles.authButton}>Sign In</button>
            </Link>
        }
    </header>
}
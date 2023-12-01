'use client'
import styles from './Header.module.css'
import Link from "next/link";
import {INavigationLink} from "@/types/navigationLinks.types";
import {useSession} from "next-auth/react";
import {useParams, useRouter, useSearchParams, useSelectedLayoutSegments} from "next/navigation";
import React from "react";
import {joinSearchParamsString} from "@/lib/url.utils";

export const Header = ({navigationLinks}: { navigationLinks: INavigationLink[] }) => {
    const session = useSession()
    const locale = useParams()?.locale;
    const router = useRouter();
    const urlSegments = useSelectedLayoutSegments();
    const searchParams = useSearchParams()

    const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;

        router.push(`/${newLocale}/${urlSegments.join('/')}?${joinSearchParamsString(searchParams)}`);
    }

    return <header className={styles.headerContainer}>
        <div className={styles.linksContainer}>
            {navigationLinks.map((link) => (
                <Link key={link.title} className={styles.navLink}
                      href={`/${locale}${link.link}`}>{link.title}</Link>)
            )}
        </div>
        <select className={styles.select} onChange={handleLocaleChange} value={locale}>
            <option value="en">English</option>
            <option value="fr">French</option>
        </select>
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
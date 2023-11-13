import React, {ReactNode} from 'react';
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {INavigationLink} from "@/types/navigationLinks.types";

const NAVIGATION_LINKS: INavigationLink[] = [
    {title: "Characters", link: '/'},
    {title: "Locations", link: '/locations'}
]
const Layout = ({children}: { children: ReactNode }) => {
    return (
        <>
            <Header navigationLinks={NAVIGATION_LINKS}/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
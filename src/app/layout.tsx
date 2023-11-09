import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Footer} from "@/app/components/Footer/Footer";
import {Header} from "@/app/components/Header/Header";
import React from "react";
import {INavigationLink} from "@/types/navigationLinks.types";
import NextAuthProvider from "@/app/components/NextAuthProvider/NextAuthProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Rick and Morty',
  description: 'Generated by create next app',
}

const NAVIGATION_LINKS: INavigationLink[] = [
    {title: "Characters", link: '/'},
    {title: "Locations", link: '/locations'}
]

interface LayoutProps {
    children: React.ReactNode,
    modal: React.ReactNode,
}

export default async function RootLayout({
                                             children, modal
                                         }: LayoutProps) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
          <Header navigationLinks={NAVIGATION_LINKS}/>
          <main>
              {children}
          </main>
          {modal}
          <Footer/>
      </NextAuthProvider>
      </body>
    </html>
  )
}

import styles from './page.module.css'
import {getValidCharactersData} from "@/lib/character.utils";
import {ICharacter} from "@/types/character.types";
import React from "react";
import SearchWrapper from "@/components/SearchWrapper/SearchWrapper";
import PagesNavigation from "@/components/PagesNavigation/PagesNavigation";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";

interface ICharactersInfo {
    characters: ICharacter[],
    pagesAmount: number
}

async function getCharactersInfo(searchPage = '1'): Promise<ICharactersInfo> {
    const res = await fetch('http://localhost:3000/api/characters?page=' + searchPage)
    const characters = await res.json()

    return {
        characters: getValidCharactersData(characters.charactersData.results),
        pagesAmount: characters.charactersData.info.pages
    }
}

export default async function Characters({searchParams}: { searchParams: { page: string } }) {
    const {characters, pagesAmount} = await getCharactersInfo(searchParams.page)

    return (
        <div className={styles.container}>
            <SearchWrapper initialData={characters} card={<CharacterCard/>}/>
            <PagesNavigation pathname={'/'} pagesAmount={pagesAmount}/>
        </div>
    )
}

import styles from './page.module.css'
import {getValidCharactersData} from "@/lib/character.utils";
import {ICharacter} from "@/types/character.types";
import React from "react";
import SearchWrapper from "@/components/SearchWrapper/SearchWrapper";
import {CharacterCard} from "@/components/CharacterCard/CharacterCard";
import PagesNavigation from "@/components/PagesNavigation/PagesNavigation";

interface ICharactersInfo {
    characters: ICharacter[],
    pagesAmount: number
}

async function getCharactersInfo(searchPage = '1', searchName = ''): Promise<ICharactersInfo> {
    const res = await fetch(`http://localhost:3000/api/characters?page=${searchPage}&name=${searchName}`, {cache: 'no-store'})
    const characters = await res.json()

    return {
        characters: getValidCharactersData(characters.charactersData.results),
        pagesAmount: characters.charactersData.info.pages
    }
}

export default async function Characters({searchParams, params}: {
    params: { locale: string },
    searchParams: { page: string, name: string }
}) {
    const {characters, pagesAmount} = await getCharactersInfo(searchParams.page, searchParams.name)

    return (
        <div className={styles.container}>
            <SearchWrapper data={characters || []} card={<CharacterCard/>}/>
            <PagesNavigation pathname={'/'} pagesAmount={pagesAmount}/>
        </div>
    )
}

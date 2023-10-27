import styles from './page.module.css'
import {getValidCharactersData} from "@/lib/character.utils";
import SearchWrapper from "@/app/components/SearchWrapper/SearchWrapper";
import {CharacterCard} from "@/app/components/CharacterCard/CharacterCard";
import {ICharacter} from "@/types/character.types";
import React from "react";
import PagesNavigation from "@/app/components/PagesNavigation/PagesNavigation";

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

export default async function Characters({searchParams}: { searchParams: { [key: string]: string | number } }) {
    const {characters, pagesAmount} = await getCharactersInfo(searchParams.page?.toString())

  return (
      <div className={styles.container}>
          <SearchWrapper initialData={characters} card={<CharacterCard/>}/>
          <PagesNavigation pagesAmount={pagesAmount}/>
      </div>
  )
}

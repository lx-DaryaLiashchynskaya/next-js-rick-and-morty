import styles from './page.module.css'
import {getValidCharactersData} from "@/lib/character.utils";
import SearchWrapper from "@/app/components/SearchWrapper/SearchWrapper";
import {CharacterCard} from "@/app/components/CharacterCard/CharacterCard";

async function getCharacters() {
    const res = await fetch('http://localhost:3000/api/characters')
    const characters = await res.json()

    return getValidCharactersData(characters.charactersData.results)
}

export default async function Characters() {
    const characters = await getCharacters()

  return (
      <div className={styles.container}>
          <SearchWrapper initialData={characters} card={<CharacterCard/>}/>
      </div>
  )
}

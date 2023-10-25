import styles from './page.module.css'
import CharactersDataContainer from "@/app/components/CharactersDataContainer/CharactersDataContainer";
import {getValidCharactersData} from "@/lib/character.utils";

async function getCharacters() {
    const res = await fetch('http://localhost:3000/api/characters')
    const characters = await res.json()

    return getValidCharactersData(characters.charactersData.results)
}

export default async function Characters() {
    const characters = await getCharacters()

  return (
      <div className={styles.container}>
          <CharactersDataContainer initialData={characters}/>
      </div>
  )
}

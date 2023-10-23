import styles from './page.module.css'
import {ICharacter, IServerCharacter} from "@/types/character.types";
import {CharacterCard} from "@/app/components/CharacterCard/CharacterCard";

async function getCharacters() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await res.json()
    return (characters.results as IServerCharacter[]).map(
        (character) => (
            {
                id: character.id,
                name: character.name,
                gender: character.gender,
                status: character.status,
                species: character.species,
                imgSrc: character.image
            }
        )) as ICharacter[]
}

export default async function Characters() {
    const characters = await getCharacters()

  return (
      <div className={styles.charactersContainer}>
          {characters.map(({id, name, gender, imgSrc, species, status}) => {
              return <CharacterCard
                  id={id}
                  key={name}
                  imgSrc={imgSrc}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
              />
          })}
      </div>
  )
}

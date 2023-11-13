import styles from './page.module.css'
import {ICharacter} from "@/types/character.types";
import Image from "next/image";
import {getValidCharacterData} from "@/lib/character.utils";
import Link from "next/link";
import GoBackButton from "@/components/GoBackButton/GoBackButton";


export const dynamicParams = false;

export async function generateStaticParams() {
    return [{id: '1'}, {id: '2'}]
}

async function getCharacter(characterId: number): Promise<ICharacter> {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    const character = await res.json()

    return getValidCharacterData(character)
}

export default async function Character({params}: { params: { id: number } }) {
    const character = await getCharacter(params.id)

    return (
        <div>
            <div className={styles.characterContainer}>
                <Image className={styles.characterImage} src={character.imgSrc} alt={''} width={350} height={350}/>
                <h2>{character.name}</h2>
                <p>Status: <b>{character.status}</b></p>
                <p>Species: <b>{character.species}</b></p>
                <p>Gender: <b>{character.gender}</b></p>
                <p>Location:
                    <b><Link className={styles.locationLink} href={'/location/[id]'}
                             as={`/location/${character.location.id}`}>
                        {character.location.name}
                    </Link></b>
                </p>
            </div>
            <GoBackButton/>
        </div>
    )
}

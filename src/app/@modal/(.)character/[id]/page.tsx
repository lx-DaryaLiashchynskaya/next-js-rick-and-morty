import styles from './page.module.css'
import {ICharacter} from "@/types/character.types";
import Image from "next/image";
import {getValidCharacterData} from "@/lib/character.utils";
import {ModalComponent} from "@/app/components/Modal/Modal";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const dynamicParams = false

export async function generateStaticParams() {
    return Array.from({length: 20}, (_, index) => ({id: (index + 1).toString()}))
}

async function getCharacter(characterId: number): Promise<ICharacter> {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    const character = await res.json()

    return getValidCharacterData(character)
}

export default async function ModalCharacter({params}: { params: { id: number } }) {
    const character = await getCharacter(params.id)
    const session = await getServerSession(authOptions);

    return (
        <ModalComponent>
            {session && session.user ?
                (<>
                    <Image className={styles.characterImage} src={character.imgSrc} alt={''} width={350} height={350}/>
                    <h2>{character.name}</h2>
                    <p>Status: <b>{character.status}</b></p>
                    <p>Species: <b>{character.species}</b></p>
                    <p>Gender: <b>{character.gender}</b></p>
                    <p>Location:
                        <b>{character.location.name}</b>
                    </p>
                </>) :
                <p>You cannot read additional info until your do not have register on site</p>}
        </ModalComponent>
    )
}

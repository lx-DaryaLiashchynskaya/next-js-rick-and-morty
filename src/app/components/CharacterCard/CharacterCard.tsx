'use client'
import styles from './CharacterCard.module.css'
import {ICharacter} from "@/types/character.types";
import Image from 'next/image'
import Link from "next/link";

export const CharacterCard = ({cardData}: { cardData?: ICharacter }) => {
    return cardData && <div className={styles.characterCard}>
        <Image className={styles.characterImage} src={cardData.imgSrc} alt={''} width={150} height={150}/>
        <h4>{cardData.name}</h4>
        <p>Status: <b>{cardData.status}</b></p>
        <p>Species: <b>{cardData.species}</b></p>
        <p>Gender: <b>{cardData.gender}</b></p>
        <button className={styles.showMoreButton}>
            <Link href={`/character/[id]`} as={`/character/${cardData.id}`}>Show More</Link>
        </button>
    </div>
}
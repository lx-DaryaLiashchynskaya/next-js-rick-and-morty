'use client'
import styles from './CharacterCard.module.css'
import {ICharacter} from "@/types/character.types";
import Image from 'next/image'
import Link from "next/link";

export const CharacterCard = ({id, name, status, species, imgSrc, gender}: ICharacter) => {
    return <div className={styles.characterCard}>
        <Image className={styles.characterImage} src={imgSrc} alt={''} width={150} height={150}/>
        <h4>{name}</h4>
        <p>Status: <b>{status}</b></p>
        <p>Species: <b>{species}</b></p>
        <p>Gender: <b>{gender}</b></p>
        <button className={styles.showMoreButton}>
            <Link href={`/character/[id]`} as={`/character/${id}`}>Show More</Link>
        </button>
    </div>
}
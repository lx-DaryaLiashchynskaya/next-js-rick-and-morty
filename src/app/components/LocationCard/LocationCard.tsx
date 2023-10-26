'use client'
import styles from './LocationCard.module.css'
import Link from "next/link";
import {ILocation} from "@/types/location.types";

export const LocationCard = ({cardData}: { cardData?: ILocation }) => {
    return cardData && <div className={styles.locationCard}>
        <h4>{cardData.name}</h4>
        <p>Type: <b>{cardData.type}</b></p>
        <p>Dimension: <b>{cardData.dimension}</b></p>
        <button className={styles.showMoreButton}>
            <Link href={`/location/[id]`} as={`/location/${cardData.id}`}>Show More</Link>
        </button>
    </div>
}
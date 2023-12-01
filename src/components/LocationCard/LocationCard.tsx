'use client'
import styles from './LocationCard.module.css'
import Link from "next/link";
import {ILocation} from "@/types/location.types";
import {useParams} from "next/navigation";

export const LocationCard = ({cardData}: { cardData?: ILocation }) => {
    const locale = useParams()?.locale;

    return cardData && <div className={styles.locationCard}>
        <h4>{cardData.name}</h4>
        <p>Type: <b>{cardData.type}</b></p>
        <p>Dimension: <b>{cardData.dimension}</b></p>
        <Link style={{width: '100%'}} href={`/${locale}/location/[id]`} as={`/${locale}/location/${cardData.id}`}>
        <button className={styles.showMoreButton}>
            Show More
        </button>
        </Link>
    </div>
}
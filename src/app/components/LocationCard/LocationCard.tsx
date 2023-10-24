'use client'
import styles from './LocationCard.module.css'
import Link from "next/link";
import {ILocation} from "@/types/location.types";

export const LocationCard = ({id, name, type, dimension}: ILocation) => {
    return <div className={styles.locationCard}>
        <h4>{name}</h4>
        <p>Type: <b>{type}</b></p>
        <p>Dimension: <b>{dimension}</b></p>
        <button className={styles.showMoreButton}>
            <Link href={`/location/[id]`} as={`/location/${id}`}>Show More</Link>
        </button>
    </div>
}
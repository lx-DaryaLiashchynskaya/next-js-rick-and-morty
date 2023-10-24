import styles from './page.module.css'
import {LocationCard} from "@/app/components/LocationCard/LocationCard";
import {ILocation, IServerLocation} from "@/types/location.types";
import {Suspense} from "react";
import Loading from "@/app/locations/loading";

async function getLocations() {
    const res = await fetch('https://rickandmortyapi.com/api/location')
    const locations = await res.json()
    return (locations.results as IServerLocation[]).map(
        (location) => (
            {
                id: location.id,
                name: location.name,
                type: location.type,
                dimension: location.dimension,
            }
        )) as ILocation[]
}

export default async function Locations() {
    const locations = await getLocations()

    return (
        <div className={styles.locationsContainer}>
            {locations.map(({id, name, dimension, type}) => {
                return <Suspense key={name} fallback={<Loading/>}>
                    <LocationCard
                    id={id}
                    name={name}
                    dimension={dimension}
                    type={type}
                />
                </Suspense>
            })}
        </div>
    )
}

import styles from './page.module.css'
import GoBackButton from "@/app/components/GoBackButton/GoBackButton";
import {ILocation} from "@/types/location.types";
import {Suspense} from "react";
import Loading from "@/app/location/[id]/loading";

export async function generateStaticParams() {
    return [{id: '1'}, {id: '2'}]
}

async function getLocation(locationId: number): Promise<ILocation> {
    const res = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
    const location = await res.json()

    return {
        id: location.id,
        name: location.name,
        dimension: location.dimension,
        type: location.type,
    } as ILocation
}

export default async function Location({params}: { params: { id: number } }) {
    const location = await getLocation(params.id)

    return (
        <Suspense fallback={<Loading/>}>
            <div>
                <div className={styles.locationContainer}>
                    <h2>{location.name}</h2>
                    <p>Type: <b>{location.type}</b></p>
                    <p>Dimension: <b>{location.dimension}</b></p>
                </div>
            <GoBackButton/>
            </div>
        </Suspense>
    )
}

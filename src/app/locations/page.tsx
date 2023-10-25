import {LocationCard} from "@/app/components/LocationCard/LocationCard";
import {Suspense} from "react";
import Loading from "@/app/locations/loading";
import {getValidLocationsData} from "@/lib/location.utils";
import {CardsContainer} from "@/app/components/CardsContainer/CardsContainer";

async function getLocations() {
    const res = await fetch('http://localhost:3000/api/locations')
    const locations = await res.json()
    return getValidLocationsData(locations.locationsData.results)
}

export default async function Locations() {
    const locations = await getLocations()

    return (
        <CardsContainer>
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
        </CardsContainer>
    )
}

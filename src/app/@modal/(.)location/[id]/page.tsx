import {ILocation} from "@/types/location.types";
import {getValidLocationData} from "@/lib/location.utils";
import {ModalComponent} from "@/app/components/Modal/Modal";

export const dynamicParams = false

export async function generateStaticParams() {
    return Array.from({length: 20}, (_, index) => ({id: (index + 1).toString()}))
}

async function getLocation(locationId: number): Promise<ILocation> {
    const res = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
    const location = await res.json()

    return getValidLocationData(location)
}

export default async function LocationModal({params}: { params: { id: number } }) {
    const location = await getLocation(params.id)

    return (
        <ModalComponent>
            <h2>{location.name}</h2>
            <p>Type: <b>{location.type}</b></p>
            <p>Dimension: <b>{location.dimension}</b></p>
        </ModalComponent>
    )
}
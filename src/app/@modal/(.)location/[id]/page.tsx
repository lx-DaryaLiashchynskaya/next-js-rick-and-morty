import {ILocation} from "@/types/location.types";
import {getValidLocationData} from "@/lib/location.utils";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {ModalComponent} from "@/components/Modal/Modal";

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
    const session = await getServerSession(authOptions);

    return (
        <ModalComponent>
            {session && session.user ?
                (<>
                    <h2>{location.name}</h2>
                    <p>Type: <b>{location.type}</b></p>
                    <p>Dimension: <b>{location.dimension}</b></p>
                </>) :
                <p>You cannot read additional info until your do not have register on site</p>}
        </ModalComponent>
    )
}
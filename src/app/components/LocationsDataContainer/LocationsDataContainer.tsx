'use client'
import {Suspense, useEffect, useState} from "react";
import SearchInput from "@/app/components/SearchInput/SearchInput";
import {CardsContainer} from "@/app/components/CardsContainer/CardsContainer";
import Loading from "@/app/locations/loading";
import {LocationCard} from "@/app/components/LocationCard/LocationCard";
import {ILocation} from "@/types/location.types";

type TData = ILocation[]
export default function LocationsDataContainer({initialData}: { initialData: TData }) {
    const [data, setData] = useState<TData>([])

    useEffect(() => {
        setData(initialData)
    }, [])

    return <>
        <SearchInput setSearchResults={(searchResults: ILocation[]) => setData(searchResults)}/>
        <CardsContainer>
            {data.map(({id, name, dimension, type}) => {
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
    </>
}
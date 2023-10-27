'use client'
import React, {ReactElement, Suspense, useEffect, useState} from "react";
import SearchInput from "@/app/components/SearchInput/SearchInput";
import {ILocation} from "@/types/location.types";
import {CardsContainer} from "@/app/components/CardsContainer/CardsContainer";
import Loading from "@/app/locations/loading";
import {ICharacter} from "@/types/character.types";

type TData = ILocation[] | ICharacter[]
export default function SearchWrapper({initialData, card}: { initialData: TData, card: ReactElement }) {
    const [data, setData] = useState<TData>([])

    useEffect(() => {
        setData(initialData)
    }, [])

    return <>
        <SearchInput setSearchResults={(searchResults: TData) => setData(searchResults)}/>
        <CardsContainer>
            {data.map((cardData) =>
                <Suspense fallback={<Loading/>} key={cardData.name}>
                    {React.cloneElement(card, {cardData})}
                </Suspense>)}
        </CardsContainer>
    </>
}
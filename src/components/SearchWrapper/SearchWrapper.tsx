'use client'
import React, {ReactElement, useEffect, useState} from "react";
import {ILocation} from "@/types/location.types";
import {ICharacter} from "@/types/character.types";
import SearchInput from "@/components/SearchInput/SearchInput";
import {CardsContainer} from "@/components/CardsContainer/CardsContainer";

type TData = ILocation[] | ICharacter[]
export default function SearchWrapper({initialData, card}: { initialData: TData, card: ReactElement }) {
    const [data, setData] = useState<TData>([])

    useEffect(() => {
        setData(initialData)
    }, [initialData])

    return <>
        <SearchInput setSearchResults={(searchResults: TData) => setData(searchResults)}/>
        <CardsContainer>
            {data.map((cardData) =>
                <React.Fragment key={cardData.name + cardData.id}>
                    {React.cloneElement(card, {cardData})}
                </React.Fragment>)}
        </CardsContainer>
    </>
}
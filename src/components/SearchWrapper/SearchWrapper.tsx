'use client'
import React, {ReactElement} from "react";
import {ILocation} from "@/types/location.types";
import {ICharacter} from "@/types/character.types";
import SearchInput from "@/components/SearchInput/SearchInput";
import {CardsContainer} from "@/components/CardsContainer/CardsContainer";

type TData = ILocation[] | ICharacter[]
export default function SearchWrapper({data, card}: { data: TData, card: ReactElement }) {

    return <>
        <SearchInput/>
        <CardsContainer>
            {data.map((cardData) =>
                <React.Fragment key={cardData.name + cardData.id}>
                    {React.cloneElement(card, {cardData})}
                </React.Fragment>)}
        </CardsContainer>
    </>
}
'use client'
import {useEffect, useState} from "react";
import {ICharacter} from "@/types/character.types";
import SearchInput from "@/app/components/SearchInput/SearchInput";
import {CharacterCard} from "@/app/components/CharacterCard/CharacterCard";
import {CardsContainer} from "@/app/components/CardsContainer/CardsContainer";

type TData = ICharacter[]
export default function CharactersDataContainer({initialData}: { initialData: TData }) {
    const [data, setData] = useState<TData>([])

    useEffect(() => {
        setData(initialData)
    }, [])

    return <>
        <SearchInput setSearchResults={(searchResults: ICharacter[]) => setData(searchResults)}/>
        <CardsContainer>
            {data.map(({id, name, gender, imgSrc, species, status}) => {
                return <CharacterCard
                    id={id}
                    key={name}
                    imgSrc={imgSrc}
                    name={name}
                    status={status}
                    species={species}
                    gender={gender}
                />
            })}
        </CardsContainer>
    </>
}
'use client'
import {useEffect, useState} from "react";
import {ICharacter} from "@/types/character.types";
import SearchInput from "@/app/components/SearchInput/SearchInput";
import styles from "@/app/page.module.css";
import {CharacterCard} from "@/app/components/CharacterCard/CharacterCard";

type TData = ICharacter[]
export default function CharactersDataContainer({initialData}: { initialData: TData }) {
    const [data, setData] = useState<TData>([])

    useEffect(() => {
        setData(initialData)
    }, [])

    return <>
        <SearchInput setSearchResults={(searchResults: ICharacter[]) => setData(searchResults)}/>
        <div className={styles.charactersContainer}>
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
        </div>
    </>
}
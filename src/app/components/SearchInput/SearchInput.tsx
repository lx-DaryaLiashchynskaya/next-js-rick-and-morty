import styles from './SearchInput.module.css'
import {useState} from "react";
import {usePathname} from "next/navigation";
import {ICharacter} from "@/types/character.types";
import {getValidCharactersData} from "@/lib/character.utils";

const SEARCH_INPUT_PLACEHOLDER = 'Write name...'
export default function SearchInput({setSearchResults}: { setSearchResults: (searchResults: ICharacter[]) => void }) {
    const [searchValue, setSearchValue] = useState('')
    const pathname = usePathname()

    const findCharacter = async (valueToFind: string) => {
        const res = await fetch(`/api/search${pathname}?name=${valueToFind}`)
        const searchData = await res.json()

        setSearchResults(getValidCharactersData(searchData.charactersData.results))
    }

    return <div className={styles.container}>
        <input value={searchValue} className={styles.input}
               placeholder={SEARCH_INPUT_PLACEHOLDER} type={"text"}
               onChange={event => setSearchValue(event.target.value)}/>
        <button onClick={() => findCharacter(searchValue)} className={styles.button}>Find</button>
    </div>
}

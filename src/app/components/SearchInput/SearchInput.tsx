'use client'
import styles from './SearchInput.module.css'
import {useState} from "react";

const SEARCH_INPUT_PLACEHOLDER = 'Write character name...'
export default function SearchInput() {
    const [searchValue, setSearchValue] = useState('')

    const findCharacter = (valueToFind: string) => {
        console.log(valueToFind)
    }

    return <div className={styles.container}>
        <input value={searchValue} className={styles.input}
               placeholder={SEARCH_INPUT_PLACEHOLDER} type={"text"}
               onChange={event => setSearchValue(event.target.value)}/>
        <button onClick={() => findCharacter(searchValue)} className={styles.button}>Find</button>
    </div>
}

import styles from './SearchInput.module.css'
import {useState} from "react";
import {useParams, usePathname} from "next/navigation";
import {ICharacter} from "@/types/character.types";
import {ILocation} from "@/types/location.types";
import {useTranslation} from "../../../i18n/client";
import {LocaleTypes} from "../../../i18n/settings";

export default function SearchInput({setSearchResults}: {
    setSearchResults: (searchResults: ICharacter[] & ILocation[]) => void
}) {
    const [searchValue, setSearchValue] = useState('')
    const pathname = usePathname()
    const locale = useParams()?.locale as LocaleTypes;
    const {t} = useTranslation(locale, 'home');

    const findCharacter = async (valueToFind: string) => {
        const res = await fetch(`/api/search${pathname}?name=${valueToFind}`)
        const searchData: ILocation[] & ICharacter[] = await res.json()

        setSearchResults(searchData)
    }

    return <div className={styles.container}>
        <input value={searchValue} className={styles.input}
               placeholder={t('search')} type={"text"}
               onChange={event => setSearchValue(event.target.value)}/>
        <button onClick={() => findCharacter(searchValue)} className={styles.button}> {t('searchButtonText')}</button>
    </div>
}

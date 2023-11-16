import styles from './SearchInput.module.css'
import {useState} from "react";
import {useParams, usePathname, useRouter} from "next/navigation";
import {useTranslation} from "../../../i18n/client";
import {LocaleTypes} from "../../../i18n/settings";

export default function SearchInput() {
    const [searchValue, setSearchValue] = useState('')
    const pathname = usePathname()
    const locale = useParams()?.locale as LocaleTypes;
    const {t} = useTranslation(locale, 'home');
    const router = useRouter();

    const findCharacter = async (valueToFind: string) => {
        router.replace(`${pathname}?name=${valueToFind}`)
    }

    return <div className={styles.container}>
        <input value={searchValue} className={styles.input}
               placeholder={t('search')} type={"text"}
               onChange={event => setSearchValue(event.target.value)}/>
        <button onClick={() => findCharacter(searchValue)} className={styles.button}> {t('searchButtonText')}</button>
    </div>
}

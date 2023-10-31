'use client'
import styles from './GoBackButton.module.css'
import {useRouter} from "next/navigation";

export default function GoBackButton() {
    const router = useRouter()

    return (
        <button className={styles.goBackButton} onClick={() => router.back()}>Go Back</button>
    )
}

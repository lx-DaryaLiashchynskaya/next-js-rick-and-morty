'use client'
import React from "react";
import styles from './Modal.module.css'
import {useRouter} from "next/navigation";

export const ModalComponent = ({children}: { children: React.ReactNode }) => {
    const router = useRouter()

    return <div className={`${styles.modal}`}>
        <div className={styles.modalContainer}>
            <span onClick={() => router.back()} className={styles.closeButton}>&times;</span>
            {children}
        </div>
    </div>
}
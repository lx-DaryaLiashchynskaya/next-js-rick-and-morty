import styles from './CardsContainer.module.css'
import React from "react";

export const CardsContainer = ({children}: { children: React.ReactNode }) => {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    )
}

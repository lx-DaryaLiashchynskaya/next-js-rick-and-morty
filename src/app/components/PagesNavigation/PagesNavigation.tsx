'use client'
import React, {useEffect, useState} from 'react';
import styles from './PagesNavigation.module.css';
import {useRouter} from "next/navigation";

const FIRST_PAGE_NUMBER = 1;

export default function PagesNavigation({pagesAmount, pathname}: {
    pagesAmount: number,
    pathname: string
}) {
    const [selectedPage, setSelectedPage] = useState(1)
    const [shownPageNumbers, setShownPageNumbers] = useState<number[]>([])
    const router = useRouter();

    const pageNumbers = Array.from({length: pagesAmount}, (_, index) => index + 1)
    const onPageSelected = (selectedPage: number) => {
        setSelectedPage(selectedPage)
        router.push(`${pathname}?page=${selectedPage}`)
    }

    const getIsDotsShownForStartOfPageQuery = (currentPageNumber: number) => {
        const firstShownPageNumbersEl = shownPageNumbers[0];

        return selectedPage !== currentPageNumber &&
            currentPageNumber === FIRST_PAGE_NUMBER &&
            selectedPage - 1 !== firstShownPageNumbersEl &&
            selectedPage - 2 !== firstShownPageNumbersEl &&
            selectedPage - 3 !== firstShownPageNumbersEl
    };

    const getIsDotsShownForEndOfPageQuery = (currentPageNumber: number) => {
        const lastShownPageNumbersEl = shownPageNumbers[shownPageNumbers.length - 1];

        return selectedPage !== currentPageNumber &&
            selectedPage + 1 !== lastShownPageNumbersEl &&
            selectedPage + 2 !== lastShownPageNumbersEl &&
            selectedPage + 3 !== lastShownPageNumbersEl &&
            currentPageNumber === lastShownPageNumbersEl;
    }

    const getDots = () => {
        return <div className={styles.dots}>...</div>
    }

    useEffect(() => {
        const getShownPages = pageNumbers.reduce((prevPagesNumbers, currentPageNumber) => {
            if (currentPageNumber === 1 ||
                currentPageNumber - 2 === selectedPage ||
                currentPageNumber - 1 === selectedPage ||
                currentPageNumber === selectedPage ||
                currentPageNumber + 1 === selectedPage ||
                currentPageNumber + 2 === selectedPage ||
                currentPageNumber === pagesAmount)
                prevPagesNumbers.push(currentPageNumber)
            return prevPagesNumbers;
        }, [] as number[])

        setShownPageNumbers(getShownPages)
    }, [selectedPage])

    return <div className={styles.container}>
        {shownPageNumbers.map((pageNumber) => {
            return <React.Fragment key={pageNumber}>
                {getIsDotsShownForEndOfPageQuery(pageNumber) && getDots()}

                <button onClick={() => onPageSelected(pageNumber)} key={pageNumber}
                        className={`
                        ${styles.pageNumber} ${pageNumber === selectedPage ? styles.active : ''}
                        `}>
                    {pageNumber}</button>

                {getIsDotsShownForStartOfPageQuery(pageNumber) && getDots()}
            </React.Fragment>
        })}
    </div>
}

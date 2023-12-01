export const getPageNumbersArray = (pagesAmount: number) => {
    return Array.from({length: pagesAmount}, (_, index) => index + 1)
}
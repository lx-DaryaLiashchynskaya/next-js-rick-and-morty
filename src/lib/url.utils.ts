import {locales} from "../../i18n/settings";

export const deleteLocaleFromURL = (url: string) => {
    const localeToReplace =
        locales.find((locale) => url.includes(`/${locale}`))

    return url.replace(
        `/${localeToReplace}`,
        '',
    )
}

export const joinSearchParamsString = (searchParams: URLSearchParams) => {
    const joinedSearchParams: string[] = []
    searchParams.forEach((value, key) => {
        joinedSearchParams.push(`${key}=${value}`)
    })

    return joinedSearchParams.join('&')
}
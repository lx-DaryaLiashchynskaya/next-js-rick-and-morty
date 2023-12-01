import {getValidLocationsData} from "@/lib/location.utils";
import styles from "@/app/[locale]/page.module.css";
import React from "react";
import SearchWrapper from "@/components/SearchWrapper/SearchWrapper";
import {LocationCard} from "@/components/LocationCard/LocationCard";
import PagesNavigation from "@/components/PagesNavigation/PagesNavigation";

async function getLocations(searchPage = '1', searchName = '') {
    const res = await fetch(`http://localhost:3000/api/locations?page=${searchPage}&name=${searchName}`, {cache: 'no-store'})
    const locations = await res.json()

    return {
        locations: getValidLocationsData(locations.locationsData.results),
        pagesAmount: locations.locationsData.info.pages
    }
}

export default async function Locations({searchParams}: { searchParams: { page: string, name: string } }) {
    const {locations, pagesAmount} = await getLocations(searchParams.page, searchParams.name)

    return (
        <div className={styles.container}>
            <SearchWrapper data={locations || []} card={<LocationCard/>}/>
            <PagesNavigation pathname={'/locations'} pagesAmount={pagesAmount}/>
        </div>
    )
}

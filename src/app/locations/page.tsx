import {getValidLocationsData} from "@/lib/location.utils";
import styles from "@/app/page.module.css";
import {LocationCard} from "@/app/components/LocationCard/LocationCard";
import SearchWrapper from "@/app/components/SearchWrapper/SearchWrapper";
import PagesNavigation from "@/app/components/PagesNavigation/PagesNavigation";
import React from "react";

async function getLocations(searchPage = '1') {
    const res = await fetch('http://localhost:3000/api/locations?page=' + searchPage)
    const locations = await res.json()

    return {
        locations: getValidLocationsData(locations.locationsData.results),
        pagesAmount: locations.locationsData.info.pages
    }
}

export default async function Locations({searchParams}: { searchParams: { [key: string]: string } }) {
    const {locations, pagesAmount} = await getLocations(searchParams.page)

    return (
        <div className={styles.container}>
            <SearchWrapper initialData={locations} card={<LocationCard/>}/>
            <PagesNavigation pathname={'/locations'} pagesAmount={pagesAmount}/>
        </div>
    )
}

import {getValidLocationsData} from "@/lib/location.utils";
import styles from "@/app/page.module.css";
import {LocationCard} from "@/app/components/LocationCard/LocationCard";
import SearchWrapper from "@/app/components/SearchWrapper/SearchWrapper";

async function getLocations() {
    const res = await fetch('http://localhost:3000/api/locations')
    const locations = await res.json()
    return getValidLocationsData(locations.locationsData.results)
}

export default async function Locations() {
    const locations = await getLocations()

    return (
        <div className={styles.container}>
            <SearchWrapper initialData={locations} card={<LocationCard/>}/>
        </div>
    )
}

import {getValidLocationsData} from "@/lib/location.utils";
import LocationsDataContainer from "@/app/components/LocationsDataContainer/LocationsDataContainer";
import styles from "@/app/page.module.css";

async function getLocations() {
    const res = await fetch('http://localhost:3000/api/locations')
    const locations = await res.json()
    return getValidLocationsData(locations.locationsData.results)
}

export default async function Locations() {
    const locations = await getLocations()

    return (
        <div className={styles.container}>
            <LocationsDataContainer initialData={locations}/>
        </div>
    )
}

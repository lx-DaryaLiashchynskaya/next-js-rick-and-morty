import {getValidLocationsData} from "@/lib/location.utils";

const getLocations = async (searchString: string) => {
    const res = await fetch('https://rickandmortyapi.com/api/location/?' + searchString)
    return await res.json();
}

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const locationName = searchParams.get('name')
    const locationsData = await getLocations(`name=${locationName}`)

    return Response.json(getValidLocationsData(locationsData.results))
}
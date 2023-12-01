import {joinSearchParamsString} from "@/lib/url.utils";

const getLocations = async (searchString: string) => {
    const res = await fetch('https://rickandmortyapi.com/api/location?' + searchString)
    return await res.json();
}

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const searchString = joinSearchParamsString(searchParams)

    const locationsData = await getLocations(searchString)

    return Response.json({locationsData})
}
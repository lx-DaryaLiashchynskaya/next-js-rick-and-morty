import {joinSearchParamsString} from "@/lib/url.utils";

const getCharacters = async (searchParams: string) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?${searchParams}`)
    return await res.json();
}

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const searchString = joinSearchParamsString(searchParams)
    const charactersData = await getCharacters(searchString)

    return Response.json({charactersData})
}
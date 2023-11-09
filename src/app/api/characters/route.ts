const getCharacters = async (searchParams: string) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?${searchParams}`)
    return await res.json();
}

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const searchPageNumber = searchParams.get('page')
    const charactersData = await getCharacters(`page=${searchPageNumber}`)

    return Response.json({charactersData})
}
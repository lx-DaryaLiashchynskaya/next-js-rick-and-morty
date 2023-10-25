const getCharacters = async (searchString: string) => {
    const res = await fetch('https://rickandmortyapi.com/api/character/?' + searchString)
    return await res.json();
}

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const characterName = searchParams.get('name')
    const charactersData = await getCharacters(`name=${characterName}`)

    return Response.json({charactersData})
}
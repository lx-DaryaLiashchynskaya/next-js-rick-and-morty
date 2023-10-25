const getCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    return await res.json();
}

export async function GET(request: Request) {
    const charactersData = await getCharacters()

    return Response.json({charactersData})
}
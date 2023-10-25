const getCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    return await res.json();
}

export async function GET() {
    const charactersData = await getCharacters()

    return Response.json({charactersData})
}
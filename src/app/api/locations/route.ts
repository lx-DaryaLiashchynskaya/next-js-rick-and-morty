const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location')
    return await res.json();
}

export async function GET() {
    const locationsData = await getLocations()

    return Response.json({locationsData})
}
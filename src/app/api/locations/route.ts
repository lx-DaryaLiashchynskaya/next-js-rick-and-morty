const getLocations = async (searchString: string) => {
    const res = await fetch('https://rickandmortyapi.com/api/location' + searchString)
    return await res.json();
}

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const pageAmount = searchParams.get('page')

    const locationsData = await getLocations(`?page=${pageAmount}`)

    return Response.json({locationsData})
}
import {ILocation, IServerLocation} from "@/types/location.types";

export const getValidLocationsData = (locations: IServerLocation[]): ILocation[] => {
    return locations.map(
        (location) => (
            getValidLocationData(location)
        ))
}

export const getValidLocationData = (location: IServerLocation): ILocation => {
    return {
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
    }
}
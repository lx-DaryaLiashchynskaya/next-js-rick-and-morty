import {ICharacter, IServerCharacter} from "@/types/character.types";

const getObjectIdFromURL = (url: string) => {
    return url.split('/').reverse()[0]
}

export const getValidCharactersData = (characters: IServerCharacter[]): ICharacter[] => {
    return characters.map(
        (character) => (
            getValidCharacterData(character)
        ))
}

export const getValidCharacterData = (character: IServerCharacter): ICharacter => {
    return {
        id: character.id,
        name: character.name,
        gender: character.gender,
        status: character.status,
        species: character.species,
        imgSrc: character.image,
        location: {...character.location, id: getObjectIdFromURL(character.location.url)}
    }
}
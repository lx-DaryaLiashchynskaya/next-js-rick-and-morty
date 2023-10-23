export interface IServerCharacter {
    imgSrc: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    id: string;
    origin: {
        name: string,
        url: string,
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

export interface ICharacter {
    imgSrc: string;
    name: string;
    status: string;
    species: string;
    gender: string;
}
export interface ISprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: IOther;
}

export interface IOfficialArtwork {
    front_default: string;
}

export interface IOther {
    "official-artwork": IOfficialArtwork;
}

export interface IPokemon {
    id: number;
    name: string;
    sprites: ISprites;
}

export interface PokemonList {
    name: string;
    url: string;
}
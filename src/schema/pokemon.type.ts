import type { SelectOption } from "../ui/select/select.type";

export interface PokemonPreview {
    name: string;
    url: string
}

export interface PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonPreview[]
}

export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}

export interface Type {
    slot: number;
    type: NamedAPIResource;
}

export interface Sprites {
    front_default: string | null;
    back_default: string | null;
    front_shiny?: string | null;
    back_shiny?: string | null;
    [key: string]: string | null | undefined;
}

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: NamedAPIResource[];
    species: NamedAPIResource;
    stats: Stat[];
    types: Type[];
    sprites: Sprites;
}

export interface PokemonFormData {
    firstname: string;
    surname: string;
    pokemon: SelectOption[];
};

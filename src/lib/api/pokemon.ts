import { Pokemon, PokemonResponse } from "../../schema/pokemon.type";
import { axiosInstance } from "../axios"

export const fetchAllPokemons = async (): Promise<PokemonResponse> => {
    try {
        const response = await axiosInstance.get('/pokemon');

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchMultiplePokemonsByNames = async (names: string[]): Promise<Pokemon[]> => {
    try {
        const pokemonPromises = names.map(name => axiosInstance.get(`/pokemon/${name}`));
        
        const responses = await Promise.all(pokemonPromises);
        const pokemonData = responses.map(response => response.data);

        return pokemonData;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

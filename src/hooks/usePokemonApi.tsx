import { useState, useEffect, useRef } from "react";
import { fetchAllPokemons, fetchMultiplePokemonsByNames } from "../lib/api/pokemon";
import type { Pokemon, PokemonPreview, PokemonResponse } from "../schema/pokemon.type";

export const useFetchPokemons = () => {
    const [pokemons, setPokemons] = useState<PokemonPreview[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data: PokemonResponse = await fetchAllPokemons();
                setPokemons(data.results);
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Failed to fetch pokemons"));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { pokemons, loading, error };
};

export const useFetchMultiplePokemons = (names: string[] | null) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    
    const previousNamesRef = useRef<string[]>([]);

    if (!names) return { pokemons, loading, error };

    useEffect(() => {
        if (names.join(',') !== previousNamesRef.current.join(',')) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const data = await fetchMultiplePokemonsByNames(names);
                    setPokemons(data);
                } catch (err) {
                    setError(err instanceof Error ? err : new Error("Failed to fetch pokemons"));
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
            previousNamesRef.current = names;
        }
    }, [names]);

    return { pokemons, loading, error };
};

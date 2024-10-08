import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const VITE_POKEMON_API_URL = import.meta.env.VITE_POKEMON_API_URL;

export const pokemonSlice = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: VITE_POKEMON_API_URL }),
    endpoints(builder) {
        return {
            fetchPokemons: builder.query({
                query({ offset, pokemonsPerPage }) {
                    return `/pokemon/?offset=${offset}&limit=${pokemonsPerPage}`;
                }
            }),

            fetchNumberOfPokemons: builder.query({
                query() {
                    return `/pokemon`;
                }
            }),

            fetchPokemonsImg: builder.query({
                query(pokemonName) {
                    return `pokemon/${pokemonName}/`;
                }
            }),

            fetchPokemonStats: builder.query({
                query(pokemonName) {
                    return `pokemon/${pokemonName}/`;
                }
            }),
            fetchPokemonDetail: builder.query({
                query(pokemonName) {
                    return `pokemon/${pokemonName}/`;
                }
            })
        };
    }
});

export const {
    useFetchPokemonsQuery,
    useFetchPokemonsImgQuery,
    useFetchPokemonStatsQuery,
    useFetchNumberOfPokemonsQuery,
    useFetchPokemonDetailQuery
} = pokemonSlice;

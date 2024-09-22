import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemonApi/pokemonSlicer";

export const store = configureStore({
    reducer: {
        [pokemonSlice.reducerPath]: pokemonSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokemonSlice.middleware)
    }
})
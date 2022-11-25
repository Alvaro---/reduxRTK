import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis/todosApi';
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
    reducer: {
        counterrr: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },
    //No importar getDefaultMiddleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})
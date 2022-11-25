import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true;
            // Si no se usara slice debria hacer un return {...state, isLoading:true} , pero emmet se encargara de no mutar el estado
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
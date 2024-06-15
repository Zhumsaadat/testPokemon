import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './PokemonThunk';
import { RootState } from '../app/store';
import { PokemonMutation } from '../types';

interface PokemonsState {
    items: PokemonMutation[];
    fetchLoading: boolean;
}

const initialState: PokemonssState = {
    items: [],
    fetchLoading: false,
}

export const prokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchPokemons.fulfilled, (state, {payload: products}) => {
            state.fetchLoading = false;
            state.items = products;
        });
        builder.addCase(fetchPokemons.rejected, (state) => {
            state.fetchLoading = false;
        });
    }
});

export const pokemonsReducer = prokemonsSlice.reducer;
export const selectPokemons = (state: RootState) => state.pokemons.items;
export const selectFetchLoading = (state: RootState) => state.pokemons.fetchLoading;
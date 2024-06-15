import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

export const fetchPokemons = createAsyncThunk(
    'fetchPokemons',
    async () => {
        const pokemonResponse = await axiosApi.get('/');
        const pokemons = pokemonResponse.data.results
        console.log(pokemons)
        return pokemons;
    }
);
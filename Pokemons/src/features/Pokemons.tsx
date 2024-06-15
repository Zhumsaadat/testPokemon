import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectPokemons } from './PocemonsSlice';
import { fetchPokemons } from './PokemonThunk';
import { useEffect } from 'react';
import axios from 'axios';
import { PokemonMutation } from '../types';

const Pokemons = () => {
    const dispatch = useAppDispatch();
    const pokemons = useAppSelector(selectPokemons);
    const img = async (url: string)  => {
        return await axios.get(url);
    }

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    return (
        <Grid container direction="column" gap={2}>
            <Grid item container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="h4">Pokemons</Typography>
                </Grid>
            </Grid>

            <Grid item container gap={2}>
                {pokemons.map(pokemon => (
                    <Card sx={{ maxWidth: 345 }} key={pokemon.name}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image= {pokemon.url}
                        />
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name}
                    </Typography>
                    </Card>
                    ))
                }
          </Grid>
        </Grid>
    );
};

export default Pokemons;
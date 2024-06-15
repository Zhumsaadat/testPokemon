import Pokemons from './features/Pokemons';
import { Container, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import AppToolbar from './components/ApptoolBar';
import axiosApi from './axiosApi';

function App() {
    const i = async () => {
        const f = await axiosApi.get('/');
        console.log(f)
    }
    return (
        <>
            <header>
                <AppToolbar/>
            </header>
            <main>
                <Container maxWidth="xl">
                    <Routes>
                        <Route path="/" element={<Pokemons/>} />
                        <Route path="*" element={<Typography variant="h2">Not found!</Typography>} />
                    </Routes>
                </Container>
            </main>

        </>
    );
}

export default App;
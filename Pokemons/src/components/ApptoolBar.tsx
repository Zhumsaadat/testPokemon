import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

const LogoLink = styled(NavLink)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'inherit',
    }
});

const AppToolbar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    <LogoLink to="/">Pokemons</LogoLink>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;
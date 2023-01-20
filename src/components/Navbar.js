import { AppBar, Toolbar, IconButton, Typography, Stack, Button, useTheme, useMediaQuery } from "@mui/material"
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link as RouterLink } from 'react-router-dom';
import DrawerComponent from "./Drawer";

const Navbar = () => {
    const currTheme = useTheme();
    const isMobile = useMediaQuery(currTheme.breakpoints.down("md"));

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size='large' edge='start' color="inherit" aria-label="logo">
                    <NewspaperIcon />
                </IconButton>
                <Typography variant="h6" component={RouterLink} to='/' sx={{ flexGrow: 1, textDecoration: 'none', color: "white" }}>
                    NEWS APP
                </Typography>
                {isMobile ? <DrawerComponent /> :
                    <Stack direction='row' spacing={2}>
                        <Button color="inherit" component={RouterLink} to='/'>General</Button>
                        <Button color="inherit" component={RouterLink} to='/sports'>Sports</Button>
                        <Button color="inherit" component={RouterLink} to='/entertainment'>Entertainment</Button>
                        <Button color="inherit" component={RouterLink} to='/movies'>Movies</Button>
                    </Stack>}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
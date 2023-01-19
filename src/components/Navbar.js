import { AppBar, Toolbar,  IconButton, Typography, Stack, Button } from "@mui/material"
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size='large' edge='start' color="inherit" aria-label="logo">
                    <NewspaperIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    NEWS APP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color="inherit">General</Button>
                    <Button color="inherit">Sports</Button>
                    <Button color="inherit">Entertainment</Button>
                    <Button color="inherit">Movies</Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
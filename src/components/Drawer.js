import React, { useState } from 'react'
import { Drawer, List, ListItem, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom'

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer anchor='top' open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{ backgroundColor: '#42a5f5' }}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Button color="primary" component={RouterLink} to='/'>General</Button>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Button color="primary" component={RouterLink} to='/sports'>Sports</Button>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Button color="primary" component={RouterLink} to='/entertainment'>Entertainment</Button>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Button color="primary" component={RouterLink} to='/movies'>Movies</Button>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent
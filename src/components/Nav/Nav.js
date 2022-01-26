import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function CustomNav() {
    return (
                <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Button color="inherit">Bradley Litman</Button>
                            </Typography>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Portfolio</Button>
                            <Button color="inherit">Contact</Button>
                            <Button color="inherit">Resume</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
    )
}
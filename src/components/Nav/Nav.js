import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Resume from '../../assets/Brad-Resume.docx'



export default function Nav({handlePageChange, currentPage}) {
    return (
                <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Bradley Litman
                            </Typography>
                            <Button color="inherit" onClick={() => handlePageChange('About')} variant={currentPage === 'About' ? 'outlined' : ""}>About</Button>
                            <Button color="inherit" onClick={() => handlePageChange('Projects')} variant={currentPage === 'Projects' ? 'outlined' : ""}>Portfolio</Button>
                            <Button color="inherit" onClick={() => handlePageChange('Contact')} variant={currentPage === 'Contact' ? 'outlined' : ""}>Contact</Button>
                            <Button color="inherit"><a href={Resume} style={{textDecoration: 'none', color: 'inherit'}} download>Resume</a></Button>
                        </Toolbar>
                    </AppBar>
                </Box>
    )
}
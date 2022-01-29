import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '272727'
    }
});


export default function Footer() {
    const classes = useStyles()
    return (
        <BottomNavigation className={classes.footer}>
            <CssBaseline />
            <BottomNavigationAction icon={<GitHubIcon />} href="https://github.com/Blitman12" target="_blank" />
            <BottomNavigationAction icon={<LinkedInIcon />} href="https://www.linkedin.com/in/bradleylitman/" target="_blank" />
            <BottomNavigationAction icon={<FacebookIcon />} href="https://www.facebook.com/brad.litman" target="_blank" />
        </BottomNavigation>
    )
}
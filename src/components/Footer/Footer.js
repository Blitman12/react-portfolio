import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { CssBaseline } from '@mui/material';

export default function Footer() {
    return (
        <BottomNavigation className="footer">
            <CssBaseline />
            <BottomNavigationAction icon={<GitHubIcon />} href="https://github.com/Blitman12" target="_blank"/>
            <BottomNavigationAction icon={<LinkedInIcon />}  href="https://www.linkedin.com/in/bradleylitman/" target="_blank"/>
            <BottomNavigationAction icon={<FacebookIcon />}  href="https://www.facebook.com/brad.litman" target="_blank"/>
        </BottomNavigation>
    )
}
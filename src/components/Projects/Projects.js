import { makeStyles } from '@mui/styles';
import React from 'react'
import Project from './Project';

const projects = [
    {
        title: 'RenDATEvous',
        image: 'rendatevous.png',
        description: 'MERN Stack with Apollo to find, save and rate Date ideas',
        githubLink: 'https://github.com/Blitman12/ren-date-vous',
        deployedLink: 'https://rendatevous.herokuapp.com/'
    },
    {
        title: 'Baby Aid',
        image: 'baby-aid.png',
        description: 'Full Stack application using Sequelize and Node/Express. Allows parents to create a secure account and ask parent related questions and get answers',
        githubLink: 'https://github.com/Blitman12/Baby-Aid',
        deployedLink: 'https://stark-brook-30406.herokuapp.com/'
    },
    {
        title: 'Budget Tracker',
        image: 'budget-tracker.JPG',
        description: 'Converted application to a PWA with service-workers and offline functionality through IndexedDB',
        githubLink: 'https://github.com/Blitman12/budget-tracker',
        deployedLink: 'https://mighty-hollows-59425.herokuapp.com/'
    },
    {
        title: 'Note Taker',
        image: 'note-taker.jpeg',
        description: 'Online note taker with the ability to add and delete notes that persist across visits',
        githubLink: 'https://github.com/Blitman12/Note-Taker',
        deployedLink: 'https://mighty-cliffs-91530.herokuapp.com/notes'
    },
    {
        title: 'Citizen Master',
        image: 'citizen-master.jpeg',
        description: 'City searcher to find a plethora of city scores and nearby events. Local Storage used to save searched cities',
        githubLink: 'https://github.com/Blitman12/Citizen-Master',
        deployedLink: 'https://blitman12.github.io/Citizen-Master/'
    },
    {
        title: 'Weather Search',
        image: 'weather-search.png',
        description: 'Quick way to find a five day forecast in any searched city. Searched cities are saved to local storage.',
        githubLink: 'https://github.com/Blitman12/Weather-Application',
        deployedLink: 'https://blitman12.github.io/Weather-Application/'
    }
]

const useStyles = makeStyles({
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '25px'
    },
    titles: {
        color: 'aliceblue',
        textAlign: 'center',
        fontSize: '50px'
    }
});

export default function Projects() {
    const classes = useStyles();

    return (
        <>
            <h1 className={classes.titles}>Projects</h1>
            <div className={classes.cardContainer}>
                {projects.map(project => {
                    return (
                        <Project
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                            key={project.title}
                        >
                        </Project>
                    )
                })}
            </div>
        </>
    )
}



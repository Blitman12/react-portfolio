import React from 'react'
import CustomNav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const projects = [
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
  },
  {
    title: 'Password Generator',
    image: 'password-generator.jpeg',
    description: 'Fast way to develop a custom password based off of user selected parameters',
    githubLink: 'https://github.com/Blitman12/Password-Generator',
    deployedLink: 'https://blitman12.github.io/Password-Generator/'
  }
]


function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <header>
          <CustomNav></CustomNav>
        </header>
        <main>

          {projects.map(project => {
            return (
              <Projects
                title={project.title}
                image={project.image}
                description={project.description}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
                >
              </Projects>
            )
          })}
          {/* <Projects
            title={projects[0].title}
            image={projects[0].image}
            description={projects[0].description}
            githubLink={projects[0].githubLink}
            deployedLink={projects[0].deployedLink}
          >
          </Projects> */}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;

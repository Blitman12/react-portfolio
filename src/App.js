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


function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <header>
          <CustomNav></CustomNav>
        </header>
        <main>
          <Projects></Projects>
        </main>
      </ThemeProvider>
    </div>
  );
}



export default App;

import React from 'react'
import CustomNav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
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
        <Footer />
      </ThemeProvider>
    </div>
  );
}



export default App;

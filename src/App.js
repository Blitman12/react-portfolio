import React from 'react'
import Footer from './components/Footer/Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PortfolioContainer from './components/Nav/PortfolioContainer';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <main style={{minHeight: 'calc(100vh - 70px)'}}>
        <PortfolioContainer></PortfolioContainer>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

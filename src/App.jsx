import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box, CssBaseline, Button, Switch } from '@mui/material';

import Home from './pages/Home';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Navbar from './components/Navbar';


import { useThemeContext } from './context/ThemeContext';

const App = () => {
  const { mode, toggleTheme } = useThemeContext();

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2', 
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <Navbar />  

          <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', p: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exchange-rates" element={<ExchangeRates />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="*" element={<About />} />
            </Routes>
          </Box>
        </MuiThemeProvider>

     
    </MuiThemeProvider>
  );
};

export default App;

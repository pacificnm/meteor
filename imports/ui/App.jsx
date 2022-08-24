import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Footer } from './Footer.jsx';
import { ButtonAppBar } from './ButtonAppBar.jsx';
import { Home } from './Home.jsx';
import { About } from './About';
const mdTheme = createTheme();


export const App = () => (
  <ThemeProvider theme={mdTheme}>
    <ButtonAppBar />
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
      </Container>
    </Box>
    <Footer/>
  </ThemeProvider>
);

import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Home from 'pages/Home';
import Header from 'components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;

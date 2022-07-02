import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Home from 'pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;

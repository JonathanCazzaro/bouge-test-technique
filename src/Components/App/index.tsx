import { Box } from '@mui/material';
import React from 'react';
import Nav from '../Nav';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Personne from '../Personne';

const App: React.VFC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Nav />
      <Box width="100%" minHeight="100vh" sx={{ backgroundColor: '#fafafa' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personne" element={<Personne />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;

import React from 'react';
import Header from './Header'; 
import Sidebar from './Sidebar'; 
import Home from './Home'; 
import SalesChart from './SalesChart'; 
import Aside from './Aside';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Home/>
      <SalesChart/>
      <Aside/>
    </Box>
  );
}

export default App;

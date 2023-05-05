import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Grid container> 
    <Navbar/>
    <Outlet/>
    </Grid>
  );
}

export default App;

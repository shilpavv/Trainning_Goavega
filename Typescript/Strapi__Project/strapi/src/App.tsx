import React from 'react';
import './App.css';
import ProjectList from './project/ProjectList';
import Add from './project/Add';
import { Routes, Route } from "react-router-dom"
import { Container, Nav } from "react-bootstrap"
import Navbar from "./project/Nav"

function App() {
  return (
    <>
    <Navbar/>
    
    <Container className="mb-4">
    <Routes>
      <Route path="/Add" element={<Add />} />
    </Routes>
  </Container>
  <ProjectList/>
    </>
    
  )
}
export default App;

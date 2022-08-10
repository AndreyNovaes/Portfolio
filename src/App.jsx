import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/home" replace /> }/>
        <Route path="home" element={ <NavBar /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

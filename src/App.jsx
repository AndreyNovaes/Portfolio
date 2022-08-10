import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

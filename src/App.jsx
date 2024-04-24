import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdoptionPage from './pages/AdoptionPage.jsx';
import CatDetailsPage from './pages/CatDetailsPage.jsx';
import AdoptionFormPage from './pages/AdoptionFormPage.jsx';
import Home from './pages/Home.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/adoption" element={<AdoptionPage/>} />
        <Route path="/cat/:id" element={<CatDetailsPage/>} />
        <Route path="/adoption/form" element={<AdoptionFormPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

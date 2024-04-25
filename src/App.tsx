import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Filtro from './components/Filtro/filtro';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/filtro" element={<Filtro />} />
          {/* Otras rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

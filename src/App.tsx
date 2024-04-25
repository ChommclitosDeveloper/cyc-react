import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Filtro from './Filtro/filtro';

const App: React.FC = () => {
  return (
    <Router>
      <div>
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

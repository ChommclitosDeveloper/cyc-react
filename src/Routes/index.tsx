import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filtro from '../Filtro/filtro';

const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/filtro" element={<Filtro />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;

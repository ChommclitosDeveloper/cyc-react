import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Filtro from './components/Filtro/filtro';
import Login from './components/login/Login';
import Homepage from './components/homepage/Homepage';
import Regiones from './components/regiones/Regiones';
import Personalizadas from './components/personalizadas/Personalizadas';
import Register from './components/register/Register';

const App: React.FC = () => {
  return (
    <Router>
      <div className='padre'>
        <NavBar />
        <Routes>
          <Route path="/filtro" element={<Filtro />} />
          <Route path='/' element={<Homepage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/regiones" element={<Regiones/>} />
          <Route path="/personalizadas" element={<Personalizadas/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Filtro from './components/Filtro/filtro';
import Login from './components/login/Login';
import Homepage from './components/homepage/Homepage';
import Regiones from './components/regiones/Regiones';
import Personalizadas from './components/personalizadas/Personalizadas';
import Register from './components/register/Register';
import Preparacion from './components/preparacion/Preparacion';
import Formulario from './components/Formulario/formulario';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavBar = location.pathname === '/login' || location.pathname === '/register';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='padre'>
      {!hideNavBar && <NavBar onSidebarToggle={setIsSidebarOpen} />}
      <div className={`padres ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Routes>
        <Route path="/filtro" element={<Filtro />} />
        <Route path='/' element={<Homepage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/regiones" element={<Regiones/>} />
        <Route path="/personalizadas" element={<Personalizadas/>} />
        <Route path="/preparacion" element={<Preparacion/>} />
        <Route path="/formulario" element={<Formulario/>} />
      </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

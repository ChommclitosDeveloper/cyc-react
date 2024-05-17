import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Filtro from './components/Filtro/filtrocaribe';
import Login from './components/login/Login';
import Homepage from './components/homepage/Homepage';
import Regiones from './components/regiones/Regiones';
import Personalizadas from './components/personalizadas/Personalizadas';
import Register from './components/register/Register';
import Preparacion from './components/preparacion/Caribe/Preparacion';
import Formulario from './components/Formulario/formulario';
import FloatingButton from './components/FloatingButton/FloatingButton';
import ValorNutricional from './components/valornutricional/ValorNutricional';
import Reseña from './components/reseñahistorica/Reseña';
import FiltroAndina from './components/Filtro/FiltroAndina';
import FiltroOrinoquia from './components/Filtro/FiltroOrinoquia';
import FiltroInsular from './components/Filtro/FiltroInsular';
import FiltroPacifica from './components/Filtro/FiltroPacifica';
import FiltroAmazonica from './components/Filtro/FiltroAmazonica';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavBar = location.pathname === '/login' || location.pathname === '/register';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='padre'>
      {!hideNavBar && <NavBar onSidebarToggle={setIsSidebarOpen} />}
      <div className={`padres ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Homepage/>}/>
        <Route path="/regiones" element={<Regiones/>} />
        <Route path="/filtro caribe" element={<Filtro/>} />
        <Route path="/filtro andina" element={<FiltroAndina/>}/>
        <Route path="/filtro orinoquia" element={<FiltroOrinoquia/>}/>
        <Route path="/filtro amazonica" element={<FiltroAmazonica/>}/>
        <Route path="/filtro insular" element={<FiltroInsular/>}/>
        <Route path="/filtro pacifica" element={<FiltroPacifica/>}/>
        <Route path="/preparacion" element={<Preparacion/>} />
        <Route path="/nutricion" element={<ValorNutricional/>} />
        <Route path="/reseña historica" element={<Reseña/>} />
        <Route path="/personalizadas" element={<Personalizadas/>} />
        <Route path="/formulario" element={<Formulario/>} />
      </Routes>
      </div>
      {!hideNavBar && <FloatingButton />} {/* Añadir el botón flotante */}
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

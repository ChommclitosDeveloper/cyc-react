import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import PersistentDrawerLeft from './components/NavBar/navBar';
import { Box } from '@mui/material';
import FiltroPersonalizadas from './components/Filtro/FiltroPersonalizadas';

const AppContent: React.FC = () => {
  const location = useLocation();
  const hideNavBar = location.pathname === '/login' || location.pathname === '/register';
  const hideDrawer = location.pathname === '/login' || location.pathname === '/register';
  
  return (
    <Box sx={{ }}>
      
      {hideDrawer ? (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/regiones" element={<Regiones />} />
          <Route path="/regiones/filtrocaribe" element={<Filtro />} />
          <Route path="/regiones/filtroandina" element={<FiltroAndina />} />
          <Route path="/regiones/filtroorinoquia" element={<FiltroOrinoquia />} />
          <Route path="/regiones/filtroamazonica" element={<FiltroAmazonica />} />
          <Route path="/regiones/filtroinsular" element={<FiltroInsular />} />
          <Route path="/regiones/filtropacifica" element={<FiltroPacifica />} />
          <Route path="/preparacion" element={<Preparacion />} />
          <Route path="/nutricion" element={<ValorNutricional />} />
          <Route path="/reseñahistorica" element={<Reseña/>} />
          <Route path="/personalizadas/*" element={<Personalizadas />} />
          <Route path="formulario" element={<Formulario />} />
        </Routes>
      ) : (
        <PersistentDrawerLeft>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/regiones" element={<Regiones />} />
            <Route path="/regiones/filtrocaribe" element={<Filtro />} />
            <Route path="/regiones/filtroandina" element={<FiltroAndina />} />
            <Route path="/regiones/filtroorinoquia" element={<FiltroOrinoquia />} />
            <Route path="/regiones/filtroamazonica" element={<FiltroAmazonica />} />
            <Route path="/regiones/filtroinsular" element={<FiltroInsular />} />
            <Route path="/regiones/filtropacifica" element={<FiltroPacifica />} />
            <Route path="/preparacion" element={<Preparacion />} />
            <Route path="/nutricion" element={<ValorNutricional />} />
            <Route path="/reseña historica" element={<Reseña />} />
            <Route path="/personalizadas/*" element={<Personalizadas />} />
            <Route path="formulario" element={<Formulario />} />
            <Route path="filtropersonalizadas" element={<FiltroPersonalizadas />} />
          </Routes>
        </PersistentDrawerLeft>
      )}
      {!hideNavBar && <FloatingButton />} {/* Añadir el botón flotante */}
    </Box>
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


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Filtro from './components/Filtro/filtro';
import './App.css';
import Login from './components22/login/Login';
import Homepage from './components22/homepage/Homepage';
import Register from './components22/register/Register';
import Regiones from './components22/homepage/regiones/Regiones';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/filtro" element={<Filtro />} />
          <Route path='/' element={<Homepage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/regiones" element={<Regiones/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

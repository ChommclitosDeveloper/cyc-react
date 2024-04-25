import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'; // Estilos CSS para el NavBar

const NavBar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
        </div>
        <div className="navbar-logo">
          <Link to="/">Logo</Link>
        </div>
        
      </div>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="user-info">
          <h2>Bienvenido, Usuario</h2>
          <img src="imagen-de-perfil.jpg" alt="Avatar" className="avatar" />
        </div>
        <ul className="sidebar-list">
          <NavItem to="/editar-perfil" onClick={toggleSidebar}>Editar Perfil</NavItem>
          <NavItem to="/recetas" onClick={toggleSidebar}>Mis Recetas</NavItem>
          <NavItem to="/crear-receta" onClick={toggleSidebar}>Crear Receta</NavItem>
          {/* Agrega más elementos de navegación según sea necesario */}
        </ul>
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, onClick, children }) => {
  return (
    <li className="sidebar-item">
      <Link to={to} onClick={onClick}>{children}</Link>
    </li>
  );
};

export default NavBar;


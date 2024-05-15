import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUser,
  faUtensils,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"; // Estilos CSS para el NavBar

interface NavBarProps {
  onSidebarToggle: (isSidebarOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSidebarToggle }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    const newSidebarState = !showSidebar;
    setShowSidebar(newSidebarState);
    onSidebarToggle(newSidebarState);
    
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
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="user-info">
          <h2>Bienvenido, Usuario</h2>
          <FontAwesomeIcon icon={faUser} size="5x" className="avatar" />
        </div>
        <div className="sidebar-divider"></div>
        <ul className="sidebar-list">
          <NavItem to="/editar-perfil" icon={faUser} onClick={toggleSidebar}>
            Editar Perfil
          </NavItem>
          <NavItem to="/recetas" icon={faUtensils}  onClick={toggleSidebar}>
            Mis Recetas
          </NavItem>
          <NavItem to="/crear-receta" icon={faCog}  onClick={toggleSidebar}>
            Crear Receta
          </NavItem>
          {/* Agrega más elementos de navegación según sea necesario */}
        </ul>
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: any;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, onClick, children }) => {
  return (
    <li className="sidebar-item">
      <Link to={to} onClick={onClick}>
        <FontAwesomeIcon icon={icon} className="sidebar-icon" />
        {children}
      </Link>
    </li>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/filtro">Filtro</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default NavBar;

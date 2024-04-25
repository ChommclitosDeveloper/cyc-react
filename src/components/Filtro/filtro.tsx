import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './filtro.css';

const Filtro: React.FC = () => {
  return (
    
    <div className="filtro-container">
      <div className="go-back-button">
        <Link to="/ruta-anterior" className="icon">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Regresar</span>
        </Link>
      </div>
      <form className="filtro-form">
        <input type="text" placeholder="Buscar..." />
        <select>
          <option value="option1">Opción 1</option>
          <option value="option2">Opción 2</option>
          <option value="option3">Opción 3</option>
        </select>
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
};

export default Filtro;


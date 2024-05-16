import React from 'react';
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import './ValorNutricional.css';
import LinesChart from './BarsChart';

const ValorNutricional = () => {

  const navigate = useNavigate();

  const handleFiltroClick = () => {
    navigate('/preparacion'); // Navigate to register route on click
  };

  return (
    <div>
      <div className='botones-head'>
        <button className='regresar' onClick={handleFiltroClick}>
            <div className='icon'><TiArrowBack /></div>
            <div>Regresar</div>
        </button>
      </div>

      <div className='tabla'>
        <div className='nutricion'>
          <h1>Valor nutrional</h1>
        </div>

        <div className='button-pdf'>
          <button className='btn-pdf'>PDF</button>
        </div>

        <div className='grafico'>
          <LinesChart/>
        </div>
      </div>
    </div>
  );
};

export default ValorNutricional;
import React from 'react'
import { GiNetworkBars } from 'react-icons/gi';
import { TiArrowBack } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import './Reseña.css'

const Reseña = () => {

  const navigate = useNavigate();

  const handleFiltroClick = () => {
      navigate('/preparacion'); // Navigate to register route on click
    };
    
    const handleNutricionClick = () => {
      navigate('/nutricion'); // Navigate to register route on click
    };

  return (
    <div>
        <div className='botones-head'>
        <button className='regresar' onClick={handleFiltroClick}>
            <div className='icon'><TiArrowBack /></div>
            <div>Regresar</div>
        </button>
        <button className='valor-nutricional' onClick={handleNutricionClick}>
            <div className='icon'><GiNetworkBars /></div>
            <div>Valor Nutricional</div>
        </button>
      </div>

      <div className='tabla'>
            <div className='botones-tabla'>
                <button className='btn-preparacion' onClick={handleFiltroClick}>
                    <h1>Preparacion</h1>
                </button>
                <button className='btn-resena-historica'>
                    <h1>Reseña Historica</h1>
                </button>
            </div>

            <div className='button-pdf'>
                <button className='btn-pdf'>PDF</button>
            </div>

            <div className='resena'>
                <h1>Titulo de la reseta</h1>
                <p>Contenido sobre la receta</p>
                <img src="/" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Reseña
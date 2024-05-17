import React from 'react';
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import './ValorNutricional.css';
import LinesChart from './BarsChart';

const ValorNutricional = () => {

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);

  const handleGoBack = () => {
    navigate(-1);
    handleClose(); 
  };

  return (
    <div>
      <div className='botones-head'>
        <button className='regresar' onClick={handleGoBack}>
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
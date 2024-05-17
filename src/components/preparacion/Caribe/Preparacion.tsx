import React from 'react'
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { GiNetworkBars } from "react-icons/gi";
import './Preparacion.css'


const Preparacion = () => {

    const navigate = useNavigate();

  const handleFiltroCaribeClick = () => {
    navigate('/filtro caribe');
  };
  
  const handleNutrionClick = () => {
    navigate('/nutricion'); // Navigate to register route on click
  };

  const handleReseñaClick = () => {
    navigate('/reseña historica'); // Navigate to register route on click
  };

  return (
    <div className='fondo'>
        <div className='botones-head'>
        <button className='regresar' onClick={handleFiltroCaribeClick}>
            <div className='icon'><TiArrowBack /></div>
            <div>Regresar</div>
        </button>

        <button className='valor-nutricional' onClick={handleNutrionClick}>
            <div className='icon'><GiNetworkBars /></div>
            <div>Valor Nutricional</div>
        </button>
        </div>

        
        <div className='tabla'>
            <div className='botones-tabla'>
                <button className='preparacion' >
                    <h1>Preparacion</h1>
                </button>
                <button className='resena-historica' onClick={handleReseñaClick}>
                    <h1>Reseña Historica</h1>
                </button>
            </div>
            <div className='receta'>
                <h2>Arroz con Coco</h2>
                <p>Este plato es una deliciosa combinación de arroz cocido en leche de coco, que le da un sabor dulce y cremoso, acompañado de pescado, mariscos o carne.</p>

                <div className='ingredientes'>
                <h3>Ingredientes</h3>
                    <div className='checkboxes'>
                        <div className='radio'>
                            <input type="checkbox" name="" id="cb1"/>
                            <label htmlFor="cb1">2 tazas de arroz</label>
                        </div>
                        <div className='radio'>
                            <input type="checkbox" name="" id="cb2"/>
                            <label htmlFor="cb2">2 tazas de leche de coco</label>
                        </div>
                        <div className='radio'>
                            <input type="checkbox" name="" id="cb3"/>
                            <label htmlFor="cb3">2 tazas de agua</label>
                        </div>
                        <div className='radio'>
                            <input type="checkbox" name="" id="cb4"/>
                            <label htmlFor="cb4">1 cucharadita de sal</label>
                        </div>
                        <div className='radio'>
                            <input type="checkbox" name="" id="cb5"/>
                            <label htmlFor="cb5">1 cucharada de aceite</label>
                        </div>
                        <div className='radio'>
                            <input type="checkbox" name="" id="cb6"/>
                            <label htmlFor="cb6">Uvas pasas</label>
                        </div>
                        <div className='radio'>
                            <input type="checkbox" name="" id="cb7"/>
                            <label htmlFor="cb7">Pescado, Mariscos o Carne (opcional)</label>
                        </div>
                    </div>
                    <div className='img'>
                        <img src="arroz-de-coco-ejemplo.gif" alt="" />
                    </div>
                </div>
            </div>

            <div className='procedimiento'>
                <h2>Paso a paso: </h2>
                <p>1. En una olla grande, calienta el aceite y añade el arroz. Remueve hasta que el arroz esté ligeramente dorado.</p>
                <p>2. Agrega la leche de coco, el agua y la sal. Mezcla bien.</p>
                <p>3. Cocina a fuego medio-alto hasta que empiece a hervir, luego reduce el fuego y cocina a fuego lento, tapado, hasta que el líquido se absorba y el arroz esté tierno (aproximadamente 20 minutos).</p>
                <p>4. Sirve caliente con tu elección de pescado, mariscos o carne.</p>
                <img src="/Prueba3.png" alt="" />
                <button className='pdf'>PDF</button>
            </div>  
        </div>
    </div>
  )
}

export default Preparacion
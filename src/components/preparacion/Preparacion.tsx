import React from 'react'
import { TiArrowBack } from "react-icons/ti";
import { GiNetworkBars } from "react-icons/gi";
import './Preparacion.css'


const Preparacion = () => {
  return (
    <div>
        <div className='botones-head'>
        <button className='regresar'>
            <div className='icon'><TiArrowBack /></div>
            <div>Regresar</div>
        </button>

        <button className='valor-nutricional'>
            <div className='icon'><GiNetworkBars /></div>
            <div>Valor Nutricional</div>
        </button>
        </div>

        
        <div className='tabla'>
            <div className='botones-tabla'>
                <button className='preparacion' >
                    <h1>Preparacion</h1>
                </button>
                <button className='resena-historica'>
                    <h1>Reseña Historica</h1>
                </button>
            </div>
            <div className='receta'>
                <h2>Nombre de la Receta</h2>
                <p>Descripcion de la receta</p>

                <div className='ingredientes'>
                <h3>Ingredientes</h3>

                    <div className='radio'>
                        <label>
                            <input type="checkbox" name="option1" id=""/>
                            Ingrediente 1
                        </label>
                    </div>

                    <div className='radio'>
                        <label>
                            <input type="checkbox" name="option2" id=""/>
                            Ingrediente 2
                        </label>
                    </div>

                    <div className='radio'>
                        <label>
                            <input type="checkbox" name="option3" id=""/>
                            Ingrediente 3
                        </label>
                    </div>

                    <div className='img'>
                        <img src="ImagendeFondo.jpeg" alt="" />
                    </div>
                </div>
            </div>

            <div className='procedimiento'>
                <h2>Nombre del procedimiento</h2>
                <p>Descripcion del proceso</p>
                <img src="/Prueba3.png" alt="" />
                <button className='pdf'>PDF</button>
            </div>  
        </div>
    </div>
  )
}

export default Preparacion
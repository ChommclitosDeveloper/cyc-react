import React, { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./filtro.css";
import ControlledOpenSpeedDial from "../FloatingButton/FloatingButton";

const Filtro: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const navigate = useNavigate();

  const handlePreparacionClick = () => {
    navigate('/preparacion'); // Navigate to register route on click
  };

  // Array de imágenes de ejemplo
  const images = [
    "prueba1.png",
    "prueba2.png",
    "prueba3.png",
    // Agrega más imágenes según sea necesario
  ];

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="filtro-container">
      
      <form className="filtro-form">
        <div className="number-input">
          <label htmlFor="buscar">Nombre de la Receta:</label>
          <input type="text" id="buscar" placeholder="Buscar..." />
        </div>

        <div className="number-input2">
          <label htmlFor="horas">Duracion:</label>
          <div className="div-duracion">
            <input
              type="number"
              id="horas"
              defaultValue="0"
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <input
              type="number"
              id="minutos"
              defaultValue="0"
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="number-input">
          <label htmlFor="valoracion">Valoracion:</label>
          <select id="valoracion">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="number-input">
          <label htmlFor="dificultad">Nivel de Dificultad:</label>
          <select id="dificultad">
            <option value="Bajo">Bajo</option>
            <option value="Medio">Medio</option>
            <option value="Alto">Alto</option>
            
          </select>
        </div>


        <button type="submit"><FontAwesomeIcon icon={faSearch} /> Buscar</button>
      </form>

      <div className="card">
      <h5 className="card-title">Nombre de la Receta</h5>
      <Slider {...settings}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </Slider>
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <ul className="details">
        <li><strong>Región:</strong> Región de la receta</li>
        <li><strong>Nivel de dificultad:</strong> Fácil</li>
        <li><strong>Duración Total:</strong> 60 minutos</li>
      </ul>
      <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
    </div>
    
    </div>
  );
};

export default Filtro;

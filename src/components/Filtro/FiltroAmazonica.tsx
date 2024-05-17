import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const FiltroAmazonica = () => {

    const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const navigate = useNavigate();

  const handlePreparacionClick = () => {
    navigate('/preparacion'); // Navigate to register route on click
  };

  // Array de imágenes de ejemplo
  const images = [
    "../region_amazonica/pirarucu.jpg",
    "../region_amazonica/pirarucu2.jpg",
    "../region_amazonica/pirarucu3.png",
  ];

  const images2 = [
    "../region_amazonica/cazabe.png",
    "../region_amazonica/cazabe2.jpg",
    "../region_amazonica/cazabe3.jpg",
  ];

  const images3 = [
    "../region_amazonica/tucupi.jpg",
    "../region_amazonica/tucupi2.jpg",
    "../region_amazonica/tucupi3.jpg",
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
          <h5 className="card-title">Pirarucú</h5>
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
            <li><strong>Región:</strong> Amazonica</li>
            <li><strong>Nivel de dificultad:</strong> Medio</li>
            <li><strong>Duración Total:</strong> 60 minutos</li>
          </ul>
          <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
        </div>
    
        <div className="card">
          <h5 className="card-title">Cazabe</h5>
          <Slider {...settings}>
            {images2.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </Slider>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <ul className="details">
            <li><strong>Región:</strong> Amazonica</li>
            <li><strong>Nivel de dificultad:</strong> Bajo</li>
            <li><strong>Duración Total:</strong> 60 minutos</li>
          </ul>
          <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
        </div>
    
        <div className="card">
          <h5 className="card-title">Tucupí</h5>
          <Slider {...settings}>
            {images3.map((image, index) => (
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
            <li><strong>Región:</strong> Amazonica</li>
            <li><strong>Nivel de dificultad:</strong> Medio</li>
            <li><strong>Duración Total:</strong> 1 Hora y 30 Minutos</li>
          </ul>
          <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
        </div>
        
        </div>
    
      )
    }

export default FiltroAmazonica
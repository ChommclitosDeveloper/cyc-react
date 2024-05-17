import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

const FiltroAndina = () => {

    const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const navigate = useNavigate();

  const handlePreparacionClick = () => {
    navigate('/preparacion'); // Navigate to register route on click
  };

  // Array de imágenes de ejemplo
  const images = [
    "../region_andina/ajiaco.jpg",
    "../region_andina/ajiaco2.jpg",
    "../region_andina/ajiaco3.jpg",
    // Agrega más imágenes según sea necesario
  ];

  const images2 = [
    "../region_andina/bandeja_paisa.gif",
    "../region_andina/bandeja_paisa2.jpg",
    "../region_andina/bandeja_paisa3.png",
  ];

  const images3 = [
    "../region_andina/tamales.jpg",
    "../region_andina/tamales2.jpg",
    "../region_andina/tamales3.jfif",
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
      <h5 className="card-title">Ajiaco</h5>
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
        <li><strong>Región:</strong> Andina</li>
        <li><strong>Nivel de dificultad:</strong> Alto</li>
        <li><strong>Duración Total:</strong> 2 Horas</li>
      </ul>
      <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
    </div>

    <div className="card">
      <h5 className="card-title">Bandeja Paisa</h5>
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
        <FontAwesomeIcon icon={faStar} />
      </div>
      <ul className="details">
        <li><strong>Región:</strong> Andina</li>
        <li><strong>Nivel de dificultad:</strong> Alto</li>
        <li><strong>Duración Total:</strong> 3 Horas (por la cantidad de ingredientes)</li>
      </ul>
      <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
    </div>

    <div className="card">
      <h5 className="card-title">Tamales</h5>
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

      </div>
      <ul className="details">
        <li><strong>Región:</strong> Andina</li>
        <li><strong>Nivel de dificultad:</strong> Alto</li>
        <li><strong>Duración Total:</strong> 3 Horas</li>
      </ul>
      <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
    </div>
    
    </div>
  )
}

export default FiltroAndina
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const FiltroPacifica = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
  
    const navigate = useNavigate();
  
    const handlePreparacionClick = () => {
      navigate('/preparacion'); // Navigate to register route on click
    };
  
    // Array de imágenes de ejemplo
    const images = [
      "../region_pacifica/arroz_atollado.jfif",
      "../region_pacifica/arroz_atollado2.jfif",
      "../region_pacifica/arroz_atollado3.png",
    ];

    const images2 = [
      "../region_pacifica/encocado_pescado.jfif",
      "../region_pacifica/encocado_pescado2.jfif",
      "../region_pacifica/encocado_pescado3.jfif",
    ];

    const images3 = [
      "../region_pacifica/tamal_pingua.jpg",
      "../region_pacifica/tamal_pingua2.jpg",
      "../region_pacifica/tamal_pingua3.jpg",
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
            <h5 className="card-title">Arroz Atollado</h5>
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

            </div>
            <ul className="details">
              <li><strong>Región:</strong> Pacifica</li>
              <li><strong>Nivel de dificultad:</strong> Medio</li>
              <li><strong>Duración Total:</strong> 1 Hora y 30 Minutos</li>
            </ul>
            <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
          </div>
      
          <div className="card">
            <h5 className="card-title">Encocado de Pescado</h5>
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
              <li><strong>Región:</strong> Pacifica</li>
              <li><strong>Nivel de dificultad:</strong> Medio</li>
              <li><strong>Duración Total:</strong> 60 minutos</li>
            </ul>
            <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
          </div>
      
          <div className="card">
            <h5 className="card-title">Tamal de Pingua</h5>
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
              <li><strong>Región:</strong> Pacifica</li>
              <li><strong>Nivel de dificultad:</strong> Alto</li>
              <li><strong>Duración Total:</strong> 2 Horas</li>
            </ul>
            <button className="read-more-button" onClick={handlePreparacionClick}>Leer más</button>
          </div>
          
          </div>
      
        )
      }

export default FiltroPacifica
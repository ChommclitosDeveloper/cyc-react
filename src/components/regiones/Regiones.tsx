import React from 'react'
import './Regiones.css'
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Regiones = () => {

  const images = [
    "/region_caribe/region_caribe1.jpg",
    "/region_caribe/region_caribe2.jpg",
    "/region_caribe/region_caribe3.jpg",
    // Agrega más imágenes según sea necesario
  ];

  const images2 = [
    "/region_insular/region_insular1.jpeg",
    "/region_insular/region_insular2.jpg",
    "/region_insular/region_insular3.jpg",
  ]

  const images3 = [
    "/region_pacifica/region_pacifica1.jpg",
    "/region_pacifica/region_pacifica2.jpg",
    "/region_pacifica/region_pacifica3.jpg",
  ]

  const images4 = [
    "/region_andina/region_andina1.jpg",
    "/region_andina/region_andina2.jpg",
    "/region_andina/region_andina3.jpg",
  ]

  const images5 = [
    "/region_orinoquia/region_orinoquia1.webp",
    "/region_orinoquia/region_orinoquia2.jpg",
    "/region_orinoquia/region_orinoquia3.jfif",
  ]

  const images6 = [
    "/region_amazonica/region_amazonica1.jpg",
    "/region_amazonica/region_amazonica2.webp",
    "/region_amazonica/region_amazonica3.jpg",
  ]

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
  
  const navigate = useNavigate(); // Hook for navigation

  const handleFiltroClick = () => {
    navigate('/filtro'); // Navigate to register route on click
  };

  return (
    <div className='regiones'>

      <header className="header">
        <h1 className="title">Selecciona una región</h1>
        <p className="subtitle">Te ayudara a agilizar tu busqueda</p>
      </header>

      <div className="grid-container-regiones">

        <button className='region-item-1' onClick={handleFiltroClick}>
        <div className="">
          <h2>Region Caribe</h2>
          <p>La región Caribe de Colombia ofrece una rica variedad de platos típicos como el pescado frito, el sancocho de pescado, y el ceviche de camarón, que reflejan la influencia afrocolombiana y la cultura costera.</p>
          <Slider {...settings}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </Slider>
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Insular</h2>
          <p>La región Insular de Colombia, representada principalmente por San Andrés, Providencia y Santa Catalina, ofrece una gastronomía única que combina influencias africanas e isleñas, con platos como el rondón y el pescado a la criolla.</p>
          <Slider {...settings}>
            {images2.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </Slider>
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Pacifica</h2>
          <p>La región Pacífica de Colombia se caracteriza por su exquisita gastronomía afrocolombiana, incluyendo platos como el arroz con coco, el sancocho de pescado, y la deliciosa cazuela de mariscos.</p>
          <Slider {...settings}>
            {images3.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </Slider>
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Andina</h2>
          <p>La región Andina de Colombia ofrece una variedad de platos tradicionales como el ajiaco santafereño, la bandeja paisa, y las arepas rellenas, que reflejan la diversidad culinaria de la zona montañosa del país.</p>
          <Slider {...settings}>
            {images4.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </Slider>
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Orinoquía</h2>
          <p>La región Orinoquía ofrece una rica variedad de platos tradicionales como el mute llanero, el casabe de yuca, y la carne a la llanera, que representan la cultura y la cocina de las extensas llanuras de Colombia.</p>
          <Slider {...settings}>
            {images5.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </Slider>
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Amazónica</h2>
          <p>La región Amazónica de Colombia ofrece una gran diversidad de platos tradicionales como el tacacho con cecina, el juane de arroz, y el pescado al mojo de ajo, que reflejan la riqueza natural y cultural de la selva colombiana.</p>
          <Slider {...settings}>
            {images6.map((image, index) => (
              <img key={index} src={image} alt={`Imagen ${index + 1}`} />
            ))}
          </Slider>
        </div>
        </button>
      </div>
    </div>
  )
}

export default Regiones
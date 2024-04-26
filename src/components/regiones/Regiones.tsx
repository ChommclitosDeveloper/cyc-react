import React from 'react'
import './Regiones.css'

const Regiones = () => {
  return (
    <div className='regiones'>

      <header className="header">
        <h1 className="title">Selecciona una región</h1>
        <p className="subtitle">Te ayudara a agilizar tu busqueda</p>
      </header>

      <div className="grid-container-regiones">

        <button className='region-item-1'>
        <div className="">
          <h2>Region Caribe</h2>
          <p>La región Caribe de Colombia ofrece una rica variedad de platos típicos como el pescado frito, el sancocho de pescado, y el ceviche de camarón, que reflejan la influencia afrocolombiana y la cultura costera.</p>
          <img src="/region_caribe.jpg" alt="Imagen 1" />
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Insular</h2>
          <p>La región Insular de Colombia, representada principalmente por San Andrés, Providencia y Santa Catalina, ofrece una gastronomía única que combina influencias africanas e isleñas, con platos como el rondón y el pescado a la criolla.</p>
          <img src="/region_insular.jpeg" alt="Imagen 2" />
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Pacifica</h2>
          <p>La región Pacífica de Colombia se caracteriza por su exquisita gastronomía afrocolombiana, incluyendo platos como el arroz con coco, el sancocho de pescado, y la deliciosa cazuela de mariscos.</p>
          <img src="/region_pacifica.jpg" alt="Imagen 2" />
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Andina</h2>
          <p>La región Andina de Colombia ofrece una variedad de platos tradicionales como el ajiaco santafereño, la bandeja paisa, y las arepas rellenas, que reflejan la diversidad culinaria de la zona montañosa del país.</p>
          <img src="/region_andina.jpg" alt="Imagen 2" />
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Orinoquía</h2>
          <p>La región Orinoquía ofrece una rica variedad de platos tradicionales como el mute llanero, el casabe de yuca, y la carne a la llanera, que representan la cultura y la cocina de las extensas llanuras de Colombia.</p>
            <img src="/region_orinoquia.webp" alt="Imagen 2" />
        </div>
        </button>

        <button className='region-item-1'>
        <div className="">
          <h2>Region Amazónica</h2>
          <p>La región Amazónica de Colombia ofrece una gran diversidad de platos tradicionales como el tacacho con cecina, el juane de arroz, y el pescado al mojo de ajo, que reflejan la riqueza natural y cultural de la selva colombiana.</p>
            <img src="/region_amazonica.jpg" alt="Imagen 2" />
        </div>
        </button>

      </div>
    </div>
  )
}

export default Regiones
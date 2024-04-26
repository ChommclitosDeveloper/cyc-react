import { useNavigate } from "react-router-dom";
import './Homepage.css'

const Homepage = () => {

  const navigate = useNavigate(); // Hook for navigation

  const handleRegionesClick = () => {
    navigate('/regiones'); // Navigate to register route on click
  };

  const handlePersonalizadasClick = () => {
    navigate('/personalizadas');
  };

  return (
    
    <div className='homepage'>

      <header className="header">
        <h1 className="title">Bienvenidos a RecetasCol</h1>
        <p className="subtitle">Tu espacio favorito de recetas</p>
      </header>

      <div className="grid-container-homepage">

        <button className="grid-item-1" onClick={handleRegionesClick}>
          <div className="">
            <h2>¡Entra y conoce las recetas que tenemos para ti!</h2>
            <p>Puedes seleccionar una region de colombia para consultar las principales recetas que hay</p>
            <img src="/regiones_colombia.jpg" alt="Imagen 1" />
          </div>
        </button>
        
        <button className="grid-item-2" onClick={handlePersonalizadasClick}>
          <div className="">
            <h2>Recetas personalizadas</h2>
            <p>¡Puedes crear tus propias recetas aqui!</p>
            <img src="/recetas_personalizadas.jpeg" alt="Imagen 2" />
          </div>
        </button>

      </div>
    </div>
  )
}

export default Homepage
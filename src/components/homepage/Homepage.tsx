import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";

const Homepage = () => {
  const images = [
    "/crear_recetas/personalizadas1.jpeg",
    "/crear_recetas/personalizadas2.jpg",
    "/crear_recetas/personalizadas3.jpg",
    // Agrega más imágenes según sea necesario
  ];

  const images2 = [
    "/visitar_regiones/regiones1.jpg",
    "/visitar_regiones/regiones2.jpg",
    "/visitar_regiones/regiones3.webp",
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

  const navigate = useNavigate(); // Hook for navigation

  const handleRegionesClick = () => {
    navigate("/regiones"); // Navigate to register route on click
  };

  const handlePersonalizadasClick = () => {
    navigate("/personalizadas");
  };

  return (
    <div className="homepage">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <header className="header">
            <h1 className="title">Bienvenidos a RecetasCol</h1>
            <p className="subtitle">Tu espacio favorito de recetas</p>
          </header>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            spacing={2}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <button className="grid-item-1" onClick={handleRegionesClick}>
                <div className="">
                  <h2>¡Entra y conoce las recetas que tenemos para ti!</h2>
                  <p>
                    Puedes seleccionar una region de colombia para consultar las
                    principales recetas que hay
                  </p>
                  <Slider {...settings}>
                    {images2.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Imagen ${index + 1}`}
                      />
                    ))}
                  </Slider>
                </div>
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <button className="grid-item-2" onClick={handlePersonalizadasClick}>
            <div className="">
              <h2>Recetas personalizadas</h2>
              <p>¡Puedes crear tus propias recetas aqui!</p>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <img key={index} src={image} alt={`Imagen ${index + 1}`} />
                ))}
              </Slider>
            </div>
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;

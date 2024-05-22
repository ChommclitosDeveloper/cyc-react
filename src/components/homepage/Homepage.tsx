import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Box, Typography } from "@mui/material";
import ActionAreaCard from "../Card/Card";

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

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography fontWeight={"bold"} variant="h4" gutterBottom>
                Bienvenidos a RecetasCol
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color={"gray"} fontWeight={"bold"} variant="h6" gutterBottom>
                Tu espacio favorito de recetas
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} sx={{pl:{xs:'none', md:25,}, pr:{xs:'none', md:25,}}}>
            <Grid item xs={12} md={6}>
              <ActionAreaCard
                images={images}
                text1="¡Entra y conoce las recetas que tenemos para ti!"
                text2="Puedes seleccionar una region de colombia para consultar las principales recetas que hay"
                navigateTo="/regiones"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ActionAreaCard
                images={images2}
                text1="Recetas personalizadas"
                text2="¡Puedes crear tus propias recetas aqui!"
                navigateTo="/personalizadas"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;

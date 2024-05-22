import React from "react";
import "./Regiones.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Typography } from "@mui/material";
import ActionAreaCard from "../Card/Card";

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
  ];

  const images3 = [
    "/region_pacifica/region_pacifica1.jpg",
    "/region_pacifica/region_pacifica2.jpg",
    "/region_pacifica/region_pacifica3.jpg",
  ];

  const images4 = [
    "/region_andina/region_andina1.jpg",
    "/region_andina/region_andina2.jpg",
    "/region_andina/region_andina3.jpg",
  ];

  const images5 = [
    "/region_orinoquia/region_orinoquia1.webp",
    "/region_orinoquia/region_orinoquia2.jpg",
    "/region_orinoquia/region_orinoquia3.jfif",
  ];

  const images6 = [
    "/region_amazonica/region_amazonica1.jpg",
    "/region_amazonica/region_amazonica2.webp",
    "/region_amazonica/region_amazonica3.jpg",
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

  const handleFiltroClick = () => {
    navigate("/filtro caribe"); // Navigate to register route on click
  };

  const handleFiltroInsularClick = () => {
    navigate("/filtro insular"); // Navigate to register route on click
  };

  const handleFiltroPacificaClick = () => {
    navigate("/filtro pacifica"); // Navigate to register route on click
  };

  const handleFiltroAndinaClick = () => {
    navigate("/filtro andina"); // Navigate to register route on click
  };

  const handleFiltroOrinoquiaClick = () => {
    navigate("/filtro orinoquia"); // Navigate to register route on click
  };

  const handleFiltroAmazonicaClick = () => {
    navigate("/filtro amazonica"); // Navigate to register route on click
  };

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
                Selecciona una región
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color={"gray"}
                fontWeight={"bold"}
                variant="h6"
                gutterBottom
              >
                Te ayudara a agilizar tu busqueda
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <ActionAreaCard
                images={images}
                text1="Región Caribe"
                text2="La región Caribe de Colombia ofrece una rica variedad de platos típicos como el pescado frito, el sancocho de pescado, y el ceviche de camarón, que reflejan la influencia afrocolombiana y la cultura costera."
                navigateTo="/regiones/filtrocaribe"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ActionAreaCard
                images={images2}
                text1="Región Insular"
                text2="La región Insular de Colombia, representada principalmente por San Andrés, Providencia y Santa Catalina, ofrece una gastronomía única que combina influencias africanas e isleñas, con platos como el rondón y el pescado a la criolla."
                navigateTo="/regiones/filtroinsular"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ActionAreaCard
                images={images3}
                text1="Región Pacifica"
                text2="La región Pacífica de Colombia se caracteriza por su exquisita gastronomía afrocolombiana, incluyendo platos como el arroz con coco, el sancocho de pescado, y la deliciosa cazuela de mariscos."
                navigateTo="/regiones/filtropacifica"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ActionAreaCard
                images={images4}
                text1="Región Andina"
                text2="La región Andina de Colombia ofrece una variedad de platos tradicionales como el ajiaco santafereño, la bandeja paisa, y las arepas rellenas, que reflejan la diversidad culinaria de la zona montañosa del país."
                navigateTo="/regiones/filtroandina"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ActionAreaCard
                images={images5}
                text1="Región Orinoquía"
                text2="La región Orinoquía ofrece una rica variedad de platos tradicionales como el mute llanero, el casabe de yuca, y la carne a la llanera, que representan la cultura y la cocina de las extensas llanuras de Colombia."
                navigateTo="/regiones/filtroorinoquia"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ActionAreaCard
                images={images6}
                text1="Región Amazónica"
                text2="La región Amazónica de Colombia ofrece una gran diversidad de platos tradicionales como el tacacho con cecina, el juane de arroz, y el pescado al mojo de ajo, que reflejan la riqueza natural y cultural de la selva colombiana."
                navigateTo="/regiones/filtroamazonica"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Regiones;

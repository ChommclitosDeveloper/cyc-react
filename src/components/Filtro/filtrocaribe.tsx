import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import "./filtro.css";
import ControlledOpenSpeedDial from "../FloatingButton/FloatingButton";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import NumberInputAdornments from "../Formulario/TextNumberTwo";
import {MediaCard} from "../Card/CardFiltro";

const Filtro = () => {
  const [rating, setRating] = React.useState("");
  const [dificultad, setDificultad] = React.useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const navigate = useNavigate();

  const Valoración = (event: SelectChangeEvent) => {
    setRating(event.target.value as string);
  };

  const Difi = (event: SelectChangeEvent) => {
    setDificultad(event.target.value as string);
  };

  const handlePreparacionClick = () => {
    navigate("/preparacion"); // Navigate to register route on click
  };

  // Array de imágenes de ejemplo
  const images = [
    "../region_caribe/arroz_con_coco.JPG",
    "../region_caribe/arroz_con_coco2.JPG",
    "../region_caribe/arroz_con_coco3.JPG",
  ];

  const images2 = [
    "../region_caribe/mote_de_queso.png",
    "../region_caribe/mote_de_queso2.png",
    "../region_caribe/mote_de_queso3.png",
  ];

  const images3 = [
    "../region_caribe/arepa_de_huevo.jpg",
    "../region_caribe/arepa_de_huevo2.jpg",
    "../region_caribe/arepa_de_huevo3.jpg",
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
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              p: 1,
              bgcolor: "white",
            }}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={4} lg={2.5} xl={2}>
                <TextField
                  sx={{ bgcolor: "white" }}
                  fullWidth
                  id="outlined-basic"
                  label="Nombre de la receta"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.5} xl={2}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    border: 1,
                    borderColor: "lightgrey",
                    borderRadius: 2,
                    mt: 2,
                    bgcolor: "white",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <NumberInputAdornments adornmentText="h" />
                    </Grid>
                    <Grid item xs={6}>
                      <NumberInputAdornments adornmentText="m" />
                    </Grid>
                  </Grid>
                </Box>
                <FormHelperText>Duración de la receta</FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.5} xl={2}>
                <FormControl fullWidth sx={{ bgcolor: "white" }}>
                  <InputLabel id="demo-simple-select-label">
                    Valoración
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={rating}
                    label="Valoración"
                    onChange={Valoración}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.5} xl={2}>
                <FormControl fullWidth sx={{ bgcolor: "white" }}>
                  <InputLabel id="demo-simple-select-label">
                    Nivel de dificultad
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dificultad}
                    label="Nivel de dificultad"
                    onChange={Difi}
                  >
                    <MenuItem value={1}>Baja</MenuItem>
                    <MenuItem value={2}>Media</MenuItem>
                    <MenuItem value={3}>Alta</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 3,
                    color: "black",
                    backgroundColor: "#87CEFA", // Cambia este valor al color que desees
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#84b6f4", // Cambia este valor al color que desees para el hover
                    },
                  }}
                  startIcon={<SearchIcon />}
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <MediaCard images={images}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filtro;

import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
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
import { MediaCard } from "../Card/CardFiltro";

const FiltroPacifica = () => {
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
              <MediaCard
                images={images}
                text1="Arroz Atollado"
                text2="Pacifica"
                text3="Medio"
                text4="1 Hora y 30 Minutos"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <MediaCard
                images={images2}
                text1="Encocado de Pescado"
                text2="Pacifica"
                text3="Medio"
                text4="60 Minutos"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <MediaCard
                images={images3}
                text1="Tamal de Pingua"
                text2="Pacifica"
                text3="Alto"
                text4="2 Horas"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiltroPacifica;

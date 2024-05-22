import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Formulario from "../Formulario/formulario";

const Personalizadas = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              m: 1,
              boxShadow: 3,
              borderRadius: 2,
              p: 1,
              bgcolor: "#fffec2",
            }}
          >
            Recetas Personalizadas
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-center"
            alignItems="center"
            spacing={6}
            sx={{ pl: 1 }}
          >
            <Grid item>
              <Button
                variant="contained"
                size="large"
                sx={{
                  color:'gray',
                  backgroundColor: "#87CEFA", // Cambia este valor al color que desees
                  "&:hover": {
                    color:'white',
                    backgroundColor: "#84b6f4", // Cambia este valor al color que desees para el hover
                  },
                }}
                endIcon={<RemoveRedEyeIcon />}
              >
                Ver mis recetas
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                sx={{
                  color:'gray',
                  backgroundColor: "#98FB98", // Cambia este valor al color que desees
                  "&:hover": {
                    color:'white',
                    backgroundColor: "#77dd77", // Cambia este valor al color que desees para el hover
                  },
                }}
                endIcon={<AddIcon />}
                href="/personalizadas/formulario"
              >
                Crear receta
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              m: 1,
              boxShadow: 3,
              borderRadius: 2,
              p: 1,
            }}
          >
            <Routes>
              <Route path="formulario" element={<Formulario />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Personalizadas;

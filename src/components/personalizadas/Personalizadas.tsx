import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Formulario from "../Formulario/formulario";
import FiltroPersonalizadas from "../Filtro/FiltroPersonalizadas";

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
            justifyContent="flex-start"
            alignItems="center"
            spacing={6}
            sx={{ pl: 1 }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
                endIcon={<RemoveRedEyeIcon />}
                href="/personalizadas/filtropersonalizadas"
              >
                Ver mis recetas
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 3,
                  color: "black",
                  backgroundColor: "#98FB98", // Cambia este valor al color que desees
                  "&:hover": {
                    color: "white",
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
              boxShadow: 1,
              borderRadius: 2,
              p: 1,
              bgcolor:'white'
            }}
          >
            <Routes>
              <Route
                path="filtropersonalizadas"
                element={<FiltroPersonalizadas />}
              />
              <Route path="formulario" element={<Formulario />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Personalizadas;

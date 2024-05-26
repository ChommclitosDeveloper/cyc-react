import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";
import { HoverRating } from "./HoverRating";
import { Grid, Chip } from "@mui/material";

interface ActionAreaCardProps {
  images: string[];
  text1: string;
  text2: string;
  //navigateTo: string;
}

export const MediaCard: React.FC<ActionAreaCardProps> = ({ images, text1, text2 }) => {
  return (
    <Card sx={{ width: "100%", borderRadius: 5 }}>
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`carousel-img-${index}`} />
          </div>
        ))}
      </Carousel>
      <CardContent>
        <HoverRating valorDefecto={2} />
        <Typography gutterBottom variant="h5" fontWeight={"bold"}>
          {text1}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          <strong>Region: </strong>{text2}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          <strong>Nivel de dificultad: </strong>Baja
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          <strong>Duracion Total: </strong>1 hora y 35 minutos
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={4} md={4} lg={4} xl={4}>
            <Chip label="Delicioso" sx={{bgcolor:'#b0f2c2'}}/>
          </Grid>
          <Grid item xs={4} md={4} lg={4} xl={4}>
            <Chip label="Economico" sx={{bgcolor:'#b0f2c2'}}/>
          </Grid>
          <Grid item xs={4} md={4} lg={4} xl={4}>
            <Chip label="Facil" sx={{bgcolor:'#b0f2c2'}}/>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{alignContent:'center', justifyContent:'center'}}>
        
        <Button sx={{
                  borderRadius: 3,
                  color: "black",
                  backgroundColor: "#ffbe58", // Cambia este valor al color que desees
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#eda43d", // Cambia este valor al color que desees para el hover
                  },
                }} size="large">Ver más</Button>
      </CardActions>
    </Card>
  );
};

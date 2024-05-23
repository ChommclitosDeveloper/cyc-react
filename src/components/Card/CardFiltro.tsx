import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";
import {HoverRating} from "./HoverRating";
import { List, ListItemText, ListItem } from "@mui/material";


interface ActionAreaCardProps {
  images: string[];
  //text1: string;
  //text2: string;
  //navigateTo: string;
}

export const MediaCard: React.FC<ActionAreaCardProps> = ({images}) => {
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
        <HoverRating valorDefecto={2}/>
        <Typography gutterBottom variant="h5" fontWeight={'bold'}>
          Arroz con Coco
        </Typography>
        <List sx={{width:'100%'}} disablePadding>
          <ListItem>
            <Typography gutterBottom variant="h6" fontWeight={'bold'}>Region: </Typography>
            <ListItemText primary='Caribe'/>
            <ListItemText primary='Caribe'/>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

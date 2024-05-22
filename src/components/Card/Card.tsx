import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // importar los estilos del carrusel
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ActionAreaCardProps {
  images: string[];
  text1: string;
  text2: string;
  navigateTo: string;
}

const rippleKeyframes = keyframes`
  to {
    transform: scale(0);
  }
`;

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({
  images,
  text1,
  text2,
  navigateTo,
}) => {
  const navigate = useNavigate();
  const [rippleStyle, setRippleStyle] = React.useState<React.CSSProperties | null>(null);

  const handleClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    setRippleStyle({
      width: size,
      height: size,
      top: y,
      left: x,
      

    });

    setTimeout(() => {
      setRippleStyle(null);
      navigate(navigateTo);
    }, 500); // Tiempo para el efecto de onda
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: 5,
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        overflow: "hidden",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
           // color gris al pasar el mouse
        },
        "&:active": {
          transform: "scale(0.98)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.1s, box-shadow 0.1s",
          backgroundColor: "rgba(0, 0, 0, 0.04)", // animación más rápida al hacer clic
        },
      }}
      onClick={handleClick}
    >
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`carousel-img-${index}`} />
          </div>
        ))}
      </Carousel>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {text1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text2}
        </Typography>
      </CardContent>
      {rippleStyle && (
        <Box
          sx={{
            position: "absolute",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.3)",
            transform: "scale(1)",
            animation: `${rippleKeyframes} 0.5s linear`,
            ...rippleStyle,
          }}
        />
      )}
    </Card>
  );
};

export default ActionAreaCard;

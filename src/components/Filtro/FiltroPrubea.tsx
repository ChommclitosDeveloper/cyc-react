import * as React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // importar los estilos del carrusel
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, keyframes, Grid } from "@mui/material";
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
  const [rippleStyle, setRippleStyle] =
    React.useState<React.CSSProperties | null>(null);

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
    }, 400); // Tiempo para el efecto de onda
  };

  return (
    <Box sx={{width:'100%', height:'400px'}}>Hola</Box>
  );
};

export default ActionAreaCard;

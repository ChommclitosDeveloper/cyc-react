import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book'; // Importa un icono para la nueva acción
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <ArrowBackIcon />, name: 'Regresar' },
  { icon: <HomeIcon />, name: 'Inicio' },
  { icon: <BookIcon />, name: 'Personalizadas' } // Agrega la nueva acción
];

const ControlledOpenSpeedDial: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBack = () => {
    navigate(-1);
    handleClose();
  };

  const handleHome = () => {
    navigate('/');
    handleClose();
  };

  const handlePersonalizadas = () => {
    navigate('/personalizadas/filtropersonalizadas'); // Cambia esta ruta a la que necesites
    handleClose();
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: -25, right: 16, zIndex: 1000 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        icon={<SpeedDialIcon sx={{ color: 'black' }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        sx={{
          '& .MuiFab-primary': {
            backgroundColor: '#b2dafa',
            '&:hover': {
              backgroundColor: '#84abca',
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              if (action.name === 'Regresar') {
                handleBack();
              } else if (action.name === 'Inicio') {
                handleHome();
              } else if (action.name === 'Personalizadas') {
                handlePersonalizadas();
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ControlledOpenSpeedDial;



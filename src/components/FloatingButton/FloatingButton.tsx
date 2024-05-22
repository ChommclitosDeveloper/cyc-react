import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home'; // Importa el ícono de Home
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <ArrowBackIcon />, name: 'Back' },
  { icon: <HomeIcon />, name: 'Home' } // Agrega la acción de Home
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

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: -80, right: 16, zIndex: 1000, }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        icon={<SpeedDialIcon sx={{color:'gray'}} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        sx={{
          '& .MuiFab-primary': {
            backgroundColor: '#b2dafa', // Cambia este valor al color que desees
            '&:hover': {
              backgroundColor: '#84abca', // Cambia este valor al color que desees para el hover
            },
          },
        }}
        
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.name === 'Back' ? handleBack : handleHome}
            // Maneja la navegación según la acción
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ControlledOpenSpeedDial;


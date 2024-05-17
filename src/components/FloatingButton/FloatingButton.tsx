import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
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
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', bottom: -100, right: 16, zIndex: 1000, }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        sx={{}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.name === 'Back' ? handleBack : handleHome} // Maneja la navegación según la acción
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ControlledOpenSpeedDial;


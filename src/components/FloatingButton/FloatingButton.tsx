import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Importa el ícono de regresar
import { useNavigate } from 'react-router-dom';// Importa useHistory para manejar el historial de navegación
import { Hidden } from '@mui/material';

const actions = [
  { icon: <ArrowBackIcon />, name: 'Back' } // Agrega la acción de regresar
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // Obtiene el objeto de historial de navegación
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBack = () => {
    navigate(-1); // Usa la función goBack del objeto de historial de navegación para regresar a la página anterior
    handleClose(); // Cierra el SpeedDial después de hacer clic en "Regresar"
  };

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position:'fixed', bottom:-150, right:16, zIndex:1000, overflowY:'hidden' }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{   }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.name === 'Back' ? handleBack : handleClose} // Utiliza la nueva función de manejo de clics para "Regresar"
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

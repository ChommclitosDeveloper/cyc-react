import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import ResponsiveTextarea from "./TextArea";
import InputFileUpload from "./BotonArchivos";

interface AccordionUsageProps {
  index: number;
  handleRemove: (index: number) => void;
}

const AccordionUsage: React.FC<AccordionUsageProps> = ({
  index,
  handleRemove,
}) => {
  return (
    <Accordion sx={{ borderRadius: 5 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
        sx={{ borderRadius: 5 }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={2}>
            <TextField
              sx={{
                borderRadius: 3,
                bgcolor: "white",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
              disabled
              fullWidth
              id="Nombre Ingrediente"
              label="Orden a mostrar"
              variant="outlined"
              value={"1"}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              sx={{
                borderRadius: 3,
                bgcolor: "white",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
              fullWidth
              id="Nombre Ingrediente"
              label="Nombre del procedimiento *"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <IconButton
          size="small"
          onClick={(event) => {
            event.stopPropagation(); // Evita que el click en el botón de eliminación expanda el Accordion
            handleRemove(index);
          }}
          sx={{ marginLeft: "auto" }} // Alinea el botón al final
        >
          <DeleteIcon />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <ResponsiveTextarea descripcionArea="Descripcion del procedimiento *" />
          </Grid>
          <Grid item xs={12}>
                <InputFileUpload/>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionUsage;

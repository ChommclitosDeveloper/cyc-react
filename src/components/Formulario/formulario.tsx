import React, { useState, ChangeEvent } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Box,
  Select,
  FormHelperText,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MaxHeightTextarea from "./TextArea";
import { MultiValue } from "react-select";
import NumberInputAdornments from "./TextNumberTwo";
import TagSelector from "./Etiquetas";
import NumberInputBasic from "./TextNumberOne";
import InputFileUpload from "./BotonArchivos";
import { AddBox, AddCircleOutlined, Save } from "@mui/icons-material";
import BasicTable from "./Table";
import AccordionUsage from "./Accordion";

const steps = ["Información Basica", "Ingredientes", "Procedimientos"];

interface FormValues {
  step1Field: string;
  step2Field: string;
  step3Field: string;
}

type TagOption = {
  value: string;
  label: string;
};

const FormStepper: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<MultiValue<TagOption>>([]);

  const handleTagChange = (selectedOptions: MultiValue<TagOption>) => {
    setSelectedTags(selectedOptions);
  };
  const [age, setAge] = React.useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>({
    step1Field: "",
    step2Field: "",
    step3Field: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormValues({
      step1Field: "",
      step2Field: "",
      step3Field: "",
    });
  };

  const [procedures, setProcedures] = useState<number[]>([]);

  const handleAddProcedure = () => {
    setProcedures((prevProcedures) => [...prevProcedures, prevProcedures.length]);
  };

  const handleRemoveProcedure = (index: number) => {
    setProcedures((prevProcedures) => prevProcedures.filter((_, i) => i !== index));
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ p: 1, pt: 2 }}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      sx={{
                        borderRadius: 3,
                        bgcolor: "white",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                        },
                      }}
                      fullWidth
                      id="outlined-basic"
                      label="Nombre de la receta *"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      sx={{
                        borderRadius: 3,
                        bgcolor: "white",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                        },
                      }}
                      fullWidth
                      disabled
                      id="outlined-disabled"
                      label="Fecha de creacion de la receta *"
                      defaultValue="17/05/2024"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Region a la que pertenece *
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Region a la que pertenece *"
                        onChange={handleChange2}
                        sx={{ borderRadius: 3, bgcolor: "white" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Nivel de dificultad *
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Nivel de dificultad *"
                        onChange={handleChange2}
                        sx={{ borderRadius: 3, bgcolor: "white" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <MaxHeightTextarea descripcionArea="Descripcion de la receta *"/>
                  </Grid>
                  <Grid item xs={8}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            border: 1,
                            borderColor: "lightgrey",
                            borderRadius: 2,
                            p: 1,
                            bgcolor: "white",
                          }}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <NumberInputAdornments adornmentText="h" />
                            </Grid>
                            <Grid item xs={6}>
                              <NumberInputAdornments adornmentText="m" />
                            </Grid>
                          </Grid>
                        </Box>
                        <FormHelperText>Duracion de la receta *</FormHelperText>
                      </Grid>
                      <Grid item xs={8}>
                        <TagSelector
                          selectedTags={selectedTags}
                          handleTagChange={handleTagChange}
                        />
                        <FormHelperText>
                          Etiquetas o palabras clave
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={4}>
                        <NumberInputBasic />
                        <FormHelperText>Comensales</FormHelperText>
                      </Grid>
                      <Grid item xs={8}>
                        <InputFileUpload />
                        <FormHelperText>
                          Cargar imagen para la portada
                        </FormHelperText>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ p: 1, pt: 2 }}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
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
                      label="Nombre del ingrediente *"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <NumberInputBasic />
                    <FormHelperText>Cantidad</FormHelperText>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="¿Incluir unidad de medida?"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <NumberInputBasic />
                    <FormHelperText>
                      Cantidad(en unidad de medida) *
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Unidad de medida *
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Nivel de dificultad *"
                        onChange={handleChange2}
                        sx={{ borderRadius: 3, bgcolor: "white" }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        borderRadius: 3,
                        color: "black",
                        backgroundColor: "#ffca99", // Cambia este valor al color que desees
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#FFA07A", // Cambia este valor al color que desees para el hover
                        },
                      }}
                      startIcon={<AddCircleOutlined />}
                    >
                      Agregar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <BasicTable />
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ p: 1, pt: 2 }}>
              <Grid item xs={12}>
                <Button
                  sx={{
                    borderRadius: 3,
                    color: "black",
                    backgroundColor: "#ffca99", // Cambia este valor al color que desees
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#FFA07A", // Cambia este valor al color que desees para el hover
                    },
                  }}
                  endIcon={<AddBox />}
                  onClick={handleAddProcedure}
                >
                  Añadir procedimiento
                </Button>
              </Grid>
              {procedures.map((procedure, index) => (
                <Grid item xs={12} key={index}>
                  <AccordionUsage
                    index={index}
                    handleRemove={handleRemoveProcedure}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          m: 1,
          mb: 3,
          boxShadow: 3,
          borderRadius: 2,
          p: 1,
          bgcolor: "#fffec2",
        }}
      >
        Información para la receta
      </Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button
              sx={{
                borderRadius: 3,
                color: "black",
                backgroundColor: "#87CEFA", // Cambia este valor al color que desees
                "&:hover": {
                  color: "white",
                  backgroundColor: "#84b6f4", // Cambia este valor al color que desees para el hover
                },
              }}
              onClick={handleReset}
            >
              Guardar otra receta
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                {activeStep > 0 && (
                  <Grid item>
                    <Button
                      variant="contained"
                      color="inherit"
                      onClick={handleBack}
                      sx={{
                        borderRadius: 3,
                        color: "black",
                        backgroundColor: "#CFCFC4", // Cambia este valor al color que desees
                        "&:hover": {
                          color: "white",
                          backgroundColor: "gray", // Cambia este valor al color que desees para el hover
                        },
                      }}
                    >
                      Regresar
                    </Button>
                  </Grid>
                )}
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    borderRadius: 3,
                    color: "black",
                    backgroundColor:
                      activeStep === steps.length - 1 ? "#98FB98" : "#87CEFA", // Cambia este valor al color que desees
                    "&:hover": {
                      color: "white",
                      backgroundColor:
                        activeStep === steps.length - 1 ? "#77dd77" : "#84b6f4", // Cambia este valor al color que desees para el hover
                    },
                  }}
                  startIcon={activeStep === steps.length - 1 ? <Save /> : null}
                  variant="contained"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Guardar" : "Continuar"}
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </Box>
  );
};

export default FormStepper;

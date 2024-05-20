import React, { useState, ChangeEvent } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MaxHeightTextarea from "./TextArea";

const steps = ["Informacion Basica", "Ingredientes", "Procedimientos"];

interface FormValues {
  step1Field: string;
  step2Field: string;
  step3Field: string;
}

const FormStepper: React.FC = () => {
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

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ flexGrow: 1, p: 1 }}>
            <Grid container spacing={2} sx={{ p: 1, pt: 2 }}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Nombre de la receta *"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
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
                    <MaxHeightTextarea/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <div>
            <TextField
              name="step2Field"
              label="Step 2 Field"
              value={formValues.step2Field}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <TextField
              name="step3Field"
              label="Step 3 Field"
              value={formValues.step3Field}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </div>
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
          bgcolor: "#f4fab4",
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
            <Button onClick={handleReset}>Guardar otra receta</Button>
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
                <Button
                  variant="contained"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
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

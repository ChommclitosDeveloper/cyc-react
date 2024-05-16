import React, { useState, ChangeEvent } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, TextField, Box } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3'];

interface FormValues {
  step1Field: string;
  step2Field: string;
  step3Field: string;
}

const FormStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>({
    step1Field: '',
    step2Field: '',
    step3Field: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
      step1Field: '',
      step2Field: '',
      step3Field: '',
    });
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div>
            <TextField
              name="step1Field"
              label="Step 1 Field"
              value={formValues.step1Field}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </div>
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
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
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
            <Typography variant="h6" gutterBottom>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </Box>
  );
};

export default FormStepper;

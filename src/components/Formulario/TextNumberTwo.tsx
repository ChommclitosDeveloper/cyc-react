import * as React from "react";
import { Box, styled } from "@mui/system";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseNumberInput
      slots={{
        root: InputRoot,
        input: InputElement,
        incrementButton: Button,
        decrementButton: Button,
      }}
      slotProps={{
        incrementButton: {
          children: <span className="arrow">▴</span>,
        },
        decrementButton: {
          children: <span className="arrow">▾</span>,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

interface NumberInputAdornmentsProps {
  adornmentText: string;
}

export default function NumberInputAdornments({
  adornmentText,
}: NumberInputAdornmentsProps) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <NumberInput
      
        placeholder="0"
        endAdornment={<InputAdornment>{adornmentText}</InputAdornment>}
      />
    </Box>
  );
}

const InputAdornment = styled("div")(
  ({ theme }) => `
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  grid-row: 1/3;
  color: ${theme.palette.mode === "dark" ? grey[500] : grey[700]};
`
);

const blue = {
  100: "#DAECFF",
  200: "#B6DAFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputRoot = styled("div")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  
  color: inherit;
  background: inherit;
  
  display: grid;
  grid-template-columns: 1fr auto auto 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  padding: 4px;

  

  &:hover {
    border-color: ${blue[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const InputElement = styled("input")(
  ({ theme }) => `
  width: 100%;
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`
);

const Button = styled("button")(
  ({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 20px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  
  border: 0;
  
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 4/5;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
    border-bottom: 0;
    

    &:hover {
      cursor: pointer;
      color: #FFF;
      background: ${theme.palette.mode === "dark" ? blue[600] : blue[500]};
      border-color: ${theme.palette.mode === "dark" ? blue[400] : blue[600]};
    }
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 4/5;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    
    

    &:hover {
      cursor: pointer;
      color: #FFF;
      background: ${theme.palette.mode === "dark" ? blue[600] : blue[500]};
      border-color: ${theme.palette.mode === "dark" ? blue[400] : blue[600]};
    }
  }

  & .arrow {
    transform: translateY(-1px);
  }

  & .arrow {
    transform: translateY(-1px);
  }
`
);

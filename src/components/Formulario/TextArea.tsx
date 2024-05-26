import * as React from "react";
import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  minHeight:"200px",
  padding: "8px 12px",
  borderRadius: "8px",
  fontFamily: "IBM Plex Sans, sans-serif",
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: 1.5,
  border: `1px solid ${theme.palette.mode === "dark" ? "#6B7A90" : "#E5EAF2"}`,
  boxShadow: `0px 2px 2px ${
    theme.palette.mode === "dark" ? "#1C2025" : "#F3F6F9"
  }`,
  color: theme.palette.mode === "dark" ? "#DAE2ED" : "#1C2025",
  backgroundColor: theme.palette.mode === "dark" ? "#1C2025" : "#fff",
  resize:"vertical",
  "&:hover": {
    borderColor: "#3399FF",
  },
  "&:focus": {
    borderColor: "#3399FF",
    boxShadow: `0 0 0 3px ${
      theme.palette.mode === "dark" ? "#0072E5" : "#b6daff"
    }`,
  },
  "&:focus-visible": {
    outline: "none",
  },
}));

interface TextAreaProps {
  descripcionArea: string;
}

const ResponsiveTextarea: React.FC<TextAreaProps> = ({descripcionArea}) => {
  return (
    <StyledTextarea
      
      aria-label="maximum height"
      placeholder={descripcionArea}
    />
  );
};

export default ResponsiveTextarea;

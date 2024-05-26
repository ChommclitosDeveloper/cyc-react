import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { CardMedia } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileNameBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginLeft: "16px",
});

const FileNameText = styled("span")({
  marginRight: "8px",
});

const ModalBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function InputFileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).slice(0, 3);
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const handleFileRemove = (fileToRemove: File) => {
    setSelectedFiles(selectedFiles.filter((file) => file !== fileToRemove));
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box display="flex" alignItems="center">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        disabled={selectedFiles.length >= 3}
      >
        Cargar
        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
      </Button>
      {selectedFiles.length > 0 && (
        <IconButton color="primary" onClick={handleOpenModal}>
          <CloudUploadIcon />
        </IconButton>
      )}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        
      >
        <Box sx={ModalBox}>
          {selectedFiles.map((file, index) => (
            <Box key={index} sx={{ position: "relative", marginBottom: 2 }}>
              <CardMedia
                component="img"
                image={URL.createObjectURL(file)}
                alt={`selected-file-${index}`}
                sx={{ width: 100, height: 100, objectFit: "cover", marginRight: 2 }}
              />
              <FileNameBox
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  
                  borderRadius: 2,
                  p: 1,
                  bgcolor: "white",
                }}
              >
                <FileNameText>{file.name}</FileNameText>
                <IconButton size="small" onClick={() => handleFileRemove(file)}>
                  <DeleteIcon />
                </IconButton>
              </FileNameBox>
            </Box>
          ))}
          <Button onClick={handleCloseModal} variant="contained">
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

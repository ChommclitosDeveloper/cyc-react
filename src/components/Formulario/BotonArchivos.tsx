import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileNameBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '16px',
});

const FileNameText = styled('span')({
  marginRight: '8px',
});

export default function InputFileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  return (
    <Box display="flex" alignItems="center">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Cargar
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
        />
      </Button>
      {selectedFile && (
        <FileNameBox>
          <FileNameText>{selectedFile.name}</FileNameText>
          <IconButton size="small" onClick={handleFileRemove}>
            <DeleteIcon />
          </IconButton>
        </FileNameBox>
      )}
    </Box>
  );
}


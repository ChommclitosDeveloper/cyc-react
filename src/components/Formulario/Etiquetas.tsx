import React from 'react';
import Select, { MultiValue, StylesConfig } from 'react-select';
import { Box } from '@mui/material';

// Definición del tipo para las opciones de etiqueta
type TagOption = {
  value: string;
  label: string;
};

// Opciones de etiquetas predefinidas (puedes modificar esto según tus necesidades)
const tagOptions: TagOption[] = [
  { value: 'vegetarian', label: 'Vegetariana' },
  { value: 'vegan', label: 'Vegana' },
  { value: 'glutenFree', label: 'Sin Gluten' },
  { value: 'dairyFree', label: 'Sin Lácteos' },
  { value: 'keto', label: 'Keto' },
  // Agrega más etiquetas aquí
];

interface TagSelectorProps {
  selectedTags: MultiValue<TagOption>;
  handleTagChange: (selectedOptions: MultiValue<TagOption>) => void;
}

const customStyles: StylesConfig<TagOption, true> = {
  container: (base) => ({
    ...base,
    width: '100%',
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: 'lightskyblue',
    borderRadius: 10 // Color de fondo de las etiquetas seleccionadas
  }),
};

const TagSelector: React.FC<TagSelectorProps> = ({ selectedTags, handleTagChange }) => {
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Select
        isMulti
        options={tagOptions}
        value={selectedTags}
        onChange={handleTagChange}
        placeholder="Selecciona etiquetas..."
        styles={customStyles}
      />
    </Box>
  );
};

export default TagSelector;


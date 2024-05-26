import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(
  orden: number,
  nombre: string,
  cantidad: number,
  cantidadU: number,
  unidad: string,
) {
  return { orden, nombre, cantidad, cantidadU, unidad };
}

const rows = [
  createData(1, 'Huevo', 2, 24, 'Gramos'),
  createData(2, 'Agua', 1, 50, 'Mililitros'),
];

export default function BasicTable() {
  const handleDelete = (id: number) => {
    // Lógica para manejar la eliminación de un ingrediente
    console.log(`Eliminar ingrediente con orden: ${id}`);
  };

  const handleEdit = (id: number) => {
    // Lógica para manejar la edición de un ingrediente
    console.log(`Editar ingrediente con orden: ${id}`);
  };

  return (
    <TableContainer component={Box} sx={{ bgcolor: 'white', boxShadow: 5, borderRadius: 5 }}>
      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Orden del ingrediente</TableCell>
            <TableCell align="center">Nombre del ingrediente</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Cantidad (en unidad de medida)</TableCell>
            <TableCell align="center">Unidad de medida</TableCell>
            <TableCell align="center">Acciones</TableCell> {/* Nueva columna para los IconButton */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orden}>
              <TableCell align="center">{row.orden}</TableCell>
              <TableCell align="center">{row.nombre}</TableCell>
              <TableCell align="center">{row.cantidad}</TableCell>
              <TableCell align="center">{row.cantidadU}</TableCell>
              <TableCell align="center">{row.unidad}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleEdit(row.orden)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.orden)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


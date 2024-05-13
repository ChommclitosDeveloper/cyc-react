import React, { useState } from 'react';

const Formulario: React.FC = () => {
  // Estado para almacenar los datos del formulario en las tres páginas
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
  });

  // Estado para controlar la página actual del formulario
  const [currentPage, setCurrentPage] = useState(1);

  // Función para manejar los cambios en los inputs del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar los datos del formulario a un servidor o hacer lo que necesites con ellos
    console.log('Datos del formulario:', formData);
  };

  // Función para avanzar a la siguiente página del formulario
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Función para retroceder a la página anterior del formulario
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Renderizado condicional de las páginas del formulario
  let formPage;
  switch (currentPage) {
    case 1:
      formPage = (
        <div>
          <h2>Página 1</h2>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
          <br />
          <button onClick={goToNextPage}>Siguiente</button>
        </div>
      );
      break;
    case 2:
      formPage = (
        <div>
          <h2>Página 2</h2>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} />
          <br />
          <button onClick={goToPreviousPage}>Anterior</button>
          <button onClick={goToNextPage}>Siguiente</button>
        </div>
      );
      break;
    case 3:
      formPage = (
        <div>
          <h2>Página 3</h2>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          <br />
          <button onClick={goToPreviousPage}>Anterior</button>
          <button type="submit">Guardar</button>
        </div>
      );
      break;
    default:
      formPage = null;
  }

  return (
    <form onSubmit={handleSubmit}>
      {formPage}
    </form>
  );
};

export default Formulario;

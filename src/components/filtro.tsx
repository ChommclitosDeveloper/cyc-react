import React from 'react';


const Filtro: React.FC = () => {
  return (
    <div className="filtro-container">
      <form className="filtro-form">
        <input type="text" placeholder="Buscar..." />
        <select>
          <option value="option1">Opción 1</option>
          <option value="option2">Opción 2</option>
          <option value="option3">Opción 3</option>
        </select>
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
};

export default Filtro;

import React from 'react';
import './ViewEjercicio.css';

const ViewEjercicio = ({ ejercicio, onDelete }) => {
    const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este ejercicio?')) {
      onDelete(ejercicio.id_ejercicio);
    }
  };
  return (
    <div className="ejercicio-container">
      <div className="ejercicio-card">
        {ejercicio.foto && (
          <img
            src={`http://localhost/linkia/Gym-Jean/back-proyecto/uploads/${ejercicio.foto}`}
            alt={ejercicio.nombre_ejercicio}
            className="imagen-ejercicio"
            width="200px"
          />
        )}
        <p><strong>Ejercicio:</strong> {ejercicio.nombre_ejercicio}</p>
        <p><strong>Descripción:</strong> {ejercicio.descripcion_ejercicio}</p>
        <p><strong>Series:</strong> {ejercicio.series}</p>
        <button onClick={handleDelete} className="boton-eliminar">Eliminar</button>
      </div>
    </div>
  );
};

export default ViewEjercicio;

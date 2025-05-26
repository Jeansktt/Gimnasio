import React from 'react';
import './ViewEjercicioUser.css';

const ViewEjercicioUser = ({ ejercicio }) => {
    
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
        
      </div>
    </div>
  );
};

export default ViewEjercicioUser;
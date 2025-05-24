import React from 'react';
import './ViewReservas.css';
const ViewReservas = ({ reservas }) => {
  return (
    <div className="valoracion-container">
      <h2></h2>
    <div className='valoracion-card'>
      
      
      <p><strong>Reseña de:</strong> {reservas.username}</p>
      <p><strong>Al monitor con id:</strong> {reservas.id_monitor}</p>
      <p><strong>Puntuación:</strong> {reservas.puntuacion}</p>
      
    </div>
    </div>
  );
};

export default ViewReservas;
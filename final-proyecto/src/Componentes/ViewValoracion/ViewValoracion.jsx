import React from 'react';
import './ViewValoracion.css';
const ViewValoracion = ({ valoracion }) => {
  return (
    <div className="valoracion-container">
      <h2></h2>
    <div className='valoracion-card'>
      
      
      <p><strong>Reseña de:</strong> {valoracion.username}</p>
      <p><strong>Al monitor con id:</strong> {valoracion.id_monitor}</p>
      <p><strong>Puntuación:</strong> {valoracion.puntuacion}</p>
      <p><strong>Fecha:</strong> {new Date(valoracion.fecha_valoracion).toLocaleDateString()}</p>
      <p><strong>Comentario:</strong> {valoracion.comentario}</p>
    </div>
    </div>
  );
};

export default ViewValoracion;
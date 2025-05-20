import React from 'react';

const ViewValoracion = ({ valoracion }) => {
  return (
    <div className="valoracion-card">
      <p><strong>ID Usuario:</strong> {valoracion.id_usuario}</p>
      <p><strong>ID Monitor:</strong> {valoracion.id_monitor}</p>
      <p><strong>Puntuación:</strong> {valoracion.puntuacion}</p>
      <p><strong>Fecha:</strong> {new Date(valoracion.fecha_valoracion).toLocaleDateString()}</p>
      <p><strong>Comentario:</strong> {valoracion.comentario}</p>
    </div>
  );
};

export default ViewValoracion;
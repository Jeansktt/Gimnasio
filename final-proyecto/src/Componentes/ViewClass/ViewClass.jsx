import React from 'react';

const ViewClass = ({ gymClass }) => {
  return (
    <div className="class-card">
      <h3>{gymClass.nombre_clase}</h3>
      <p>Fecha: {new Date(gymClass.fecha).toLocaleString()}</p>
      <p>Descripcion: {gymClass.descripcion} </p>
      <p>Monitor de la clase: {gymClass.nombre}</p>
    </div>
  );
};

export default ViewClass;

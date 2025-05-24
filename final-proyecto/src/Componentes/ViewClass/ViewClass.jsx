import React from 'react';
import './ViewClass.css';
import { Link } from 'react-router-dom';

const ViewClass = ({ gymClass }) => {
  return (
    <div className='classes-container'>
    
    <div className="class-card" key={gymClass.id_clases}>
      
      <h3>{gymClass.nombre_clase}</h3>
      <p>ID: {gymClass.id_clases}</p>
      <p>Fecha: {new Date(gymClass.fecha).toLocaleString()}</p>
      <p>Descripcion: {gymClass.descripcion} </p>
      <p>Monitor de la clase: {gymClass.nombre}</p>
      <Link to="/">Reservar</Link>
    </div>
    </div>
  );
};

export default ViewClass;

import React from 'react';
import './ViewReservas.css';

const ViewReservas = ({ reserva }) => {
  return (
    <div className='body-reservas'>
    <div className="tarjeta-clase">
      <h3>{reserva.nombre_clase}</h3>
      <p><strong>Usuario:</strong> {reserva.username}</p>
    </div>
    </div>
  );
};

export default ViewReservas;

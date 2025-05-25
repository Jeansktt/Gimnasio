import React from 'react';
//import './ViewReserva.css';

const ViewReservas = ({ reserva }) => {
  return (
    <div className="tarjeta-clase">
      <h3>{reserva.nombre_clase}</h3>
      <p><strong>Usuario:</strong> {reserva.username}</p>
    </div>
  );
};

export default ViewReservas;

import React from 'react';
import './MonitorPage.css';

const MonitorPage = ({ monitor }) => {
     if (!monitor) return null;
    console.log("Monitor recibido:", monitor);
  return (
    <div className='contenedor-monitor'>
    <div className="monitor-card">
      <h3 className='info-monitor'>{monitor.nombre}</h3>
      <p className='info-monitor'>ID:{monitor.id_monitor}</p>
      <p className='info-monitor'>Username: {monitor.username}</p>
    </div>
    </div>
  );
};

export default MonitorPage;
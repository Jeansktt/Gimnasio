import React, { useEffect, useState } from 'react';
import MonitorPage from '../../Componentes/MonitorPage/MonitorPage';
import './getMonitor.css';
import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';

const ViewMonitorPage = () => {
  const [monitores, setMonitores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/monitores.php')
      .then((res) => res.json())
      .then((data) => {
        console.log('Respuesta del fetch:', data);
        if (data.status === 'Success') {
          setMonitores(data.data.monitores);
        } else {
          console.error('Error al obtener usuarios:', data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar usuarios:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando monitores...</p>;

  return (
    <div>
        <div className='menu'>
    <MenuUsuario></MenuUsuario>
        </div>
    <div className='titulo-monitor'>
        
        <h2>Monitores del Gimnasio</h2>
    </div>
    <div className='monitor'>
      {monitores.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        monitores.map((monitor) => (
          <MonitorPage key={monitor.id_usuario} monitor={monitor} />
        ))
      )}
    </div>
    
    </div>
  );
};

export default ViewMonitorPage;

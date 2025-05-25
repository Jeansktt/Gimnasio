import React, { useEffect, useState } from 'react';
//import './ViewClassPage.css'; // Reutilizamos tu CSS
import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';
import './ViewReservasPage.css';
const ViewReservasPage = () => {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/ver_reservas.php')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          setReservas(data.data.reservas);
        } else {
          console.error('Error al obtener reservas:', data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar reservas:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando reservas...</p>;

  return (
    <div>
      <div className='items-usuario'>
        <div className='menu'>
          <MenuMonitor />
        </div>
      </div>
      <h2 className='titulo-reservas'>Mis Reservas</h2>
      <div className='contenedor-reservas'>
  {reservas.length === 0 ? (
    <p>No hay reservas registradas.</p>
  ) : (
    Object.entries(
      reservas.reduce((acc, reserva) => {
        const { nombre_clase, username } = reserva;
        if (!acc[nombre_clase]) acc[nombre_clase] = new Set();
        acc[nombre_clase].add(username);
        return acc;
      }, {})
    ).map(([nombreClase, usuarios]) => (
      <div key={nombreClase} className="tarjeta-reservas">
        <h3 className='texto-reservas'>Clase: {nombreClase}</h3>
        <p className='texto-reservas'>Usuarios apuntados:</p>
        <ul className='texto-reservas'>
          {[...usuarios].map((username, index) => (
            <li className='texto-reservas' key={index}>{username}</li>
          ))}
        </ul>
      </div>
    ))
  )}
</div>

    </div>
  );
};

export default ViewReservasPage;

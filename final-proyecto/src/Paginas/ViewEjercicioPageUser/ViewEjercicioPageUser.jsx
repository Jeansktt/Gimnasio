import React, { useEffect, useState } from 'react';
import './ViewEjercicioPageUser.css';
import deleteEjercicio from '../../servicios/deleteEjercicio';
import ViewEjercicioUser from '../../Componentes/ViewEjerciciosUser/ViewEjercicioUser';
import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';

const ViewEjercicioUserPage = () => {
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/ver_ejercicios.php')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Respuesta backend:', data); 
        if (data.status === 'Success' && Array.isArray(data.data.classes)) {
          setEjercicios(data.data.classes);
          setError(null);
        } else {
          setEjercicios([]);
          setError(data.message || 'Error desconocido al obtener ejercicios');
        }
      })
      .catch((err) => {
        console.error('Error al cargar ejercicios:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);
    const handleDelete = async (id_ejercicio) => {
    try {
      await deleteEjercicio(id_ejercicio);
      setEjercicios(prev => prev.filter(e => e.id_ejercicio !== id_ejercicio));
    } catch (err) {
      alert('No se pudo eliminar el ejercicio.');
    }
  };
  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <MenuUsuario></MenuUsuario>
      <h2 className='titulo-ejercicios'>Ejercicios</h2>
      <div className='contenedor-ejercicios'>
        {ejercicios.length === 0 ? (
          <p>No hay ejercicios disponibles.</p>
        ) : (
          ejercicios.map((ejercicio) => (
            <ViewEjercicioUser key={ejercicio.id_ejercicio} ejercicio={ejercicio}/>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewEjercicioUserPage;

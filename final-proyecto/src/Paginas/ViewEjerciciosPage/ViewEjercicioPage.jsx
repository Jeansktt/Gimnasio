import React, { useEffect, useState } from 'react';
import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';
import ViewEjercicio from '../../Componentes/ViewEjercicios/ViewEjercicio';
import './ViewEjercicioPage.css';
import deleteEjercicio from '../../servicios/deleteEjercicio';

const ViewEjercicioPage = () => {
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
        console.log('Respuesta backend:', data); // Mira qué llega aquí
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
      <MenuMonitor />
      <h2 className='titulo-ejercicios'>Ejercicios</h2>
      <div className='contenedor-ejercicios'>
        {ejercicios.length === 0 ? (
          <p>No hay ejercicios disponibles.</p>
        ) : (
          ejercicios.map((ejercicio) => (
            <ViewEjercicio key={ejercicio.id_ejercicio} ejercicio={ejercicio} onDelete={handleDelete}/>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewEjercicioPage;




import React, { useEffect, useState } from 'react';
import ViewClass from '../../Componentes/ViewClass/ViewClass';

const ViewClassPage = () => {
  const [clases, setClases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/obtenerclases.php')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          setClases(data.data.classes);
        } else {
          console.error('Error al obtener clases:', data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar clases:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando clases...</p>;

  return (
    <div>
      <h2>Clases disponibles</h2>
      {clases.length === 0 ? (
        <p>No hay clases disponibles.</p>
      ) : (
        clases.map((clase) => (
          <ViewClass key={clase.id_clase} gymClass={clase} />
        ))
      )}
    </div>
  );
};

export default ViewClassPage;

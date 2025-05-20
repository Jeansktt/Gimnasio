import React, { useEffect, useState } from 'react';
import ViewValoracion from '../../Componentes/ViewValoracion/ViewValoracion';

const ViewValoracionPage = () => {
  const [valoraciones, setValoraciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/ver_valoracion.php')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'Success') {
          setValoraciones(data.data.valoraciones);
        } else {
          console.error('Error al obtener valoraciones:', data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al cargar valoraciones:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando valoraciones...</p>;

  return (
    <div>
      <h2>Valoraciones disponibles</h2>
      {valoraciones.length === 0 ? (
        <p>No hay valoraciones disponibles.</p>
      ) : (
        valoraciones.map((valoracion) => (
          <ViewValoracion key={valoracion.id_valoracion} valoracion={valoracion} />
        ))
      )}
    </div>
  );
};

export default ViewValoracionPage;

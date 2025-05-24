import React, { useEffect, useState } from 'react';
import ViewClass from '../../Componentes/ViewClass/ViewClass';
import './ViewClassPage.css';
import { Link } from 'react-router-dom';
import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';

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
    
    <div >
      <div className='items-usuario'>
        <div className='menu'>
            <MenuUsuario></MenuUsuario>
           </div>
      </div>      
      <h2  className='titulo-clases'>Clases</h2>
      <div  className='contenedor-clases'>
      {clases.length === 0 ? (
        <p>No hay clases disponibles.</p>
      ) : (
        clases.map((clase) => (
          <ViewClass key={clase.id_clase} gymClass={clase} />
          
        ))
      )}
      
    </div>
    </div>
  );
};

export default ViewClassPage;

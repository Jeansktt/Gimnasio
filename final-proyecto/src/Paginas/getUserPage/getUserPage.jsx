import React, { useEffect, useState } from 'react';
import UserPage from '../../Componentes/UserPage/UserPage';
import './getUserPage.css';
import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';

const ViewUserPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/getUsuario.php')
      .then((res) => res.json())
      .then((data) => {
        console.log('Respuesta del fetch:', data);
        if (data.status === 'Success') {
          setUsuarios(data.data.usuarios);
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

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div className='body-usuario'>
      <MenuMonitor></MenuMonitor>
      <h2 className='titulo-users'>Usuarios registrados</h2>
    <div className='container-usuarios'>
      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        usuarios.map((usuario) => (
          <UserPage key={usuario.id_usuario} user={usuario} />
        ))
      )}
    </div>  
    </div>
  );
};

export default ViewUserPage;

import ClassForm from '../../Componentes/ClassForm/ClassForm';
import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';

import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ClassPage = () => {
  const { token } = useAuth();

  // Si no hay token, redirige a la página de login
  if (!token) return <Navigate to='/login' />;

  return (
    <main className='clase'>
      <MenuMonitor></MenuMonitor>
      <ClassForm />
    </main>
  );
};

export default ClassPage;


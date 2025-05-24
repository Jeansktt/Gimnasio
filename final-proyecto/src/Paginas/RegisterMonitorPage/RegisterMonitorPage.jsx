import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';
import RegisterFormMonitor from '../../Componentes/RegisterFormMonitor/RegisterFormMonitor';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ClassPage = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to='/' />; // Redirige si no hay token

  return (
    <main className='clase'>
      <MenuMonitor></MenuMonitor>
      <RegisterFormMonitor/>
    </main>
  );
};

export default ClassPage;

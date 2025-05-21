import RegisterFormMonitor from '../../Componentes/RegisterFormMonitor/RegisterFormMonitor';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ClassPage = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to='/' />; // Redirige si no hay token

  return (
    <main className='clase'>
      <h2>Crear nueva clase</h2>
      <RegisterFormMonitor/>
    </main>
  );
};

export default ClassPage;

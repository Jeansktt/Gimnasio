import ValoracionForm from '../../Componentes/ValoracionForm/valoracionForm';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';


const Valoracionpage = () => {
    const { token } = useAuth();

  // Si no hay token, redirige a la página de login
  if (!token) return <Navigate to='/login' />;

  return (
    <main className='valoracion'>
      <h2>Poner una valoracion</h2>
      <ValoracionForm />
    </main>
  );

};

export default Valoracionpage;
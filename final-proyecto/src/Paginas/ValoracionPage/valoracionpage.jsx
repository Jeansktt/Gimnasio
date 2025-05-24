import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';
import ValoracionForm from '../../Componentes/ValoracionForm/valoracionForm';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';


const Valoracionpage = () => {
    const { token } = useAuth();

  // Si no hay token, redirige a la página de login
  if (!token) return <Navigate to='/' />;

  return (
    <main className='valoracion'>
      
      <MenuUsuario></MenuUsuario>
      <ValoracionForm />
    </main>
  );

};

export default Valoracionpage;
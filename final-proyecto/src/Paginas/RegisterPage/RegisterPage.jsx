import RegisterForm from '../../Componentes/RegisterForm/RegisterForm';

import { Navigate } from 'react-router-dom';

const ClassPage = () => {
  //const { token } = useAuth();
  //if (!token) return <Navigate to='/login' />; // Redirige si no hay token
  
  return (
    <main className='clase'>
      
      <RegisterForm />
    </main>
  );
};

export default ClassPage;

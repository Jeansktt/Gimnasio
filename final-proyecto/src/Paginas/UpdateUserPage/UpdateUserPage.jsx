import UpdateUser from '../../Componentes/UpdateUser/UpdateUser';
import { Navigate } from 'react-router-dom';

const UpdateUserPage = () => {
  //const { token } = useAuth();
  //if (!token) return <Navigate to='/login' />; // Redirige si no hay token

  return (
    <main className='clase'>
      
      <UpdateUser />
    </main>
  );
};

export default UpdateUserPage;
import UpdateUser from '../../Componentes/UpdateUser/UpdateUser';
import { Navigate } from 'react-router-dom';
import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';
const UpdateUserPage = () => {
  //const { token } = useAuth();
  //if (!token) return <Navigate to='/login' />; // Redirige si no hay token

  return (
    <main className='clase'>
      <MenuMonitor></MenuMonitor>
      <UpdateUser />
    </main>
  );
};

export default UpdateUserPage;
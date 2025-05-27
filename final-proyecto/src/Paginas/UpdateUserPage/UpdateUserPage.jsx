import UpdateUser from '../../Componentes/UpdateUser/UpdateUser';
import { Navigate } from 'react-router-dom';
import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';
const UpdateUserPage = () => {

  return (
    <main className='clase'>
      <MenuMonitor></MenuMonitor>
      <UpdateUser />
    </main>
  );
};

export default UpdateUserPage;
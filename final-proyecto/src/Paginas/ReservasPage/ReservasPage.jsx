import { Navigate } from 'react-router-dom';
import ReservaForm from '../../Componentes/ReservasForm/ReservasForm';
import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';

const ReservasPage = () => {

  return (
    
    <main className='clase'>
      <MenuUsuario></MenuUsuario>
      <ReservaForm />
    </main>
  );
};

export default ReservasPage;
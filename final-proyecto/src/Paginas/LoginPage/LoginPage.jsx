// pages/LoginPage.jsx
import LoginForm from '../../Componentes/LoginForm/LoginForm';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { token, login } = useAuth();
//si hay token que te lleve a otra pagina que quiera
  if (token) return <Navigate to='/home' />;

  return (
    <main className='Login'>
      <h2>Iniciar Sesión</h2>
      <LoginForm login={login} />
    </main>
  );
};

export default LoginPage;

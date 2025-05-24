// pages/LoginPage.jsx
import LoginForm from '../../Componentes/LoginForm/LoginForm';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { token, user,login } = useAuth();
//si hay token que te lleve a otra pagina que quiera
  if (token && user) {
    if (user.rol === 'usuario') return <Navigate to="/home" />;
    if (user.rol === 'monitor') return <Navigate to="/home-monitor" />;
    return <Navigate to="/home" />; // Fallback por si acaso
  }

  return (
    <main className='Login'>
      
      <LoginForm login={login} />
    </main>
  );
};

export default LoginPage;

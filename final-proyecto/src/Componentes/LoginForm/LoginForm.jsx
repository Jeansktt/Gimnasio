// components/LoginForm/LoginForm.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import imgLogin from '../../imagenes/img-login.jpg';

const LoginForm = ({ login }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ user, pass });

    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div className='container-login'>
    <div className='div-login'>
      <img src={imgLogin} width="300px"/>
      <h2>Login</h2>
    <form onSubmit={handleSubmit} className='form-login'>
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className='user-login'
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className='pass-login'
      />
      <button type="submit" className='button-login'>Iniciar Sesión</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Link to="/register">Registrarse</Link>
    </form>
    </div>
    </div>
  );
};

export default LoginForm;

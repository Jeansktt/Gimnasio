import { useState } from 'react';
import registerServiceMonitor from '../../servicios/registerServiceMonitor';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import './RegisterFormMonitor.css';
const RegisterForm = () => {
  const navigate = useNavigate();
  const[name, setName]=useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await registerServiceMonitor(name, email,username, password);

      navigate('/home-monitor');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='container-register-monitor'>
      <div className='div-register-monitor'>

      
    <form className="formulario-monitor-register" onSubmit={handleSubmit}>
      <h2 className='titulo-registro-monitor'>Registra Nuevo Monitor</h2>
      <label htmlFor='nombre'>Nombre:</label>
      <input
        type='text'
        id='nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
        required
        className='campos-register'
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        required
        className='campos-register'
      />
      <label htmlFor='username'>Usuario:</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
        required
        className='campos-register'
      />
      <label htmlFor='password'>Contraseña:</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        required
        className='campos-register'
      />
      <button className='button-registro-monitor'>Registrarse</button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
    </div>
    </div>
  );
};
export default RegisterForm;
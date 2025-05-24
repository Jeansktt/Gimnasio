import { useState } from 'react';
import registerService from '../../servicios/registerService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import imgRegister from '../../imagenes/img-register.jpg';
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
      await registerService(name, email,username, password);

      navigate('/');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='container-register'>
    <div className='div-register'>
      <img src={imgRegister} width="300px"/>
    <form onSubmit={handleSubmit} className='form-register'>
      <h2>¡Registrate!</h2>
      <label htmlFor='nombre'>Nombre:</label>
      <input
        type='text'
        id='nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
        required
        className='input-register'
        placeholder='Nombre'
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        required
        className='input-register'
        placeholder='Email'
      />
      <label htmlFor='username'>Usuario:</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
        required
        className='input-register'
        placeholder='Usuario'
      />
      <label htmlFor='password'>Contraseña:</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        required
        className='input-register'
        placeholder='Contraseña'
      />
      <button className='button-register'>Registrarse</button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
    </div>
    </div>
  );
};
export default RegisterForm;
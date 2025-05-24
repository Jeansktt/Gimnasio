import { useState,useEffect } from 'react';
import valoracionService from '../../servicios/valoracionService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import './ValoracionForm.css';
import useAuth from '../../hooks/useAuth';

const ValoracionForm = () => {
  const navigate = useNavigate();
  const[id_usuario, setid_usuario]=useState('');
  const [id_monitor, setid_monitor] = useState('');
  const [puntuacion, setpuntuacion] = useState('');
 // const [fecha_valoracion, setfecha] = useState('');
  const [comentario, setcomentario] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const {user } = useAuth();

  useEffect(() => {
    if (user?.id_usuario) {
      setid_usuario(user.id_usuario);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    if (!id_usuario || !id_monitor || !puntuacion || !comentario) {
      setErrMsg("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      e.preventDefault();
      setLoading(true);
      await valoracionService(id_usuario, id_monitor,puntuacion, comentario);

      navigate('/home');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='container-valoracion'>
      <div className='div-valoracion'>
    <form className="form-valoracion" onSubmit={handleSubmit}>
      <h2>Valoracion</h2>
      <label htmlFor='id_usuario'>Tu ID:</label>
      <input
          className='campo-reservas'
            type="text"
            readOnly
            value={user.id_usuario}
            onChange={(e) => setid_usuario(e.target.value)}
            required
            
          />
      <label htmlFor='id_monitor'>ID del monitor:</label>
      <input
        type='text'
        className='id_monitor'
        value={id_monitor}
        onChange={(e) => setid_monitor(e.target.value)}
        autoFocus
        required
      />
      <label htmlFor='puntuacion'>Puntuacion:</label>
      <select id='valoracion' onChange={(e) => setpuntuacion(e.target.value)}
        autoFocus
        required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
     
      
    <label htmlFor='comentario'>Comentario:</label>
      <input
        type='text'
        className='comentario'
        value={comentario}
        onChange={(e) => setcomentario(e.target.value)}
        autoFocus
        required
      />
      <button className='button-enviar'>Enviar</button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
    </div>
    </div>
  );
};
export default ValoracionForm;
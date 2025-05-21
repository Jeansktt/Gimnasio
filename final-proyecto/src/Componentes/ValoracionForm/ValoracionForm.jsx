import { useState } from 'react';
import valoracionService from '../../servicios/valoracionService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
const ValoracionForm = () => {
  const navigate = useNavigate();
  const[id_usuario, setid_usuario]=useState('');
  const [id_monitor, setid_monitor] = useState('');
  const [puntuacion, setpuntuacion] = useState('');
  const [fecha_valoracion, setfecha] = useState('');
  const [comentario, setcomentario] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (!id_usuario || !id_monitor || !puntuacion || !fecha_valoracion|| !comentario) {
      setErrMsg("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      e.preventDefault();
      setLoading(true);
      await valoracionService(id_usuario, id_monitor,puntuacion, fecha_valoracion, comentario);

      navigate('/home');
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Valoracion</h2>
      <label htmlFor='id_usuario'>Tu ID:</label>
      <input
        type='text'
        id='id_usuario'
        //value={name}
        onChange={(e) => setid_usuario(e.target.value)}
        autoFocus
        required
      />
      <label htmlFor='id_monitor'>ID del monitor:</label>
      <input
        type='text'
        id='id_monitor'
        //value={email}
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
     
      <label htmlFor="fecha">Fecha:</label>
    <input
        type="date"
        id="fecha"
        onChange={(e) => setfecha(e.target.value)}
        autoFocus
        required
    />
    <label htmlFor='comentario'>Comentario:</label>
      <input
        type='text'
        id='comentario'
        //value={email}
        onChange={(e) => setcomentario(e.target.value)}
        autoFocus
        required
      />
      <button>Enviar</button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
  );
};
export default ValoracionForm;
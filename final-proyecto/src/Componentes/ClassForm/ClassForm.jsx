import { useState } from 'react';
import createClass from '../../servicios/classService';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import './ClassForm.css';
const ClassForm = () => {
  const navigate = useNavigate();
  const [nombreClase, setNombreClase] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [idMonitor, setIdMonitor] = useState('');
  const [fecha, setFecha] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg('');
    setLoading(true);

    // Validación simple
    if (!nombreClase || !descripcion || !idMonitor || !fecha) {
      setErrMsg("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      // Llamada al servicio
      await createClass(nombreClase, descripcion, idMonitor, fecha);
      navigate('/home-monitor');
    } catch (error) {
      setErrMsg(error.message || 'Error al crear la clase');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container-clasesform'>
      <div className='div-clasesform'>
    <form className="form-clases" onSubmit={handleSubmit}>
      <h2 className='titulo-clases'>Crear Clase</h2>

      <label>Nombre de la clase:</label>
      <input
        type="text"
        value={nombreClase}
        onChange={(e) => setNombreClase(e.target.value)}
        required
        className='campos-clases'
      />

      <label>Descripción:</label>
      <input
        type="text"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
        className='campos-clases'
      />

      <label>ID del monitor:</label>
      <input
        type="number"
        value={idMonitor}
        onChange={(e) => setIdMonitor(e.target.value)}
        required
        className='campos-clases'
      />

      <label>Fecha:</label>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
        className='campos-clases'
      />

      <button type="submit" disabled={loading} className='boton-clases'>
        {loading ? 'Guardando...' : 'Guardar Clase'}
      </button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
    </div>
    </div>
  );
};

export default ClassForm;


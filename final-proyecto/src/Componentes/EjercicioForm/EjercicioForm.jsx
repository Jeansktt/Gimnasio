import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import './EjercicioForm.css';
import createEjercicio from '../../servicios/ejerciciosService';
const EjercicioForm = () => {
  const navigate = useNavigate();
  const [nombreEjercicio, setnombreEjercicio] = useState('');
  const [descripcionEjercicio, setdescripcionEjercicio] = useState('');
  const [series, setseries] = useState('');
  const [foto, setfoto] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg('');
    setLoading(true);

   
    if (!nombreEjercicio || !descripcionEjercicio || !series || !foto) {
      setErrMsg("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      // Llamada al servicio
      await createEjercicio(nombreEjercicio, descripcionEjercicio, series, foto);
      navigate('/home-monitor');
    } catch (error) {
      setErrMsg(error.message || 'Error al crear la clase');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container-ejercicioform'>
      <div className='div-ejercicioform'>
    <form className="form-ejercicio" onSubmit={handleSubmit}>
      <h2 className='titulo-ejercicio'>Crear Ejercicio</h2>

      <label>Nombre del ejercicio:</label>
      <input
        type="text"
        value={nombreEjercicio}
        onChange={(e) => setnombreEjercicio(e.target.value)}
        required
        className='campos-ejercicio'
      />

      <label>Descripción:</label>
      <input
        type="text"
        value={descripcionEjercicio}
        onChange={(e) => setdescripcionEjercicio(e.target.value)}
        required
        className='campos-ejercicio'
      />

      <label>Series:</label>
      <input
        type="text"
        value={series}
        onChange={(e) => setseries(e.target.value)}
        required
        className='campos-ejercicio'
      />

      <label>Foto:</label>
      <input
        type="file"
        accept="image/*" 
        onChange={(e) => {
        const file = e.target.files[0];
        
        setfoto(file);
  }}
  required
  className='campos-ejercicio'
      />

      <button type="submit" disabled={loading} className='boton-ejercicio'>
        {loading ? 'Guardando...' : 'Guardar Ejercicio'}
      </button>

      {errMsg && <ErrorMessage msg={errMsg} />}
    </form>
    </div>
    </div>
  );
};

export default EjercicioForm;
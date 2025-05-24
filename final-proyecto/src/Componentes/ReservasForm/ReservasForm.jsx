import React, { useState, useEffect } from 'react';
import reservarClase from '../../servicios/reservasService';
import { useNavigate } from 'react-router-dom';
import './ReservasForm.css';
import useAuth from '../../hooks/useAuth';

const ReservaForm = () => {

  const [idUsuario, setIdUsuario] = useState('');
  const [idClase, setIdClase] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [reservaExitosa, setReservaExitosa] = useState(false);
  const { token, user } = useAuth();
  
  useEffect(() => {
    if (user?.id_usuario) {
      setIdUsuario(user.id_usuario);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idUsuario || !idClase) {
      setMensaje('Por favor completa todos los campos');
      return;
    }

    try {
      const response = await reservarClase({
        id_usuario: parseInt(idUsuario),
        id_clases: parseInt(idClase),
      });

      if (response.success) {
        setReservaExitosa(true);
       
      } else {
        setMensaje(response.message || 'Error en la reserva');
      }
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <div className='container-reservas'>
        
        <div className='reserva'>
      <h2>Reservar Clase</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <input
          className='campo-reservas'
            type="text"
            readOnly
            value={user.id_usuario}
            onChange={(e) => setIdUsuario(e.target.value)}
            required
            
          />
        </div>
        <div>
          <input
          className='campo-reservas'
          placeholder='ID de la clase'
            type="number"
            value={idClase}
            onChange={(e) => setIdClase(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='button-reservar'>Reservar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
    </div>
  );
};

export default ReservaForm;

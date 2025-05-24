import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateUser.css';

const UpdateUser = () => {
  const navigate = useNavigate();
  const usuarioGuardado = JSON.parse(localStorage.getItem('user'));
  const [form, setForm] = useState({
    id_usuario: usuarioGuardado?.id_usuario || '',
    nombre: usuarioGuardado?.nombre || '',
    email: usuarioGuardado?.email || '',
    username: usuarioGuardado?.username || '',
    pass: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/actualizarusuario.php', {
      method: 'POST', // O 'PUT' si lo configuras así en tu backend
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.status === 'Success') {
      alert('Usuario actualizado correctamente');
      // También puedes actualizar el localStorage
      const actualizado = { ...usuarioGuardado, ...form };
      delete actualizado.pass; // no guardes la pass
      localStorage.setItem('user', JSON.stringify(actualizado));
      navigate('/home-monitor'); // o donde quieras redirigir
    } else {
      alert('Error al actualizar: ' + data.message);
    }
  };

  return (
    <div className='container-update'>
      <div className='div-update'> 
        <h2 className='titulo-update'>Actualizar Usuarios</h2>
    <form className="formulario-update" onSubmit={handleSubmit}>
        <label htmlFor="id_usuario">ID usuario</label>
      <input name="id_usuario"  onChange={handleChange} required className='campo-update'/>
      <label htmlFor="nombre">Nombre</label>
      <input name="nombre"  onChange={handleChange} className='campo-update'/>
      <label htmlFor="email">Email</label>
      <input name="email"  onChange={handleChange} className='campo-update' />
      <label htmlFor="usuario">Usuario</label>
      <input name="username" onChange={handleChange} className='campo-update'/>
      <label htmlFor="pass">Nueva contraseña</label>
      <input name="pass" type="password"  onChange={handleChange} className='campo-update'/>
      <button type="submit" className='boton-update'>Actualizar</button>
    </form>
    </div>
    </div>
  );
};

export default UpdateUser;
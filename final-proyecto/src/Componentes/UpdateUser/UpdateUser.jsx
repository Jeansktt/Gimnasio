import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>
        <label htmlFor="id_usuario">ID usuario</label>
      <input name="id_usuario"  onChange={handleChange} placeholder="Id usuario" required />
      <label htmlFor="nombre">Nombre</label>
      <input name="nombre"  onChange={handleChange} placeholder="Nombre" />
      <label htmlFor="email">Email</label>
      <input name="email"  onChange={handleChange} placeholder="Email" />
      <label htmlFor="usuario">Usuario</label>
      <input name="username" onChange={handleChange} placeholder="Usuario" />
      <label htmlFor="pass">Nueva contraseña</label>
      <input name="pass" type="password"  onChange={handleChange} placeholder="Nueva contraseña" />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default UpdateUser;
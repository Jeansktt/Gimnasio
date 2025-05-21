// hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null);
  const login = async ({ user, pass }) => {
    try {
      const res = await fetch('http://localhost/linkia/Gym-Jean/back-proyecto/routes/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pass }),
      });

      const data = await res.json();

      if (data.status === 'ok') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.info));
        setToken(data.token);
        setUser(data.info);
        return { success: true };//, userInfo: data.info
      } else {
        return { success: false, message: data.mensaje };
      }
    } catch (err) {
      return { success: false, message: 'Error al conectar con el servidor' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    window.location.href = '/';
  };

  return { token,user, login, logout };
};

export default useAuth;

import React from 'react';
import './UserPage.css';
const UserPage = ({ user }) => {
    console.log("Usuario recibido:", user);
  return (
    <div className="user-card">
      <h3>{user.nombre}</h3>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Password: {user.pass}</p>
    </div>
  );
};

export default UserPage;

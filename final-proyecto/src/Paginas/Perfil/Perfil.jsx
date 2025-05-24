import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Perfil.css';



const PerfilPage = () => {
    const { token, logout, user } = useAuth();
    

    return (
        <div className='perfil-page'>
            <div className='items-menu-usuario'>
                            <Link to="/">Inicio</Link>
                            <Link to="/verclases">Clases</Link>
                            <Link to="/">Entrenadores</Link>
                            <Link to="/">Ejercicios</Link>  
                            <Link to="/perfil">Perfil</Link>          
                        </div>
            <h1 className='titulo-perfil'>Perfil</h1>
            <div className='foto-perfil'>
                <p>FOTO</p>
            </div>
            <nav className='buttons'>
                
                {token && (
                    <>
                    <label className='label'>Nombre</label>  
                    {user && <p className='info'>{user.nombre }</p>}
                     <label className='label'>Email</label>  
                    {user && <p className='info'>{user.email }</p>}
                     <label className='label'>Usuario</label>  
                    {user && <p className='info'>{user.username }</p>}
                    
                    <div
                            className='button-close'
                            onClick={logout}
                        >
                            <p>Cerrar sesión</p>
                            
                        </div>    
                    </>
                )}
            </nav>
        </div>
    );
};

export default PerfilPage;
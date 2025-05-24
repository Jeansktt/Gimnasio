import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Perfil.css';
import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';



const PerfilPage = () => {
    const { token, logout, user } = useAuth();
    

    return (
        <div className='perfil-page'>
            
            <div className='menu'>
            <MenuUsuario></MenuUsuario>
           </div>
            <h1 className='titulo-perfil'>Perfil</h1>
            <div className='foto-perfil'>
                <p>FOTO</p>
            </div>
            <nav className='buttons'>
                
                {token && (
                    <>
                    <label className='label'>ID</label>  
                    {user && <p className='info'>{user.id_usuario }</p>}
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
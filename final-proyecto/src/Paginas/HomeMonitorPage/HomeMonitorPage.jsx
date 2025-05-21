import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const HomeMonitorPage = () => {
    const { token, logout, user } = useAuth();

    return (
        <div className='home-page'>
            <h1>Bienvenido a Gym-Jean</h1>
            <p>
                ¡Eres monitor!
            </p>
            <nav className='buttons'>
                {user && <p>Bienvenidx @{user.username }</p>}
                
                {token && (
                    <>
                        
                     <NavLink to="/clasesnuevas" className="clases clickable-button">
                            <p>Clases Nuevas</p>
                        </NavLink>
                    <NavLink to="/verclases" className="verclases clickable-button">
                            <p>Clases disponibles</p>
                        </NavLink>
                    <NavLink to="/ver-valoracion" className="clases clickable-button">
                            <p>Ver valoraciones</p>
                        </NavLink>
                    <NavLink to="/register-monitor" className="clases clickable-button">
                            <p>Registrar nuevo monitor</p>
                        </NavLink>
                    <NavLink to="/updateuser" className="clases clickable-button">
                            <p>Actualizar usuarios</p>
                        </NavLink>
                    <div
                            className='button-close clickable-button'
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

export default HomeMonitorPage;
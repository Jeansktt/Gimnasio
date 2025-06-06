import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './HomeMonitorPage.css';



const HomeMonitorPage = () => {
    const { token, logout, user } = useAuth();

    return (
        <div className='home-page'>
            
            <h1 className='titulo-home-monitor'>Gestiona el Gimnasio</h1>
            
            <div className='contenedor-gestion'>
            <div className='gestion' id='gestion1'>
            <NavLink to="/clasesnuevas" className="clases clickable-button">
                            <p>Crear Clases</p>
                        </NavLink>
            </div>
            <div className='gestion' id='gestion2'>
            <NavLink to="/ver-valoracion" className="clases clickable-button">
                            <p>Ver valoraciones</p>
                        </NavLink>
            </div>
            <div className='gestion' id='gestion3'>
            <NavLink to="/register-monitor" className="clases clickable-button">
                            <p>Registrar nuevo monitor</p>
                        </NavLink>
            </div>
            <div className='gestion' id='gestion4'>
            <NavLink to="/updateuser" className="clases clickable-button">
                            <p>Actualizar usuarios</p>
                        </NavLink>
            </div>
            <div className='gestion' id='gestion5'>
            <NavLink to="/ver-reservas" className="clases clickable-button">
                            <p>Ver Reservas</p>
                        </NavLink>
            </div>
            <div className='gestion' id='gestion6'>
            <NavLink to="/veruser" className="clases clickable-button">
                            <p>Ver Usuarios</p>
                        </NavLink>
            </div>
            <div className='gestion' id='gestion7'>
            <NavLink to="/ejercicios" className="clases clickable-button">
                            <p>Crear Ejercicio</p>
                        </NavLink>
            </div>
            <div className='gestion' id='gestion8'>
            <NavLink to="/ver-ejercicios" className="clases clickable-button">
                            <p>Ver Ejercicios</p>
                        </NavLink>
            </div>
            </div>

            <nav className='buttons'>
                <>
                <div
                className='button-close clickable-button'
                onClick={logout}
                >
                <p className='boton-cerrar'>Cerrar sesión</p>
                </div>
                </>
                
            </nav>
        </div>
    );
};

export default HomeMonitorPage;
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './HomePage.css';



const HomePage = () => {
    const { token, logout, user } = useAuth();

    return (
        <div className='home-page'>
            <h1>Bienvenido a Gym-Jean</h1>
            <p>
                ¡Deja de estar gordito!
            </p>
            <nav className='buttons'>
                {user && <p>Bienvenidx @{user.username }</p>}
                
                {token && (
                    <>
                        
                        <div
                            className='button-close clickable-button'
                            onClick={logout}
                        >
                            <p>Cerrar sesión</p>
                            
                        </div>
                        
                     <NavLink to="/clasesnuevas" className="clases clickable-button">
                            <p>Clases Nuevas</p>
                        </NavLink>

                    </>
                )}
            </nav>
        </div>
    );
};

export default HomePage;
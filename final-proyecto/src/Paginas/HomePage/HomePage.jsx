import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './HomePage.css';
import imgejer1 from "../../imagenes/ej1.png";



const HomePage = () => {
    const { token, logout, user } = useAuth();
    

    return (
        <div className='home-page'>
            <div className='items-usuario'>
            <div className='items-menu-usuario'>
                <Link to="/">Inicio</Link>
                <Link to="/verclases">Clases</Link>
                <Link to="/">Entrenadores</Link>
                <Link to="/">Ejercicios</Link>  
                <Link to="/perfil">Perfil</Link>          
            </div>
            </div>
            <div className='carrusel'>
            <img src={imgejer1} width="100%"/>
            </div>
           
            
            <nav className='buttons'>
               
                
                {token && (
                    <>
                       
                    
                    
                   
                       
                    </>
                )}
            </nav>
        </div>
    );
};

export default HomePage;
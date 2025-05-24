import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './EjerciciosPage.css';
import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';



const EjerciciosPage = () => {
   
    

    return (
        <div className='ejercicio-page'>
            
            <div className='menu'>
            <MenuUsuario></MenuUsuario>
           </div>
            <h1 className='titulo-perfil'>Ejercicios</h1>
            <div className='ejercicios-container'>
                <div className='tarjeta-ejercicio'>
                <p className='titulo-ejercicio'>Press banca</p>
                </div>
                <div className='tarjeta-ejercicio'>
                <p className='titulo-ejercicio'>Cruce de poleas</p>
                </div>
                <div className='tarjeta-ejercicio'>
                <p className='titulo-ejercicio'>Curl de biceps</p>
                </div>
                <div className='tarjeta-ejercicio'>
                <p className='titulo-ejercicio'>Martillo</p>
                </div>
                <div className='tarjeta-ejercicio'>
                <p className='titulo-ejercicio'>Dominadas</p>
                </div>
                <div className='tarjeta-ejercicio'>
                <p className='titulo-ejercicio'>Jalón al pecho</p>
                </div>
                <div className='tarjeta-ejercicio'>
                <p className='titulo-ejercicio'>Sentadillas</p>
                </div>
                <div className='tarjeta-ejercicio'>
    
                <p><Link to="/verclases">Ver clases</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default EjerciciosPage;
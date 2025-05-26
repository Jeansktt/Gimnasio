import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './EjerciciosPage.css';
import EjercicioForm from '../../Componentes/EjercicioForm/EjercicioForm';
import MenuMonitor from '../../Componentes/MenuMonitor/MenuMonitor';



const EjerciciosPage = () => {
   
    

    return (
        <div className='ejercicio-page'>
            
            <div className='menu'>
            <MenuMonitor></MenuMonitor>
            <EjercicioForm></EjercicioForm>
           </div>
            
            
        </div>
    );
};

export default EjerciciosPage;
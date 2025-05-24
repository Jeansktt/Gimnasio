import { Link } from 'react-router-dom';
import './MenuUsuario.css';

const MenuUsuario = () => {
    return (
        <div className='items-usuario'>
            <div className='items-menu-usuario'>
            <Link to="/">Inicio</Link>
            <Link to="/verclases">Clases</Link>
            <Link to="/monitores">Entrenadores</Link>
            <Link to="/ejercicios">Ejercicios</Link> 
            <Link to="/reservas">Reservas</Link>
            <Link to="/valoracion">Valoración</Link> 
            <Link to="/perfil">Perfil</Link>          
            </div>
        </div>
    );
};

export default MenuUsuario;
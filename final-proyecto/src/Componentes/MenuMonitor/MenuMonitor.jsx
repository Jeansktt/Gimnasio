import { Link } from 'react-router-dom';
import './MenuMonitor.css';

const MenuMonitor = () => {
    return (
        <div className='items-usuario'>
            <div className='items-menu-usuario'>
            <Link to="/">Inicio</Link>
            <Link to="/clasesnuevas">Crear clases</Link>
            <Link to="/ver-valoracion">Ver Valoración</Link>
            <Link to="/register-monitor">Registrar Monitor</Link>
                      
            </div>
        </div>
    );
};

export default MenuMonitor;
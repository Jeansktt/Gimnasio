import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>

            <div className='logo'>
                <h1>Gimnasio Jean</h1>
            </div>
            <div className='items-menu'>
                <Link to="/">Inicio</Link>
                <Link to="/">Clases</Link>
                <Link to="/">Entrenadores</Link>
                <Link to="/">Ejercicios</Link>            
                <Link to="/">Perfil</Link>
            </div>
        </header>
    );
};

export default Header;
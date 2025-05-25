import { Link } from 'react-router-dom';
import './Footer.css';
import imgfooter from '../../imagenes/logo_linkia.png';

const Footer = () => {
    return (
        <footer>

            
           <div className="app-layout">
      {/* Aquí tu header o navbar */}
      <main className="main-content">
        
        <p>2025©</p>
        <p>Diseñado por: Jean Carlos</p>
        <img src={imgfooter} width="200px"/>
      </main>
    </div>
        </footer>
    );
};

export default Footer;
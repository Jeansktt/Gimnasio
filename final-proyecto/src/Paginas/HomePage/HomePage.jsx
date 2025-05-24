import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './HomePage.css';
import imgejer1 from "../../imagenes/ej1.png";
import MenuUsuario from '../../Componentes/MenuUsuario/MenuUsuario';
import tarjeta1 from '../../imagenes/tarjeta1.svg';
import tarjeta2 from '../../imagenes/tarjeta2.svg';
import tarjeta3 from '../../imagenes/tarjeta3.svg';
import tarjeta4 from '../../imagenes/tarjeta4.svg';
import tarjeta5 from '../../imagenes/tarjeta5.svg';
import tarjeta6 from '../../imagenes/tarjeta6.svg';
import fotohorario from '../../imagenes/horario1.png';
import fotodeporte from '../../imagenes/img-ejer3.jpg';
import fotoclases from '../../imagenes/clases1.png';

const HomePage = () => {
    //const { token, logout, user } = useAuth();
    

    return (
        <div className='home-page'>
           <div className='menu'>
            <MenuUsuario></MenuUsuario>
           </div>
            <div className='carrusel'>
            <img src={imgejer1} width="100%"/>
            </div>
            <h1  className='titulo-home'>Bienvenido a nuestro Gimnasio</h1>
           <div className='tarejetas'>
            <div className='tarejetas-info'>
                <img src={tarjeta1}/>
                <p className='titulo-tarjeta'>Entrenamiento en grupo sincronizado</p>
                <p className='descripcion'>Con el entrenamiento en grupo sincronizado, puedes ofrecer a tus clientes un 
                    entrenamiento dinámico y así garantizar una demanda constante</p>
            </div>
            <div className='tarejetas-info'>
                <img src={tarjeta2}/>
                <p className='titulo-tarjeta'>Entrenamiento individual</p>
                <p className='descripcion'>Los programas de entrenamiento en grupo personalizados tienen en cuenta las
                necesidades físicas individuales de cada participante y favorecen así la obtención
                de mejores resultados.</p>
            </div>
            <div className='tarejetas-info'>
                <img src={tarjeta3}/>
                <p className='titulo-tarjeta'>Programas de entrenamiento</p>
                <p className='descripcion'>Personaliza nuestros programas EMS predefinidos para disponer de una amplia gama
                de opciones de entrenamiento que satisfagan las necesidades de tus clientes.</p>
            </div>
            <div className='tarejetas-info'>
                <img src={tarjeta4}/>
                <p className='titulo-tarjeta'>Entrenamiento al aire libre</p>
                <p className='descripcion'>Con nuestro sistema EMS wireless, podrás llevar a cabo sesiones de entrenamiento
                    al aire libre y ofrecer a tus clientes una experiencia excepcional.</p>
            </div>
            <div className='tarejetas-info'>
                <img src={tarjeta5}/>
                <p className='titulo-tarjeta'>Entrenamientos en interior</p>
                <p>Ya sea cardio o entrenamiento de fuerza, con nuestro sistema
                EMS tendrás la flexibilidad de elegir dónde y qué quieres ofrecer.</p>
            </div>
            <div className='tarejetas-info'>
                <img src={tarjeta6}/>
                <p className='titulo-tarjeta'>App para gimnasios</p>
                <p className='descripcion'>Con nuestra aplicación para gimnasios, tendrás un control total sobre tus
                clases de fitness y podrás ofrecer una gran variedad de combinaciones de entrenamiento.</p>
            </div>
           </div>
            <h2 className='titulo-pregunta'>¿Por qué hacer deporte?</h2>
           <div className='info-ejer'>
            <div className='texto-deporte'>
    
            <p className='titulo-tarjeta'>Importancia del deporte</p>
            <p className='info-importancia'>El deporte desempeña un papel fundamental en la promoción de la salud física y mental.
                Contribuye a prevenir enfermedades cardiovasculares, diabetes tipo 2 y ciertos tipos de
                cáncer, además de mejorar la resistencia respiratoria y fortalecer músculos y articulaciones.
                En el ámbito mental, la actividad física regular ayuda a reducir los síntomas de depresión y ansiedad,
                mejora el estado de ánimo y favorece la autoestima . También potencia la función cognitiva, la memoria
                y la concentración </p>
            </div>
            <div className='foto-deporte'>
            <img  className="imagen-deporte" src={fotodeporte}/>
            </div>
           </div>
           <h2 className='nuestros-servicios'>Nuestros Servicios</h2>
           <div className='servicios'>
            <div className='tarjeta-servicios'>
                <img className="foto-tajeta-deporte" src={fotohorario}/>
                
               <div className='titulo-tarjeta'>Tabla de ejercicios</div>
               <p>El deporte es esencial para mantener una vida saludable y equilibrada. Practicar ejercicio regularmente
                fortalece el sistema cardiovascular, mejora la resistencia respiratoria y ayuda a prevenir enfermedades como
                la hipertensión, la diabetes tipo 2 y ciertos tipos de cáncer. Además, contribuye al bienestar mental al reducir
                los síntomas de depresión y ansiedad, y mejora la autoestima y la calidad del sueño. En el ámbito social, el deporte
                fomenta valores como la disciplina, el trabajo en equipo y la perseverancia, promoviendo la inclusión y el respeto
                entre individuos. Incorporar actividades físicas en la rutina diaria no solo mejora la salud física y mental, sino
                que también enriquece las relaciones sociales y la calidad de vida en general.</p> 
            </div>
            <div className='tarjeta-servicios'>
                <img  className="foto-tajeta-deporte" src={fotoclases}/>
                <div className='titulo-tarjeta'>Clases disponibles</div>
                <p>Las clases deportivas disponibles desempeñan un papel crucial en la promoción de un estilo de vida activo y saludable.
                    Ofrecen una estructura que facilita la incorporación del ejercicio en la rutina diaria, fomentando la constancia y la
                    motivación. Además, permiten a los participantes explorar diversas disciplinas, desde actividades aeróbicas hasta
                    entrenamientos de fuerza, adaptándose a diferentes niveles de habilidad y objetivos personales. Estas clases también
                    promueven la socialización, creando un sentido de comunidad y apoyo mutuo entre los asistentes. En conjunto, las clases
                    deportivas no solo mejoran la condición física, sino que también contribuyen al bienestar mental y emocional, siendo una
                    herramienta efectiva para combatir el estrés y mejorar la calidad de vida.</p>

            </div>
            
           </div>
            
            
        </div>
    );
};

export default HomePage;
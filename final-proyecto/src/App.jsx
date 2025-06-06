import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header/Header'
import LoginPage from './Paginas/LoginPage/LoginPage';
import RegisterPage from './Paginas/RegisterPage/RegisterPage';
import HomePage from './Paginas/HomePage/HomePage';
import ClassPage from './Paginas/ClassPage/ClassPage';
import ViewClassPage from './Paginas/ViewClassPage/ViewClassPage';
import RegisterMonitorPage from './Paginas/RegisterMonitorPage/RegisterMonitorPage';
import ViewUserPage from './Paginas/getUserPage/getUserPage';
import ViewValoracionPage from './Paginas/ViewValoracionPage/ViewValoracionPage';
import Valoracionpage from './Paginas/ValoracionPage/valoracionpage';
import HomeMonitorPage from './Paginas/HomeMonitorPage/HomeMonitorPage';
import UpdateUserPage from './Paginas/UpdateUserPage/UpdateUserPage';
import Footer from './Componentes/Footer/Footer';
import PerfilPage from './Paginas/Perfil/Perfil';
import ViewMonitorPage from './Paginas/getMonitorPage/getMonitorPage';
import ReservasPage from './Paginas/ReservasPage/ReservasPage';
import EjerciciosPage from './Paginas/EjerciciosPage/EjerciciosPage';
import ViewReservasPage from './Paginas/ViewReservasPage/ViewReservasPage';
import ViewEjercicioPage from './Paginas/ViewEjerciciosPage/ViewEjercicioPage';
import ViewEjercicioUserPage from './Paginas/ViewEjercicioPageUser/ViewEjercicioPageUser';
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/'element={<LoginPage/>}/>
        <Route path='/register'element={<RegisterPage/>}/>
        <Route path='/home'element={<HomePage/>}/>
        <Route path='/home-monitor'element={<HomeMonitorPage/>}/>
        <Route path='/clasesnuevas'element={<ClassPage/>}/>
        <Route path='/verclases' element={<ViewClassPage/>}/>
        <Route path='/register-monitor' element={<RegisterMonitorPage/>}/>
        <Route path='/veruser' element={<ViewUserPage/>}/>
        <Route path='/ver-valoracion' element={<ViewValoracionPage/>}/>
        <Route path='/valoracion' element={<Valoracionpage/>}/>
        <Route path='/updateuser' element={<UpdateUserPage/>}/>
        <Route path='/perfil' element={<PerfilPage/>}/>
        <Route path='/monitores' element={<ViewMonitorPage/>}/>
        <Route path='/reservas' element={<ReservasPage/>}/>
        <Route path='/ejercicios' element={<EjerciciosPage/>}/>
        <Route path='/ver-reservas' element={<ViewReservasPage/>}/>
        <Route path='/ejercicios'element={<EjerciciosPage/>}/>
        <Route path='/ver-ejercicios'element={<ViewEjercicioPage/>}/>
        <Route path='/ver-ejercicios-user'element={<ViewEjercicioUserPage/>}/>

      </Routes>
      <Footer/>
    </div>
    
    
  );
}


export default App;

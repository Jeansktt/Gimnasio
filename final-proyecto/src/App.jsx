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
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/register'element={<RegisterPage/>}/>
        <Route path='/login'element={<LoginPage/>}/>
        <Route path='/home'element={<HomePage/>}/>
        <Route path='/clasesnuevas'element={<ClassPage/>}/>
        <Route path='/verclases' element={<ViewClassPage/>}/>
        <Route path='/register-monitor' element={<RegisterMonitorPage/>}/>
        <Route path='/veruser' element={<ViewUserPage/>}/>
        <Route path='/ver-valoracion' element={<ViewValoracionPage/>}/>

      </Routes>
    </div>
    
    
  );
}


export default App;

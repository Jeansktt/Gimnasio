import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header/Header'
import LoginPage from './Paginas/LoginPage/LoginPage';
import RegisterPage from './Paginas/RegisterPage/RegisterPage';
import HomePage from './Paginas/HomePage/HomePage';
import ClassPage from './Paginas/ClassPage/ClassPage';
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/register'element={<RegisterPage/>}/>
        <Route path='/login'element={<LoginPage/>}/>
        <Route path='/home'element={<HomePage/>}/>
        <Route path='/clasesnuevas'element={<ClassPage/>}/>
      </Routes>
    </div>
    
    
  );
}


export default App;

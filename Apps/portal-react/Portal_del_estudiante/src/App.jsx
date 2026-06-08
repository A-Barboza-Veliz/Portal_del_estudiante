import { Routes,Route } from 'react-router-dom';
import ListaCursos from './pages/ListaCursos';
import About from './pages/About';
import ListaSedes from './pages/ListaSedes';
import Cursos from './components/Cursos';
import NavBar from './components/NavBar';

export default function App(){

return (
  <>  
 <NavBar></NavBar>
 <Routes>
      <Route path="/" element={<About></About>}>Inicio</Route>
      <Route path="/ListaCursos" element={<ListaCursos></ListaCursos>}>Lista De Cursos</Route>
      <Route path="/ListaSedes" element={<ListaSedes></ListaSedes>}>Sedes</Route>
    </Routes>
  </>

  



);
}
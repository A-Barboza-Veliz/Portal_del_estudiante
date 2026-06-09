import { Routes, Route } from 'react-router-dom';
import ListaCursos from './pages/ListaCursos';
import About from './pages/About';
import ListaSedes from './pages/ListaSedes';
import Sobrenosotros from './pages/Sobrenosotros';
import Beneficios from './pages/Beneficios';
import Contactanos from './pages/Contactanos';
import CursoDetalle from './pages/CursoDetalle';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App(){

return (
  <>  
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<About></About>}>Inicio</Route>
      <Route path="/ListaCursos" element={<ListaCursos></ListaCursos>}>Lista De Cursos</Route>
      <Route path="/curso/:id" element={<CursoDetalle></CursoDetalle>}>Detalle del Curso</Route>
      <Route path="/ListaSedes" element={<ListaSedes></ListaSedes>}>Sedes</Route>
      <Route path="/SobreNosotros" element={<Sobrenosotros></Sobrenosotros>}>Sobre Nosotros</Route>
      <Route path="/Beneficios" element={<Beneficios></Beneficios>}>Beneficios</Route>
      <Route path="/Contactanos" element={<Contactanos></Contactanos>}>Contáctanos</Route>
    </Routes>
    <Footer></Footer>
  </>
);
}
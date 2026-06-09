import { Link } from "react-router-dom";
import { useCursos } from "../hooks/useCursos";
import "./NavBar.css";

export default function NavBar() {
  const { carrito } = useCursos();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="logo">
            Portal del Estudiante
          </Link>
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="/SobreNosotros">Nosotros</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/ListaCursos">Lista De Cursos</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/ListaSedes">Sedes</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Beneficios">Beneficios</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/Contactanos">Contacto</Link>
          </li>
        </ul>

        <div className="nav-carrito">
          <Link to="/ListaCursos" className="carrito-badge">
            Inscripciones
            {carrito.length > 0 && <span className="badge">{carrito.length}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
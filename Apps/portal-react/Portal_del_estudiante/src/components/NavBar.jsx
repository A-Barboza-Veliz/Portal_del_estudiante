import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <Link to="/">Nosotros</Link> | { " "}
                <Link to="/ListaCursos">Lista De Cursos</Link> | { " "}
                <Link to="/ListaSedes">Sedes</Link> | { " "}
                <Link to="/Beneficios">Beneficios</Link> | { " "}
                <Link to="/Contactanos">Contacto</Link> | { " "}
            </ul>
        </nav>
    )
}
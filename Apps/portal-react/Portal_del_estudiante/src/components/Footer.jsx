import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Portal del Estudiante</h4>
          <p>Tu portal integral para gestionar tu experiencia académica.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/ListaCursos">Cursos</a></li>
            <li><a href="/ListaSedes">Sedes</a></li>
            <li><a href="/SobreNosotros">Sobre Nosotros</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@portal.edu.pe</p>
          <p>Teléfono: +51 (1) 2345-6789</p>
          <p>Dirección: Lima, Perú</p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              className="social-icon facebook"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://instagram.com"
              className="social-icon instagram"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://tiktok.com"
              className="social-icon tiktok"
              title="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="https://whatsapp.com"
              className="social-icon whatsapp"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Portal del Estudiante. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

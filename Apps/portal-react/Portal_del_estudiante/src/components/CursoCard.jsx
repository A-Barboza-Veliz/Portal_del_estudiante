import { Link } from "react-router-dom";
import { useCursos } from "../hooks/useCursos";
import "./CursoCard.css";

export default function CursoCard({ curso }) {
  const { agregarAlCarrito, quitarDelCarrito, estaEnCarrito } = useCursos();
  const enCarrito = estaEnCarrito(curso.id);

  return (
    <div className="curso-card">
      <div className="curso-card-header">
        <h3>{curso.nombre}</h3>
        <span className="curso-categoria">{curso.turno}</span>
      </div>

      <div className="curso-card-body">
        <p className="curso-detalle">{curso.detalle}</p>

        <div className="curso-info">
          <div className="info-item">
            <strong>Duración:</strong>
            <span>{curso.creditos} horas</span>
          </div>
          <div className="info-item">
            <strong>Turno:</strong>
            <span>{curso.turno}</span>
          </div>
        </div>
      </div>

      <div className="curso-card-footer">
        <Link to={`/curso/${curso.id}`} className="btn btn-primary">
          Ver Detalles
        </Link>

        {enCarrito ? (
          <button
            className="btn btn-danger"
            onClick={() => quitarDelCarrito(curso.id)}
          >
            Quitar
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => agregarAlCarrito(curso.id)}
          >
            Inscribirse
          </button>
        )}
      </div>
    </div>
  );
}

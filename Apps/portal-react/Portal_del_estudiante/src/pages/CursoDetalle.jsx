import { useParams, useNavigate } from "react-router-dom";
import { useCursos } from "../hooks/useCursos";
import "./CursoDetalle.css";

export default function CursoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { obtenerCurso, agregarAlCarrito, quitarDelCarrito, estaEnCarrito } =
    useCursos();

  const curso = obtenerCurso(id);
  const enCarrito = estaEnCarrito(parseInt(id));

  if (!curso) {
    return (
      <div className="curso-detalle-page">
        <div className="error-message">
          <h2>Curso no encontrado</h2>
          <p>Lo sentimos, el curso que buscas no existe.</p>
          <button onClick={() => navigate("/ListaCursos")} className="btn-volver">
            Volver a Cursos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="curso-detalle-page">
      <button onClick={() => navigate(-1)} className="btn-atras">
        ← Atrás
      </button>

      <div className="detalle-container">
        <div className="detalle-header">
          <h1>{curso.nombre}</h1>
          <span className="badge-turno">{curso.turno}</span>
        </div>

        <div className="detalle-content">
          <div className="detalle-main">
            <section className="detalle-section">
              <h2>Descripción</h2>
              <p className="descripcion">{curso.detalle}</p>
            </section>

            <section className="detalle-section">
              <h2>Información del Curso</h2>
              <div className="info-grid">
                <div className="info-card">
                  <span className="label">Duración</span>
                  <span className="value">{curso.creditos} horas</span>
                </div>
                <div className="info-card">
                  <span className="label">Turno</span>
                  <span className="value">{curso.turno}</span>
                </div>
                <div className="info-card">
                  <span className="label">ID del Curso</span>
                  <span className="value">#{curso.id}</span>
                </div>
                <div className="info-card">
                  <span className="label">Estado</span>
                  <span className={`value ${enCarrito ? "inscrito" : ""}`}>
                    {enCarrito ? "✓ Inscrito" : "Disponible"}
                  </span>
                </div>
              </div>
            </section>

            <section className="detalle-section">
              <h2>Contenido del Curso</h2>
              <p>
                Este curso proporciona las habilidades y conocimientos esenciales
                para dominar los temas relacionados con {curso.nombre.toLowerCase()}.
                Incluye teoría práctica, proyectos reales y mentoría personalizada.
              </p>
              <ul className="contenido-list">
                <li>Módulos estructurados y progresivos</li>
                <li>Ejercicios prácticos y proyectos</li>
                <li>Evaluaciones continuas</li>
                <li>Acceso a recursos de aprendizaje</li>
                <li>Certificado al completar</li>
              </ul>
            </section>
          </div>

          <div className="detalle-sidebar">
            <div className="inscripcion-card">
              <h3>Inscripción</h3>
              <div className="precio-info">
                <span className="label">Curso</span>
                <span className="valor">{curso.nombre}</span>
              </div>

              <div className="precio-info">
                <span className="label">Duración</span>
                <span className="valor">{curso.creditos} horas</span>
              </div>

              <div className="precio-info">
                <span className="label">Horario</span>
                <span className="valor">{curso.turno}</span>
              </div>

              <div className="estado-inscripcion">
                {enCarrito ? (
                  <div className="inscrito-banner">
                    ✓ Ya estás inscrito en este curso
                  </div>
                ) : (
                  <div className="disponible-banner">
                    ✓ Disponible para inscribirse
                  </div>
                )}
              </div>

              {enCarrito ? (
                <button
                  onClick={() => quitarDelCarrito(parseInt(id))}
                  className="btn btn-quitar"
                >
                  Quitar de Inscripción
                </button>
              ) : (
                <button
                  onClick={() => agregarAlCarrito(parseInt(id))}
                  className="btn btn-inscribir"
                >
                  Inscribirse Ahora
                </button>
              )}

              <button
                onClick={() => navigate("/ListaCursos")}
                className="btn btn-secondary"
              >
                Ver Otros Cursos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

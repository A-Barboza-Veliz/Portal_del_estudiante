import { useCursos } from "../hooks/useCursos";
import CursoCard from "../components/CursoCard";
import "./ListaCursos.css";

export default function ListaCursos() {
  const { cursos, cargando } = useCursos();

  return (
    <div className="lista-cursos-page">
      <div className="lista-cursos-header">
        <h1>Catálogo de Cursos</h1>
        <p>Explora nuestra oferta académica y selecciona los cursos que te interesan</p>
      </div>

      {cargando ? (
        <div className="loading">
          <p>Cargando cursos...</p>
        </div>
      ) : cursos.length === 0 ? (
        <div className="empty-state">
          <p>No hay cursos disponibles en este momento</p>
        </div>
      ) : (
        <>
          <div className="cursos-stats">
            <span>{cursos.length} cursos disponibles</span>
          </div>
          <div className="cursos-grid">
            {cursos.map((curso) => (
              <CursoCard key={curso.id} curso={curso} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
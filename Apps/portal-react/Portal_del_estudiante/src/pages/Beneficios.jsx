import { useState, useEffect } from "react";
import "./Beneficios.css";

// Datos mock de beneficios del portal estudiantil
const beneficiosMock = [
  {
    id: 1,
    categoria: "Restaurantes",
    titulo: "Descuentos en Restaurantes",
    descripcion:
      "Presenta tu carnet estudiantil y obtén hasta 30% de descuento en más de 50 restaurantes afiliados cerca de nuestras sedes: KFC, Bembos, Pizza Hut, McDonald's y La Lucha Sanguchería Criolla.",
    disponible: true,
  },
  {
    id: 2,
    categoria: "Entretenimiento",
    titulo: "Descuentos en Cine",
    descripcion:
      "Disfruta del cine a precio especial con hasta 40% de descuento en Cineplanet, Cinemark y Cinépolis. Válido todos los días presentando tu carnet vigente.",
    disponible: true,
  },
  {
    id: 3,
    categoria: "Académico",
    icono: "EN",
    titulo: "Cursos de Inglés",
    descripcion:
      "Accede a cursos de inglés online y presenciales con descuento exclusivo en instituciones como Icpna, Britanico y Berlitz. Mejora tu perfil profesional sin costo adicional.",
    disponible: true,
  },
  {
    id: 4,
    categoria: "Tecnología",
    titulo: "Membresías de Inteligencia Artificial",
    descripcion:
      "Obtén acceso con descuento o gratuito a herramientas de IA como ChatGPT Plus, GitHub Copilot, Claude AI y Notion AI. Potencia tu aprendizaje con la tecnología más avanzada.",
    disponible: true,
  },
];

const categorias = ["Todos", "Restaurantes", "Entretenimiento", "Académico", "Tecnología"];

export default function Beneficios() {
  const [beneficios, setBeneficios] = useState([]);
  const [filtro, setFiltro] = useState("Todos");
  const [cargando, setCargando] = useState(true);

  // useEffect simula carga de datos
  useEffect(() => {
    setCargando(true);
    const timer = setTimeout(() => {
      setBeneficios(beneficiosMock);
      setCargando(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const beneficiosFiltrados = beneficios.filter((b) => {
    const porCategoria = filtro === "Todos" || b.categoria === filtro;
    return porCategoria;
  });

  return (
    <div className="beneficios-page">
      {/* Hero */}
      <section className="beneficios-hero">
        <span className="hero-eyebrow">Portal del Estudiante</span>
        <h1>Tus Beneficios</h1>
        <p>
          Como estudiante matriculado cuentas con acceso a una red completa de
          recursos, servicios y oportunidades diseñados para potenciar tu
          experiencia académica.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">4</span>
            <span className="stat-label">Beneficios activos</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">Empresas aliadas</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">5</span>
            <span className="stat-label">Sedes disponibles</span>
          </div>
        </div>
      </section>

      <div className="beneficios-main">
        {/* Filtros */}
        <div className="filtros-bar">
          <div className="filtros-categorias">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={`filtro-btn ${filtro === cat ? "activo" : ""}`}
                onClick={() => setFiltro(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Contador */}
        <p className="resultados-texto">
          Mostrando <strong>{beneficiosFiltrados.length}</strong> beneficio
          {beneficiosFiltrados.length !== 1 ? "s" : ""}
        </p>

        {/* Cards */}
        {cargando ? (
          <div className="loading-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-card" />
            ))}
          </div>
        ) : beneficiosFiltrados.length === 0 ? (
          <div className="empty-state">
            <p>No se encontraron beneficios con estos filtros.</p>
            <button className="btn-secondary" onClick={() => { setFiltro("Todos"); setSoloDestacados(false); }}>
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="beneficios-grid">
            {beneficiosFiltrados.map((b) => (
              <div key={b.id} className={`beneficio-card ${!b.disponible ? "no-disponible" : ""}`}>
                {!b.disponible && <span className="badge-pronto">Próximamente</span>}
                <div className="beneficio-icono">{b.icono}</div>
                <span className="beneficio-categoria">{b.categoria}</span>
                <h3>{b.titulo}</h3>
                <p>{b.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
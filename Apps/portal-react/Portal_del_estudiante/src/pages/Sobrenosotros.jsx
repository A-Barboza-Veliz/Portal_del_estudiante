import { useState, useEffect } from "react";
import "./SobreNosotros.css";

// Datos mock del equipo de desarrollo (para el examen es el equipo del proyecto)
const equipo = [
  {
    id: 1,
    nombre: "Andrea Quispe",
    rol: "Frontend Lead",
    aporte: "Diseño de componentes, Context API y navegación con React Router.",
    avatar: "AQ",
    color: "#3949ab",
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    rol: "Desarrollador React",
    aporte: "Páginas de Catálogo y Detalle de cursos, integración de datos JSON.",
    avatar: "CM",
    color: "#00897b",
  },
  {
    id: 3,
    nombre: "Lucía Torres",
    rol: "UI/UX & React",
    aporte: "Estilos globales, diseño responsive y páginas de Beneficios.",
    avatar: "LT",
    color: "#8e24aa",
  },
  {
    id: 4,
    nombre: "Miguel Ramos",
    rol: "Desarrollador React",
    aporte: "Páginas de Contáctanos y Sobre Nosotros, validación de formularios.",
    avatar: "MR",
    color: "#e53935",
  },
];

const valores = [
  { icono: "★", titulo: "Excelencia", descripcion: "Comprometidos con la calidad académica en cada curso ofrecido." },
  { icono: "◆", titulo: "Comunidad", descripcion: "Fomentamos el trabajo en equipo y el aprendizaje colaborativo." },
  { icono: "▲", titulo: "Innovación", descripcion: "Tecnología y metodologías actuales al servicio del estudiante." },
  { icono: "◎", titulo: "Inclusión", descripcion: "Una educación accesible para todos, sin importar el origen." },
];

const hitos = [
  { año: "2008", evento: "Fundación del instituto con 3 carreras técnicas." },
  { año: "2012", evento: "Apertura de la segunda sede en Miraflores." },
  { año: "2016", evento: "Lanzamiento del campus virtual y clases híbridas." },
  { año: "2020", evento: "Migración completa a plataforma digital durante la pandemia." },
  { año: "2023", evento: "Acreditación internacional y 5 sedes en Lima." },
  { año: "2025", evento: "Portal del Estudiante: gestión de cursos en tiempo real." },
];

export default function SobreNosotros() {
  const [hitosVisibles, setHitosVisibles] = useState([]);
  const [tab, setTab] = useState("mision");

  // useEffect: anima los hitos uno por uno
  useEffect(() => {
    setHitosVisibles([]);
    hitos.forEach((_, i) => {
      setTimeout(() => {
        setHitosVisibles((prev) => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <div className="sobrenosotros-page">
      {/* Hero */}
      <section className="sn-hero">
        <div className="sn-hero-content">
          <span className="hero-eyebrow">Quiénes somos</span>
          <h1>Sobre Nosotros</h1>
          <p>
            Somos una institución educativa comprometida con formar profesionales
            técnicos de alto nivel, impulsando el desarrollo del Perú a través de
            la educación de calidad.
          </p>
        </div>
      </section>

      {/* Misión / Visión / Valores — tabs */}
      <section className="sn-tabs-section">
        <div className="sn-tabs-container">
          <div className="sn-tabs">
            {["mision", "vision", "valores"].map((t) => (
              <button
                key={t}
                className={`tab-btn ${tab === t ? "activo" : ""}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {tab === "mision" && (
              <div className="tab-panel">
                <h3>Nuestra Misión</h3>
                <p>
                  Brindar educación técnica y profesional de calidad, accesible e
                  innovadora, formando personas íntegras capaces de transformar su
                  entorno con ética, conocimiento y creatividad.
                </p>
              </div>
            )}
            {tab === "vision" && (
              <div className="tab-panel">
                <h3>Nuestra Visión</h3>
                <p>
                  Ser la institución técnica más reconocida del Perú, referente en
                  innovación educativa y articulación con la industria, formando
                  líderes que aporten al desarrollo sostenible del país.
                </p>
              </div>
            )}
            {tab === "valores" && (
              <div className="valores-grid">
                {valores.map((v) => (
                  <div key={v.titulo} className="valor-card">
                    <span className="valor-icono">{v.icono}</span>
                    <h4>{v.titulo}</h4>
                    <p>{v.descripcion}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Historia — timeline */}
      <section className="sn-historia">
        <div className="sn-section-container">
          <h2>Nuestra Historia</h2>
          <div className="timeline">
            {hitos.map((h, i) => (
              <div
                key={h.año}
                className={`timeline-item ${hitosVisibles.includes(i) ? "visible" : ""} ${i % 2 === 0 ? "izquierda" : "derecha"}`}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-año">{h.año}</span>
                  <p>{h.evento}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
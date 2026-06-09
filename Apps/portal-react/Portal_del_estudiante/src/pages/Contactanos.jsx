import { useState, useEffect } from "react";
import "./Contactanos.css";

const initialForm = {
  nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
};

export default function Contactanos() {
  const [sedes, setSedes] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sedeSeleccionada, setSedeSeleccionada] = useState(null);

  // useEffect para cargar sedes desde el JSON real del proyecto
  useEffect(() => {
    fetch("/sedes.json")
      .then((res) => res.json())
      .then((data) => setSedes(data))
      .catch(() => setSedes([]));
  }, []);

  const validar = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      e.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Ingresa un correo válido.";
    }
    if (!form.asunto.trim()) e.asunto = "El asunto es obligatorio.";
    if (!form.mensaje.trim()) e.mensaje = "El mensaje es obligatorio.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresDetectados = validar();
    if (Object.keys(erroresDetectados).length > 0) {
      setErrors(erroresDetectados);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
      setForm(initialForm);
    }, 1500);
  };

  return (
    <div className="contactanos-page">
      {/* Hero */}
      <section className="contactanos-hero">
        <span className="hero-eyebrow">Estamos para ti</span>
        <h1>Contáctanos</h1>
        <p>¿Tienes dudas sobre inscripciones o cursos? Escríbenos y un asesor te responderá en menos de 24 horas.</p>
      </section>

      <div className="contactanos-body">
        {/* Formulario */}
        <section className="form-section">
          <h2>Envíanos un mensaje</h2>

          {enviado ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h3>¡Mensaje enviado!</h3>
              <p>Nos comunicaremos contigo pronto.</p>
              <button className="btn-primary" onClick={() => setEnviado(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="contactanos-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className={`form-group ${errors.nombre ? "has-error" : ""}`}>
                  <label htmlFor="nombre">Nombre completo</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Ej: María García" value={form.nombre} onChange={handleChange} />
                  {errors.nombre && <span className="error-msg">{errors.nombre}</span>}
                </div>
                <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="email">Correo electrónico</label>
                  <input id="email" name="email" type="email" placeholder="Ej: maria@correo.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>
              <div className={`form-group ${errors.asunto ? "has-error" : ""}`}>
                <label htmlFor="asunto">Asunto</label>
                <input id="asunto" name="asunto" type="text" placeholder="Ej: Consulta sobre inscripción" value={form.asunto} onChange={handleChange} />
                {errors.asunto && <span className="error-msg">{errors.asunto}</span>}
              </div>
              <div className={`form-group ${errors.mensaje ? "has-error" : ""}`}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={5} placeholder="Escribe tu consulta aquí..." value={form.mensaje} onChange={handleChange} />
                {errors.mensaje && <span className="error-msg">{errors.mensaje}</span>}
              </div>
              <button className="btn-primary" type="submit" disabled={loading}>
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}
        </section>

        {/* Sedes - cargadas desde sedes.json */}
        <section className="sedes-section">
          <h2>Nuestras sedes</h2>
          <div className="sedes-grid">
            {sedes.map((sede) => (
              <div
                key={sede.id}
                className={`sede-card ${sedeSeleccionada === sede.id ? "activa" : ""}`}
                onClick={() => setSedeSeleccionada(sedeSeleccionada === sede.id ? null : sede.id)}
              >
                <div className="sede-img-wrap">
                  <img src={sede.imagen} alt={sede.nombre} onError={(e) => { e.target.style.display = "none"; }} />
                </div>
                <div className="sede-info">
                  <h3>{sede.nombre}</h3>
                  <p className="sede-distrito">{sede.distrito}</p>
                  {sedeSeleccionada === sede.id && (
                    <div className="sede-detalle">
                      <p> Consultar disponibilidad</p>
                      <p> Lun - Vie: 8:00am - 8:00pm</p>
                    </div>
                  )}
                  <span className="sede-toggle">
                    {sedeSeleccionada === sede.id ? "Ver menos ▲" : "Ver más ▼"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
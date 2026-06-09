import { createContext, useState, useEffect } from "react";

export const CursosContext = createContext();

export function CursosProvider({ children }) {
  const [cursos, setCursos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Cargar cursos al montar
  useEffect(() => {
    async function cargarCursos() {
      try {
        const res = await fetch("/cursos.json");
        const data = await res.json();
        setCursos(data);
      } catch (error) {
        console.error("Error cargando cursos:", error);
      } finally {
        setCargando(false);
      }
    }
    cargarCursos();
  }, []);

  // Obtener un curso por ID
  const obtenerCurso = (id) => {
    return cursos.find((c) => c.id === parseInt(id));
  };

  // Agregar curso al carrito
  const agregarAlCarrito = (cursoId) => {
    const cursoExiste = carrito.find((c) => c.id === cursoId);
    
    if (!cursoExiste) {
      const curso = obtenerCurso(cursoId);
      if (curso) {
        setCarrito([...carrito, { ...curso, cantidadInscripcion: 1 }]);
      }
    }
  };

  // Quitar curso del carrito
  const quitarDelCarrito = (cursoId) => {
    setCarrito(carrito.filter((c) => c.id !== cursoId));
  };

  // Limpiar carrito
  const limpiarCarrito = () => {
    setCarrito([]);
  };

  // Verificar si un curso está en el carrito
  const estaEnCarrito = (cursoId) => {
    return carrito.some((c) => c.id === cursoId);
  };

  return (
    <CursosContext.Provider
      value={{
        cursos,
        carrito,
        cargando,
        obtenerCurso,
        agregarAlCarrito,
        quitarDelCarrito,
        limpiarCarrito,
        estaEnCarrito,
      }}
    >
      {children}
    </CursosContext.Provider>
  );
}

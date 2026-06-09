# 🎓 Portal del Estudiante - Documentación Técnica

## 📋 Descripción General

Portal del Estudiante es una **Single Page Application (SPA)** desarrollada con React que permite a los estudiantes explorar la oferta académica, revisar detalles de cursos e inscribirse en ellos.

## ✅ Requisitos Cumplidos

### 1. ✓ React + Componentes Funcionales
- Proyecto creado con React 19.2.6 y Vite
- 8+ componentes funcionales implementados
- Uso correcto de JSX

### 2. ✓ Hooks (useState, useEffect)
- `useState` para manejo de estado local
- `useEffect` para carga de datos desde JSON
- Hook personalizado `useCursos` para acceso al Context

### 3. ✓ React Router - SPA
- 7 rutas principales implementadas
- Navegación sin recarga de página
- Ruta dinámica `/curso/:id` para detalles individuales

### 4. ✓ 5+ Componentes Reutilizables
1. **NavBar** - Barra de navegación con carrito
2. **CursoCard** - Tarjeta de curso reutilizable
3. **Footer** - Pie de página reutilizable
4. **Cursos** - Listado de cursos
5. **Sedes** - Listado de sedes
6. **Beneficios** - Listado de beneficios
7. **Contactanos** - Formulario de contacto

### 5. ✓ Context API - Estado Global
```javascript
// context/CursosContext.jsx
export const CursosContext = createContext();

export function CursosProvider({ children }) {
  const [cursos, setCursos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  
  return (
    <CursosContext.Provider value={{...}}>
      {children}
    </CursosContext.Provider>
  );
}
```

### 6. ✓ Funcionalidades Principales

#### Visualizar Catálogo de Cursos
- Página `/ListaCursos` muestra 10 cursos disponibles
- Grid responsivo con tarjetas `CursoCard`
- Estado de carga implementado

#### Ver Detalle de Curso
- Ruta dinámica `/curso/:id`
- Información completa del curso
- Panel de inscripción lateral

#### Navegar sin Recarga
- React Router manejando todas las rutas
- Transiciones suaves
- NavBar pegajoso (sticky)

#### Agregar/Quitar Cursos
- Botón "Inscribirse" en cada curso
- Botón "Quitar" para desinscribirse
- Contador de inscripciones en NavBar
- Estado persistente en Context API

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── NavBar.jsx          ✓ Barra de navegación
│   ├── NavBar.css
│   ├── CursoCard.jsx       ✓ Tarjeta de curso reutilizable
│   ├── CursoCard.css
│   ├── Footer.jsx          ✓ Pie de página
│   ├── Footer.css
│   ├── Cursos.jsx
│   └── Sedes.jsx
├── pages/
│   ├── About.jsx
│   ├── ListaCursos.jsx     ✓ Actualizado con CursoCard
│   ├── ListaCursos.css
│   ├── CursoDetalle.jsx    ✓ Detalles individuales
│   ├── CursoDetalle.css
│   ├── ListaSedes.jsx
│   ├── Sobrenosotros.jsx
│   ├── Beneficios.jsx
│   └── Contactanos.jsx
├── context/
│   └── CursosContext.jsx   ✓ Contexto global de cursos
├── hooks/
│   └── useCursos.js        ✓ Hook personalizado
├── App.jsx                 ✓ Enrutador principal
├── App.css
├── index.css
└── main.jsx                ✓ Provider envolvente
```

## 🚀 Uso de Context API

### Proveedor (main.jsx)
```javascript
<BrowserRouter>
  <StrictMode>
    <CursosProvider>
      <App />
    </CursosProvider>
  </StrictMode>
</BrowserRouter>
```

### Consumidor (Hook personalizado)
```javascript
import { useCursos } from "../hooks/useCursos";

function MiComponente() {
  const { 
    cursos, 
    carrito, 
    agregarAlCarrito, 
    quitarDelCarrito 
  } = useCursos();
  
  return (...);
}
```

## 🎯 Funcionalidades del Carrito

### Estados Disponibles
```javascript
{
  cursos: [],           // Array de todos los cursos
  carrito: [],          // Cursos inscritos
  cargando: false,      // Estado de carga
  
  // Métodos
  obtenerCurso(id),           // Obtener un curso por ID
  agregarAlCarrito(cursoId),  // Inscribir en curso
  quitarDelCarrito(cursoId),  // Desinscribirse
  limpiarCarrito(),           // Borrar todos los cursos
  estaEnCarrito(cursoId)      // Verificar inscripción
}
```

## 📊 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | About | Página de inicio |
| `/ListaCursos` | ListaCursos | Catálogo de cursos |
| `/curso/:id` | CursoDetalle | Detalles de un curso |
| `/ListaSedes` | ListaSedes | Ubicaciones |
| `/SobreNosotros` | Sobrenosotros | Información de la institución |
| `/Beneficios` | Beneficios | Beneficios para estudiantes |
| `/Contactanos` | Contactanos | Formulario de contacto |

## 🎨 Diseño Responsivo

- ✓ Mobile-first approach
- ✓ Grid/Flexbox responsivo
- ✓ Media queries para todos los componentes
- ✓ Navegación móvil adaptada

## 🔧 Tecnologías Utilizadas

- **React 19.2.6** - Librería UI
- **React Router DOM 7.17.0** - Enrutamiento SPA
- **Vite 8.0.12** - Bundler
- **CSS Modular** - Estilos por componente
- **JSON Local** - Datos mock (cursos.json, sedes.json)

## 📝 Ejemplo: Agregar un Nuevo Curso

1. Actualizar `public/cursos.json`:
```json
{
  "id": 11,
  "nombre": "Tu Nuevo Curso",
  "creditos": 4,
  "turno": "Mañana",
  "detalle": "Descripción del curso"
}
```

2. ¡Listo! La app cargará automáticamente el nuevo curso

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Lint
npm run lint
```

## 📌 Notas Importantes

- Context API proporciona estado global sin necesidad de Redux
- Hook personalizado `useCursos` facilita acceso a datos en cualquier componente
- El carrito es reactivo - se actualiza en tiempo real
- Ruta dinámica permite ver detalles individuales de cada curso

---

**Desarrollado por:** Equipo del Portal del Estudiante  
**Fecha:** 2025  
**Versión:** 1.0.0

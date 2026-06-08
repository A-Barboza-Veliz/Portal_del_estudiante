import { useEffect, useState } from "react";
import "./Sedes.css";

export default function Sedes() {
  const [sedes, setSedes] = useState([]);

  useEffect(() => {
    async function cargarSedes() {
     
      const res = await fetch('/sedes.json');
      const data = await res.json();
      setSedes(data);
    }

    cargarSedes();
  }, []);

  return (
    <div>
      <h1>Nuestras Sedes</h1>
      <ul>
        {sedes.map((sede) => (
          <li key={sede.id}>
            
            <h2>{sede.nombre}</h2>
            
           
            <p>📍 <strong>Distrito:</strong> {sede.distrito}</p>
            
            
            <img 
            src={sede.imagen} 
            alt={sede.nombre}
            className="imagen-sede"
            />
            
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useEffect, useState } from "react";

export default function Cursos() {

    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        async function cargarCursos() {
            const res = await fetch('/cursos.json');
            const data = await res.json();
            setCursos(data);
        }

        cargarCursos();
    }, []);

    return (
        <div>
    <h1>Cursos</h1>
    <ul>
        {cursos.map(curso => (
            <li key={curso.id}>
                
                <h2>{curso.nombre}</h2>
                
                
                <p>{curso.detalle}</p>
                
                
                <p>
                    <strong>Duración de Curso:</strong> <data value={curso.creditos}>{curso.creditos} horas</data>
                </p>
                <p>
                    <strong>Turno:</strong> <time>{curso.turno}</time>
                </p>
                
                <hr />
            </li>
        ))}
    </ul>
</div>
    )



        

   

}


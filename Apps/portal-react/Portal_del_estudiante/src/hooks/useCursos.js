import { useContext } from "react";
import { CursosContext } from "../context/CursosContext";

export function useCursos() {
  const context = useContext(CursosContext);

  if (!context) {
    throw new Error("useCursos debe ser usado dentro de CursosProvider");
  }

  return context;
}

import React, { useContext } from "react";
import { ContenidoMateriaDocente } from "./ContenidoMateriaDocente";
import DataMateria from "./contex/AppContext";

export const AsignacionMateriaDocente = () => {
  //para mostrar materia
  const { state } = useContext(DataMateria);
  //console.log("state", state);
  //para mostrar docente

  return (
    <div>
      <h4>Asignación de Docentes</h4>
      <table className="table table-bordered">
        <thead>
          <th scope="col">Materia</th>
          <th scope="col">Siglas</th>
          <th scope="col">Horario</th>
          <th scope="col">Grupo</th>
          <th scope="col">Docente</th>
          <th scope="col">Ambiente</th>
        </thead>
        {state.map((item) => {
          return <ContenidoMateriaDocente key={item.id} {...item} />;
        })}
      </table>

      <button type="button" className="btn btn-outline-secondary">
        Guardar
      </button>
    </div>
  );
};

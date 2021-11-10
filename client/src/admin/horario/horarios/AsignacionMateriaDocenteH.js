import React from "react";
import { ContenidoMateriaDocenteH } from "./ContenidoMateriaDocenteH";

export const AsignacionMateriaDocenteH = () => {
  //para mostrar materia
  /////const { state } = useContext(DataMateria);
  //console.log("state", state);
  //para mostrar docente

  return (
    <div>
      <h4>Asignación de Docentes</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Materia</th>
            <th scope="col">Siglas</th>
            <th scope="col">Horario</th>
            <th scope="col">Grupo</th>
            <th scope="col">Docente</th>
            <th scope="col">Ambiente</th>
          </tr>
        </thead>
        {/*state.map((item) => {
          return <ContenidoMateriaDocenteH key={item.id} {...item} />;
        })*/}
        <ContenidoMateriaDocenteH />
      </table>

      <button type="button" className="btn btn-dark">
        Guardar
      </button>
    </div>
  );
};

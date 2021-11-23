import React, { useContext } from "react";

import { ContenidoListaSemestre } from "./ContenidoListaSemestre";
import DataSemestre from "./contex/AppContexSemestre";

export const ListaSemestre = () => {
  const { state } = useContext(DataSemestre);
  console.log("listaSemestrestate", state);
  return (
    <div>
      <h4 className="titleForm">Lista de Semestres</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Nro.</th>
            <th scope="col">Semestre</th>
            <th scope="col">Año</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {state.length > 0 ? (
          state.map((item) => {
            return <ContenidoListaSemestre key={item.id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="4">No hay semestres registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <div>
        <button type="button" className="btn btn-dark">
          Imprimir
        </button>
      </div>
    </div>
  );
};

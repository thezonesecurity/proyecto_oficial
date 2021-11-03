import React, { useContext } from "react";

import { ContenidoLista } from "./ContenidoLista";
import DataMateria from "./contex/AppContext";
export const ListaMateria = () => {
  const { state, dispatch } = useContext(DataMateria);
  //console.log("state", state);
  return (
    <div>
      <h4>Listado de Materias</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Materia</th>
            <th scope="col">Sigla</th>
            <th scope="col">Carga Horaria</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {state.length > 0 ? (
          state.map((item) => {
            return <ContenidoLista {...item} />;
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan="5">No hay materias registradas...</td>
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

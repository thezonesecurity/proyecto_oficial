import React, { useContext } from "react";

import { ContenidoLista } from "./ContenidoLista";
import DataMateria from "./contex/AppContext";
export const ListaMateria = () => {
  const { state, dispatch } = useContext(DataMateria);
  //console.log("state", state);
  return (
    <div>
      <h4>Listado de Materias</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Materia</th>
            <th scope="col">Sigla</th>
            <th scope="col">Carga Horaria</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {state.map((item) => {
          return <ContenidoLista key={item.id} {...item} />;
        })}
      </table>
      <div>
        <button type="button" className="btn btn-dark">
          Imprimir
        </button>
      </div>
    </div>
  );
};

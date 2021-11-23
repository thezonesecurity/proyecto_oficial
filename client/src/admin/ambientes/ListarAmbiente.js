import React, { useContext } from "react";

import { ContenidoListaAmbiente } from "./ContenidoListaAmbiente";
import DataAmbiente from "./contex/AppContext";

export const ListarAmbiente = () => {
  const { state, dispatch } = useContext(DataAmbiente);
  //console.log("state", state);
  return (
    <>
      <h4 className="titleForm">Lista de Ambientes</h4>
      <table className="table table-dark">
        {/*class="container" */}
        <thead>
          <tr>
            <th scope="col">Nro.</th>
            <th scope="col">Ambiente</th>
            <th scope="col">Ubicacion</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {state.length > 0 ? (
          state.map((item) => {
            return <ContenidoListaAmbiente key={item.id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="5">No hay Ambientes registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </>
  );
};

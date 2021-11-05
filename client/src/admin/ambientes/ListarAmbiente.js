import React, { useContext } from "react";
import { ContenidoListaAmbiente } from "./ContenidoListaAmbiente";
import DataAmbiente from "./contex/AppContext";
export const ListarAmbiente = () => {
  const { state, dispatch } = useContext(DataAmbiente);
  //console.log("state", state);
  return (
    <div>
      <h4>Lista de Ambientes</h4>
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
            return <ContenidoListaAmbiente {...item} />;
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan="5">No hay Ambientes registrados...</td>
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

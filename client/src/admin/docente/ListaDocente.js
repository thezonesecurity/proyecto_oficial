import React, { useContext } from "react";
import { ContenidoLista } from "./ContenidoLista";
import DataDocente from "./contex/AppContext";

export const ListaDocente = () => {
  const { state, dispatch } = useContext(DataDocente);

  //console.log("state", state);

  return (
    <div>
      <h4>Listado de Docentes</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">C.I.</th>
            <th scope="col">E-mail</th>
            <th scope="col">Direccion</th>
            <th scope="col">telefono</th>
            <th scope="col">Carga horaria</th>
          </tr>
        </thead>
        {state.length > 0 ? (
          state.map((item) => {
            return <ContenidoLista key={item.id} {...item} />;
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan="8">No hay Docentes registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </div>
  );
};

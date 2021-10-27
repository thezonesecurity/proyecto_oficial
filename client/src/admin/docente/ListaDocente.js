import React, { useContext } from "react";
import { ContenidoTabla } from "./ContenidoTabla";
import DataDocente from "./contex/AppContext";

export const ListaDocente = () => {
  const { state, dispatch } = useContext(DataDocente);
  return (
    <div>
      <h8>Listado de Docentes</h8>

      <table className="table">
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
        {state.map((item) => {
          return <ContenidoTabla key={item.id} {...item} />;
        })}
      </table>
      <button type="button" className="btn btn-secondary">
        Imprimir
      </button>
    </div>
  );
};

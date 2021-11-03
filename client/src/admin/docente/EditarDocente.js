import React, { useContext } from "react";
import { ContenidoTabla } from "./ContenidoTabla";
import DataDocente from "./contex/AppContext";

export const EditarDocente = () => {
  const { state, dispatch } = useContext(DataDocente);
  const {
    num,
    nombre,
    apellidos,
    ci,
    email,
    direccion,
    telefono,
    carga_horaria,
    id,
  } = state;

  return (
    <div>
      <h4>Editar Docentes</h4>
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
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {state.length > 0 ? (
          state.map((item) => {
            return <ContenidoTabla key={item.id} {...item} />;
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan="9">No hay Docentes para Editar...</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

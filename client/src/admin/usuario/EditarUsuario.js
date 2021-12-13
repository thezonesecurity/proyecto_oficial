import React, { useContext } from "react";

import { ContenidoTabla } from "./ContenidoTabla";
import DataUsuario from "./contex/AppContext";

export const EditarUsuario = () => {
  const { state } = useContext(DataUsuario);

  return (
    <>
      <h4 className="titleForm">Editar Usuarios</h4>
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
            <tr className="table-active">
              <td colSpan="9">No hay Docentes para Editar...</td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};

/*
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
  } = state; */

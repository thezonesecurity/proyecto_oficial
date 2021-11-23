import React, { useContext, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";

import { actions } from "./contants/actions";
import DataDocente from "./contex/AppContext";
import { ModalDocente } from "./ModalDocente";

export const ContenidoTabla = ({
  // estos datos esta siendo recuperados del editar docente
  apellidos,
  nombre,
  carga_horaria,
  ci,
  direccion,
  email,
  telefono,
  id,
  num,
}) => {
  //  console.log(num);
  const { state, dispatch } = useContext(DataDocente);
  //(handlerClick) es para elminiar al docente
  const handlerClickDelete = (id) => {
    dispatch({ type: actions.REMOVE_FORM, payload: id });
  };

  return (
    <tbody>
      <tr key={id}>
        <th scope="row">{num}</th>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{ci}</td>
        <td>{email}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td>{carga_horaria}</td>
        <td>
          <ModalDocente />
          {"   "}
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              handlerClickDelete(id);
            }}
          >
            <MdDeleteSweep />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

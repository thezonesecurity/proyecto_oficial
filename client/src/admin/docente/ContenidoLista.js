import React, { useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { useSelector } from "react-redux";

import DataDocente from "./contex/AppContext";
import { ModalDocente } from "./ModalDocente";
import { endpointsD } from "./types/endPointsD";

export const ContenidoLista = (props) => {
  //(handlerClick) es para elminiar al docente
  const { state, dispatch } = useContext(DataDocente);
  const { auth } = useSelector((state) => state);
  const { token } = auth;

  const handlerClickDelete = async (id) => {
    //dispatch({ type: actions.REMOVE_FORM, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminaria al usuario -> ${props.nombre} ${props.apellidos}`
      )
    ) {
      //logica pa eliminar
      //console.log("elimi8nado");
      // console.log("be", props._id);
      fetch(endpointsD.deleteUser.url + props._id, {
        method: endpointsD.deleteUser.method,
        headers: new Headers({
          Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
    }
  };
  // console.log("props Contenido docente", props._id);

  return (
    <>
      <tbody>
        <tr key={props._id} className="table-active">
          <th scope="row">1</th>
          <td>{props.nombre}</td>
          <td>{props.apellidos}</td>
          <td>{props.ci}</td>
          <td>{props.email}</td>
          <td>{props.direccion}</td>
          <td>{props.telefono}</td>
          {props.carga_horaria ? <td> {props.carga_horaria}</td> : <td>0</td>}
          <td>{props.rolUser}</td>
          <td>
            <ModalDocente dataItem={props} />
            {"   "}
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                handlerClickDelete(props.id);
              }}
            >
              <MdDeleteSweep />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

{
  /*
handlerClickDelete(props.id);
*/
}

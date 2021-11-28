import React, { useContext, useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import axios from "axios";

import DataDocente from "./contex/AppContext";
import { actions } from "./contants/actions";
import { ModalDocente } from "./ModalDocente";

export const ContenidoLista = (props) => {
  //(handlerClick) es para elminiar al docente
  const { state, dispatch } = useContext(DataDocente);
  const handlerClickDelete = async (id) => {
    //dispatch({ type: actions.REMOVE_FORM, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminaria al usuario -> ${props.nombre} ${props.apellidos}`
      )
    ) {
      //logica pa eliminar
      await axios.delete(`http://192.168.1.112:8000/api1.0/user/${props._id}`);
    }
  };
  // console.log("props Contenido docente", props._id);

  return (
    <>
      <tbody>
        <tr key={props._id} class="table-active">
          <th scope="row">1</th>
          <td>{props.nombre}</td>
          <td>{props.apellidos}</td>
          <td>{props.ci}</td>
          <td>{props.email}</td>
          <td>{props.direccion}</td>
          <td>{props.telefono}</td>
          <td> {props.carga_horaria}</td>
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

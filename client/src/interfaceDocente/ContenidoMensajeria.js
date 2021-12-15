import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { endPointsID } from "./constants/endPointsID";

import { ModalMensajes } from "./ModalMensajes";

export const ContenidoMensajeria = (props) => {
  const handlerClickDelete = (id) => {
    //console.log("eleminado");
    //dispatch({ type: Actions.REMOVE_FORM_M, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminara el mensaje para -> ${props.para} `
      )
    ) {
      //logica pa eliminar
      //console.log("elimi8nado");
      // console.log("be", props._id);
      fetch(endPointsID.eliminarMensaje.url + props._id, {
        method: endPointsID.eliminarMensaje.method,
        headers: new Headers({
          //  Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
    }
  };
  return (
    <tbody>
      <tr key={props._id} className="table-active">
        <td>{props.de}</td>
        <td>{props.para}</td>
        <td>{props.asunto}</td>
        <td>
          <ModalMensajes dataItem={props} />
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              handlerClickDelete(props._id);
            }}
          >
            <MdDeleteSweep />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

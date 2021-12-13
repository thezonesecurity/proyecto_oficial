import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { endPointsN } from "./constants/endPointsN";
import ModalNotificaciones from "./ModalNotificaciones";

export const ContenidoNotificaciones = (props) => {
  console.log("lista Notificaciones", props);

  const handlerClickDelete = (id) => {
    //dispatch({ type: ActionsSemestre.REMOVE_FORM_SEMESTRE, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminaria las notificaciones -> ${props.de} ${props.asunto}`
      )
    ) {
      //logica pa eliminar
      //console.log("elimi8nado");
      // console.log("be", props._id);
      fetch(endPointsN.eliminarNotificaciones.url + props._id, {
        method: endPointsN.eliminarNotificaciones.method,
        headers: new Headers({
          //Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
    }
  };
  return (
    <tbody>
      <tr className="table-active">
        <td>{props.de}</td>
        <td>
          <ModalNotificaciones dataItem={props} />
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

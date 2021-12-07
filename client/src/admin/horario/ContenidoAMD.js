import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { endpointsAMD } from "./horarios/constants/endPointsAMD";
import { ModalAMD } from "./ModalAMD";

export const ContenidoAMD = (props) => {
  //console.log("lista AMD", props);
  const handlerClickDelete = () => {
    //dispatch({ type: actionsAmb.REMOVE_FORM_A, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminaria la asignacion de materia "${props.materia}" con el docente "${props.docente}"`
      )
    ) {
      //logica pa eliminar
      // console.log("be", props._id);
      fetch(endpointsAMD.deleteAMD.url + props._id, {
        method: endpointsAMD.deleteAMD.method,
        headers: new Headers({
          // Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
      // console.log("AMD eliminado..");
    }
  };
  return (
    <tbody>
      <tr className="table-active">
        <th scope="row">1</th>
        <td>{props.materia}</td>
        <td>{props.docente}</td>
        <td>{props.grupo}</td>
        <td>
          <ModalAMD dataItem={props} />{" "}
          <button className="btn btn-outline-danger btn-sm">
            <MdDeleteSweep
              onClick={() => {
                handlerClickDelete();
              }}
            />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

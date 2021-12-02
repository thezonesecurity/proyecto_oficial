import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";

import { ActionsSemestre } from "./constants/ActionsSemestre";
import { endPointsS } from "./constants/endPointsS";
import DataSemestre from "./contex/AppContexSemestre";
import { ModalSemestre } from "./ModalSemestre";

export const ContenidoListaSemestre = (props) => {
  const { dispatch } = useContext(DataSemestre);
  const handlerClickDelete = (id) => {
    //dispatch({ type: ActionsSemestre.REMOVE_FORM_SEMESTRE, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminaria el Semestre -> ${props.año} ${props.semestre}`
      )
    ) {
      //logica pa eliminar
      //console.log("elimi8nado");
      // console.log("be", props._id);
      fetch(endPointsS.eliminarSemestre.url + props._id, {
        method: endPointsS.eliminarSemestre.method,
        headers: new Headers({
          //Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
    }
  };
  return (
    <tbody>
      <tr key={props._id} className="table-active">
        <th>1</th>
        <td>{props.semestre}</td>
        <td>{props.año}</td>
        <td>
          <ModalSemestre dataItem={props} />
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

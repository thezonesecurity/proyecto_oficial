import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";

import { actionsAmb } from "./contants/actionsAmb";
import { endpointsAmbiente } from "./contants/enPointsAmbiente";
import DataAmbiente from "./contex/AppContext";
import { ModalAmbiente } from "./ModalAmbiente";

export const ContenidoListaAmbiente = (props) => {
  const { state, dispatch } = useContext(DataAmbiente);
  //console.log("contenido lista", props);
  const handlerClickDelete = () => {
    //dispatch({ type: actionsAmb.REMOVE_FORM_A, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminaria el ambiente ${props.ambiente} y el piso ${props.ubicacion}`
      )
    ) {
      //logica pa eliminar
      // console.log("be", props._id);
      fetch(endpointsAmbiente.eliminarAmbiente.url + props._id, {
        method: endpointsAmbiente.eliminarAmbiente.method,
        headers: new Headers({
          // Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
      console.log("ambiente eliminado..");
    }
  };
  return (
    <tbody>
      <tr key={props._id} className="table-active">
        <th className="col">1</th>
        <td className="col">{props.ambiente}</td>
        <td className="col">{props.ubicacion}</td>
        <td>
          <ModalAmbiente dataItem={props} />{" "}
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              handlerClickDelete();
            }}
          >
            <MdDeleteSweep />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

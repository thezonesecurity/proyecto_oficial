import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";

import { actionsAmb } from "./contants/actionsAmb";
import DataAmbiente from "./contex/AppContext";
import { ModalAmbiente } from "./ModalAmbiente";

export const ContenidoListaAmbiente = ({ id, num, ambiente, ubicacion }) => {
  const { state, dispatch } = useContext(DataAmbiente);
  //console.log("contenido lista", state);
  const handlerClickDelete = (id) => {
    //console.log("eleminado");
    dispatch({ type: actionsAmb.REMOVE_FORM_A, payload: id });
  };
  return (
    <tbody>
      <tr key={id} class="table-active">
        <th className="col">{num}</th>
        <td className="col">{ambiente}</td>
        <td className="col">{ubicacion}</td>
        <td>
          <ModalAmbiente />
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

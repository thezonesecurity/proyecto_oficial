import React from "react";
import { MdDeleteSweep } from "react-icons/md";

import { endpointsM } from "./constants/endPointsM";
import { ModalMateria } from "./ModalMateria";

export const ContenidoLista = (
  /*num,
  materia,
  sigla,
  carga_horaria,
  id,
  semestre,*/
  props
) => {
  // const { state, dispatch } = useContext(DataMateria);
  //console.log("contenido lista", state);
  const handlerClickDelete = (id) => {
    //console.log("eleminado");
    //dispatch({ type: Actions.REMOVE_FORM_M, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminara la materia -> ${props.materia} ${props.sigla} ${props.carga_horaria}`
      )
    ) {
      //logica pa eliminar
      //console.log("elimi8nado");
      // console.log("be", props._id);
      fetch(endpointsM.deleteMateria.url + props._id, {
        method: endpointsM.deleteMateria.method,
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
        <th scope="row">1</th>
        <td>{props.materia}</td>
        <td>{props.sigla}</td>
        <td>{props.semestre}</td>
        <td>{props.carga_horaria}</td>
        <td>
          <ModalMateria dataItem={props} />
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

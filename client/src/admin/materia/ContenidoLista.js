import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { Actions } from "./constants/Actions";
import DataMateria from "./contex/AppContext";
import { ModalMateria } from "./ModalMateria";

export const ContenidoLista = ({ num, materia, sigla, carga_horaria, id }) => {
  const { state, dispatch } = useContext(DataMateria);
  //console.log("contenido lista", state);
  const handlerClick = (id) => {
    //console.log("eleminado");
    dispatch({ type: Actions.REMOVE_FORM_M, payload: id });
  };

  return (
    <tbody>
      <tr key={id}>
        <th scope="row">{num}</th>
        <td>{materia}</td>
        <td>{sigla}</td>
        <td>{carga_horaria}</td>
        <td>
          <ModalMateria />
          {"   "}
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              handlerClick(id);
            }}
          >
            <MdDeleteSweep />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

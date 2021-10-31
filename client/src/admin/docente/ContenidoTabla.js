import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { actions } from "./contants/actions";
import DataDocente from "./contex/AppContext";
import { ModalDocente } from "./ModalDocente";

export const ContenidoTabla = ({
  apellidos,
  nombre,
  carga_horaria,
  ci,
  direccion,
  email,
  telefono,
  id,
  num,
}) => {
  //  console.log(num);
  const { state, dispatch } = useContext(DataDocente);
  const handlerClick = (id) => {
    dispatch({ type: actions.REMOVE_FORM, payload: id });
  };

  return (
    <tbody>
      <tr>
        <th scope="row">{num}</th>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{ci}</td>
        <td>{email}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td>{carga_horaria}</td>
        <td>
          <button className="btn btn-outline-secondary btn-sm">
            <ModalDocente />
          </button>
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

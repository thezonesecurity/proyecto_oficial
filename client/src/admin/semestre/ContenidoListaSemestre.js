import React, { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";

import { ActionsSemestre } from "./constants/ActionsSemestre";
import DataSemestre from "./contex/AppContexSemestre";
import { ModalSemestre } from "./ModalSemestre";

export const ContenidoListaSemestre = ({ num, año, id, semestre }) => {
  const { dispatch } = useContext(DataSemestre);
  const handlerClickDelete = (id) => {
    dispatch({ type: ActionsSemestre.REMOVE_FORM_SEMESTRE, payload: id });
  };
  return (
    <tbody>
      <tr key={id} className="table-active">
        <th>{num}</th>
        <td>{semestre}</td>
        <td>{año}</td>
        <td>
          <ModalSemestre id={id} num={num} semestre={semestre} año={año} />
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

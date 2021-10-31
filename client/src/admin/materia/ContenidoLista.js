import React from "react";
import { MdCreate, MdDeleteSweep } from "react-icons/md";

export const ContenidoLista = ({ num, materia, sigla, carga_horaria }) => {
  return (
    <tbody>
      <tr>
        <th scope="row">{num}</th>
        <td>{materia}</td>
        <td>{sigla}</td>
        <td>{carga_horaria}</td>
        <td>
          <button className="btn btn-outline-secondary btn-sm">
            <MdCreate />
          </button>
          {"   "}
          <button className="btn btn-outline-danger btn-sm">
            <MdDeleteSweep />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

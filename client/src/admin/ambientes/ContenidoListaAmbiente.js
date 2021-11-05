import React from "react";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
export const ContenidoListaAmbiente = ({ id, num, ambiente, ubicacion }) => {
  return (
    <tbody>
      <tr key={id}>
        <th class="col">{num}</th>
        <td class="col">{ambiente}</td>
        <td class="col">{ubicacion}</td>
        <td>
          <MdCreate />
          {"   "}
          <button className="btn btn-outline-danger btn-sm">
            <MdDeleteSweep />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

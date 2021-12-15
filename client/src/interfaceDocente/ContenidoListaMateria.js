import React from "react";

export const ContenidoListaMateria = (props) => {
  return (
    <tbody>
      <tr key={props._id} className="table-active">
        <td>{props.materia}</td>
        <td>{props.ambiente}</td>
      </tr>
    </tbody>
  );
};

import React from "react";

export const ContenidoListaAMD = (props) => {
  console.log("lista AMD", props);
  return (
    <tbody>
      <tr className="table-active">
        <th scope="row">1</th>
        <td>{props.materia}</td>
        <td>{props.docente}</td>
        <td>{props.ambiente}</td>
        <td>{props.grupo}</td>
      </tr>
    </tbody>
  );
};

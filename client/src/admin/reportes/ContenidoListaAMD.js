import React from "react";

export const ContenidoListaAMD = (props) => {
  console.log("lista AMD", props);
  return (
    <tbody>
      <tr className="table-active">
        <td>{props.materia}</td>
        <td>{props.docente}</td>
        <td>{props.ci}</td>
        <td>{props.ambiente}</td>
        <td>{props.grupo}</td>
      </tr>
    </tbody>
  );
};

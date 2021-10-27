import React, { useEffect, useState } from "react";

export const ContenidoTabla = ({
  apellidos,
  nombre,
  carga_horaria,
  ci,
  direccion,
  email,
  telefono,
  id,
}) => {
  //console.log( state);

  return (
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{ci}</td>
        <td>{email}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td> {carga_horaria}</td>
      </tr>
    </tbody>
  );
};

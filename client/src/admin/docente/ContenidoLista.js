import React from "react";

export const ContenidoLista = ({
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
        <td> {carga_horaria}</td>
      </tr>
    </tbody>
  );
};

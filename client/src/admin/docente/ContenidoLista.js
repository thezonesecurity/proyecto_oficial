import React, { useEffect, useState } from "react";
import axios from "axios";

export const ContenidoLista = (
  {
    /*
  apellidos,
  nombre,
  carga_horaria,
  ci,
  direccion,
  email,
  telefono,
  id,
  num,
  */
  }
) => {
  //  console.log(num);

  const [data, setData] = useState({});
  useEffect(() => {
    const RequestUser = async () => {
      const dataUser = await axios
        .get("http://localhost:8000/api1.0/user/619028c0cc5656748d906eb7")
        .then(function (response) {
          //console.log("api", response.data.serverResponse);
          setData(response.data.serverResponse);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    };
    RequestUser();
  }, []);
  //console.log("apiData2", data);
  const {
    id,
    nombre,
    apellidos,
    ci,
    email,
    direccion,
    telefono,
    carga_horaria,
  } = data;

  return (
    <tbody>
      {/* <tr key={id}>
        <th scope="row">{num}</th>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{ci}</td>
        <td>{email}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td> {carga_horaria}</td>
      </tr>*/}
      <tr key={id}>
        <th scope="row">1</th>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{ci}</td>
        <td>{email}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td>{carga_horaria}</td>
      </tr>
    </tbody>
  );
};

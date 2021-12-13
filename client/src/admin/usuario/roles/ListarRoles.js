import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { endpointsD } from "../types/endPointsD";
import { ContenidoRol } from "./ContenidoRol";

export const ListarRoles = () => {
  //------------------------------LOGICA PARA LISTAR USARIOS-------------------------
  const [dataRol, setDataRol] = useState([]);
  const { auth } = useSelector((state) => state);
  const { token } = auth;
  console.log("token", token);

  useEffect(() => {
    fetch(endpointsD.listRol.url, {
      method: endpointsD.listRol.method,
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log("serverREsponse rol", data.ServerResponse);
        setDataRol(data.ServerResponse);
      });
  }, []);
  console.log("datosApi ROl", dataRol);
  return (
    <>
      <h4 className="titleForm">Listado de Usuarios</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Metodo</th>
            <th scope="col">URL</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {dataRol.length > 0 ? (
          dataRol.map((item) => {
            return <ContenidoRol key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="10">No hay Roles registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
      <div></div>
    </>
  );
};

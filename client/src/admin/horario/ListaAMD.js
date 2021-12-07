import React, { useEffect, useState } from "react";

import { ContenidoAMD } from "./ContenidoAMD";
import { endpointsAMD } from "./horarios/types/endPointsAMD";

export const ListaAMD = () => {
  //-------------------------peticion list de Asignacion materia docente-------------------
  const [listAMD, setListAMD] = useState({});
  useEffect(() => {
    fetch(endpointsAMD.listAMD.url, {
      method: endpointsAMD.listAMD.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log("serverREsponse AMD", data.serverResponse);
        setListAMD(data.serverResponse);
      });
    console.log("datosApi AMD ", listAMD);
  }, []);
  return (
    <div>
      <h4 className="titleForm">Reportes de Docentes y Materias</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Materia</th>
            <th scope="col">Docente</th>
            <th scope="col">Grupo</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {listAMD.length > 0 ? (
          listAMD.map((item) => {
            return <ContenidoAMD key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="6">No hay Ambientes registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </div>
  );
};

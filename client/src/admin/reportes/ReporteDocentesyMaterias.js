import React, { useEffect, useState } from "react";

import { endpointsAMD } from "../horario/horarios/types/endPointsAMD";
import { ContenidoListaAMD } from "./ContenidoListaAMD";

export const ReporteDocentesyMaterias = () => {
  //-------------------------peticion list de Asignacion materia docente-------------------
  const [listAMD, setListAMD] = useState([]);
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
        console.log("serverREsponse AMD", data.serverResponse);
        setListAMD(data.serverResponse);
      });
    console.log("datosApi AMD ", listAMD);
  }, []);
  return (
    <>
      <h4 className="titleForm">Reportes de Asignacion Materias - Docentes</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Materia</th>
            <th scope="col">Docente</th>
            <th scope="col">C.I.</th>
            <th scope="col">Ambiente</th>
            <th scope="col">Grupo</th>
          </tr>
        </thead>
        {listAMD.length > 0 ? (
          listAMD.map((item) => {
            return <ContenidoListaAMD key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="5">No hay Ambientes registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </>
  );
};

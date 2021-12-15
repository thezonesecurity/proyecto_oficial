import React, { useEffect, useState } from "react";

import { endPointsID } from "./constants/endPointsID";
import { ContenidoListaMateria } from "./ContenidoListaMateria";

export const MateriasAsignadasDocente = () => {
  //const { state } = useContext(DataSemestre);
  //console.log("listaSemestrestate", state);
  ///-------------------para ver las lista de materias asignadas al docente-----------------------------
  const [listaMateriasAsignadasD, setlistaMateriasAsignadasD] = useState([]);
  //------------------------------------
  useEffect(() => {
    fetch(endPointsID.asignacionLMD.url, {
      method: endPointsID.asignacionLMD.method,
      headers: new Headers({
        //Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log("serverResponse", data.serverResponse);
        setlistaMateriasAsignadasD(data.serverResponse);
      });
    //console.log("datosApi", listaMateriasAsignadasD);
  }, []);
  ///---------------------------------------------------------------------

  return (
    <div>
      <h4 className="titleForm">Materias Asignadas al Docente</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Materia</th>
            <th scope="col">Ambiente</th>
          </tr>
        </thead>
        {listaMateriasAsignadasD.length > 0 ? (
          listaMateriasAsignadasD.map((item) => {
            return <ContenidoListaMateria key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="4">No hay materias asignadas...</td>
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

/*
<tbody>
          <tr className="table-active">
            <td>Programacion</td>
            <td>Sis-101</td>
            <td>Amb.2 3er. P.</td>
            <td>lunes</td>
            <td>08:00 - 08:45</td>
          </tr>
          <tr className="table-active">
            <td>Forence</td>
            <td>SIS-737</td>
            <td>Amb.1 3er. P.</td>
            <td>miercoles</td>
            <td>10:00 - 10:45</td>
          </tr>
        </tbody>
*/

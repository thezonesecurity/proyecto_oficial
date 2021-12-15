import React, { useEffect, useState } from "react";
import { endPointsIE } from "./constants/endPointsIE";
import { ContenidoMateriasProgramadas } from "./ContenidoMateriasProgramadas";

export const VerMateriasProgramadas = () => {
  ///-------------------para ver las materias programadas-----------------------------
  const [listIEstudiante, setListIEstudiante] = useState([]);
  //------------------------------------
  useEffect(() => {
    fetch(endPointsIE.listaIEstudiante.url, {
      method: endPointsIE.listaIEstudiante.method,
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
        console.log("serverResponse", data.severResponse);
        setListIEstudiante(data.severResponse);
      });
    //console.log("datosApi", listSemestre);
  }, []);

  return (
    <>
      <h4 className="titleForm">Marerias programadas</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sigla</th>
            <th scope="col">Materia</th>
            <th scope="col">Grupo</th>
            <th scope="col">1 Parcial</th>
            <th scope="col">2 Parcial</th>
            <th scope="col">3 Parcial</th>
            <th scope="col">Prom P.</th>
            <th scope="col">Ex. F.</th>
            <th scope="col">Nota F.</th>
            <th scope="col">2do T.</th>
          </tr>
        </thead>
        {listIEstudiante.length > 0 ? (
          listIEstudiante.map((item) => {
            return <ContenidoMateriasProgramadas key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="11">No hay materias programadas.....</td>
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

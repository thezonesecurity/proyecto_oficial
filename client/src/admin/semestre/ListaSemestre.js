import React, { useEffect, useState } from "react";
import { endPointsS } from "./constants/endPointsS";

import { ContenidoListaSemestre } from "./ContenidoListaSemestre";

export const ListaSemestre = () => {
  //const { state } = useContext(DataSemestre);
  //console.log("listaSemestrestate", state);
  ///-------------------para ver las lista de semestres-----------------------------
  const [listSemestre, setListSemestre] = useState([]);
  //------------------------------------
  useEffect(() => {
    fetch(endPointsS.listaSemestre.url, {
      method: endPointsS.listaSemestre.method,
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
        // console.log("serverResponse", data.severResponse);
        setListSemestre(data.severResponse);
      });
    //console.log("datosApi", listSemestre);
  }, []);
  ///---------------------------------------------------------------------
  return (
    <div>
      <h4 className="titleForm">Lista de Semestres</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Nro.</th>
            <th scope="col">Semestre</th>
            <th scope="col">Año</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {listSemestre.length > 0 ? (
          listSemestre.map((item) => {
            return <ContenidoListaSemestre key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="4">No hay semestres registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <div>
        <button type="button" className="btn btn-dark">
          Imprimir
        </button>
      </div>
    </div>
  );
};

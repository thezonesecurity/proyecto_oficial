import React, { useContext, useEffect, useState } from "react";
import { endpointsM } from "./constants/endPointsM";

import { ContenidoLista } from "./ContenidoLista";
import DataMateria from "./contex/AppContext";

export const ListaMateria = () => {
  const { state, dispatch } = useContext(DataMateria);

  const [dataMateria, setDataMateria] = useState({});
  useEffect(() => {
    fetch(endpointsM.listMateria.url, {
      method: endpointsM.listMateria.method,
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
        //console.log("serverREsponse", data.serverResponse);
        setDataMateria(data.serverResponse);
      });
    console.log("datosApi", dataMateria);
  }, []);
  //console.log("state", state);
  return (
    <>
      <h4 className="titleForm">Listado de Materias</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Materia</th>
            <th scope="col">Sigla</th>
            <th scope="col">Semestre</th>
            <th scope="col">Carga Horaria</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {dataMateria.length > 0 ? (
          dataMateria.map((item) => {
            return <ContenidoLista key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="6">No hay materias registradas...</td>
            </tr>
          </tbody>
        )}
      </table>
      <div>
        <button type="button" className="btn btn-dark">
          Imprimir
        </button>
      </div>
    </>
  );
};

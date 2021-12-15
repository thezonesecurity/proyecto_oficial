import React, { useEffect, useState } from "react";
import { endPointsID } from "./constants/endPointsID";

import { ContenidoListaMateria } from "./ContenidoListaMateria";

export const ListaMateriAsignacionD = () => {
  //const { state, dispatch } = useContext(DataMateria);

  const [dataAsignacionMateria, setdataAsignacionMateria] = useState([]);
  useEffect(() => {
    fetch(endPointsID.listaInterfazDocente.url, {
      method: endPointsID.listaInterfazDocente.method,
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
        setdataAsignacionMateria(data.serverResponse);
      });
    console.log("datosApi", dataAsignacionMateria);
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
        {dataAsignacionMateria.length > 0 ? (
          dataAsignacionMateria.map((item) => {
            return <ContenidoListaMateria key={item._id} {...item} />;
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

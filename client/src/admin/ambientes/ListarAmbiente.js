import React, { useEffect, useState } from "react";
import { endpointsAmbiente } from "./contants/enPointsAmbiente";

import { ContenidoListaAmbiente } from "./ContenidoListaAmbiente";

export const ListarAmbiente = () => {
  //const { state, dispatch } = useContext(DataAmbiente);
  //console.log("state", state);
  const [listAmbiente, setListAmbiente] = useState([]);
  useEffect(() => {
    fetch(endpointsAmbiente.listarAmbiente.url, {
      method: endpointsAmbiente.listarAmbiente.method,
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
        setListAmbiente(data.serverResponse);
      });
    //console.log("datosApi", listAmbiente);
  }, []);
  return (
    <>
      <h4 className="titleForm">Lista de Ambientes</h4>
      <table className="table table-dark">
        {/*class="container" */}
        <thead>
          <tr>
            <th scope="col">Ambiente</th>
            <th scope="col">Ubicacion</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {listAmbiente.length > 0 ? (
          listAmbiente.map((item) => {
            return <ContenidoListaAmbiente key={item._id} {...item} />;
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

import React, { useContext, useEffect, useState } from "react";
import { ContenidoLista } from "./ContenidoLista";
import DataDocente from "./contex/AppContext";
import axios from "axios";
export const ListaDocente = () => {
  const { state, dispatch } = useContext(DataDocente);
  //console.log("state", state);
  /*
  //---------------------------------------------------------------------------------------
  const [data, setData] = useState({});
  useEffect(() => {
    const RequestUser = async () => {
      const dataUser = await axios
        .get("http://localhost:8000/api1.0/user/")
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
  const peticionGet = () => {};
  //-----------------------------------------------------------------------------------------
*/
  return (
    <div>
      <h4>Listado de Docentes</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">C.I.</th>
            <th scope="col">E-mail</th>
            <th scope="col">Direccion</th>
            <th scope="col">telefono</th>
            <th scope="col">Carga horaria</th>
          </tr>
        </thead>
        {state.length > 0 ? (
          state.map((item) => {
            return <ContenidoLista key={item.id} {...item} />;
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan="8">No hay Docentes registrados...</td>
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

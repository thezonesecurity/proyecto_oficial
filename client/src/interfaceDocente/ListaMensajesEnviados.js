import React, { useEffect, useState } from "react";

import { endPointsID } from "./constants/endPointsID";
import { ContenidoMensajeria } from "./ContenidoMensajeria";

export const ListaMensajesEnviados = () => {
  ///-------------------para ver las lista de materias asignadas al docente-----------------------------
  const [listaMensajesEnv, setListaMensajesEnv] = useState([]);
  //------------------------------------
  useEffect(() => {
    fetch(endPointsID.listaMensajeria.url, {
      method: endPointsID.listaMensajeria.method,
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
        setListaMensajesEnv(data.serverResponse);
      });
  }, []);
  console.log("datosApi", listaMensajesEnv);
  ///---------------------------------------------------------------------

  return (
    <>
      <h4 className="titleForm">Mensajería</h4>
      <table className="table table-dark col-18">
        <thead>
          <tr>
            <th scope="col">De:</th>
            <th scope="col">Para:</th>
            <th scope="col">Asunto:</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>

        {listaMensajesEnv.length > 0 ? (
          listaMensajesEnv.map((item) => {
            return <ContenidoMensajeria key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="4">No hay mensajes recibidos...</td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};

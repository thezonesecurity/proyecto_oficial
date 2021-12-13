import React, { useEffect, useState } from "react";
import { endPointsN } from "./constants/endPointsN";
import { ContenidoNotificaciones } from "./ContenidoNotificaciones";

export const Notificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([]);
  //------------------------------------
  useEffect(() => {
    fetch(endPointsN.listaNotificaciones.url, {
      method: endPointsN.listaNotificaciones.method,
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
        setNotificaciones(data.serverResponse);
      });
    //console.log("datosApi", listSemestre);
  }, []);

  return (
    <>
      <h4 className="titleForm">Mensajería</h4>
      <table className="table table-dark col-18">
        <thead>
          <tr>
            <th scope="col">De:</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>

        {notificaciones.length > 0 ? (
          notificaciones.map((item) => {
            return <ContenidoNotificaciones key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="2">No hay mensajes recibidos...</td>
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

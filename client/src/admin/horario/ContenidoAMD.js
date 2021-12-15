import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { endpointsAMD } from "./horarios/types/endPointsAMD";

import { ModalAMD } from "./ModalAMD";

export const ContenidoAMD = (props) => {
  //console.log("lista AMD", props);
  //---------------------------peticion de lista usuarios---------------------
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    fetch(endpointsAMD.listDocente.url, {
      method: endpointsAMD.listDocente.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("serverREsponse", data.serverResponse);
        setDataUser(data.serverResponse);
      });
    // console.log("datosApiUser", dataUser);
  }, []);
  console.log("datosApiUSER", dataUser);
  //---------------------------peticion para eliminar una AMD---------------------
  const handlerClickDelete = () => {
    //dispatch({ type: actionsAmb.REMOVE_FORM_A, payload: id });
    if (
      window.confirm(
        `Advertencia se eliminaria la asignacion de materia "${props.materia}" con el docente "${props.docente}"`
      )
    ) {
      //logica pa eliminar
      // console.log("be", props._id);
      fetch(endpointsAMD.deleteAMD.url + props._id, {
        method: endpointsAMD.deleteAMD.method,
        headers: new Headers({
          // Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
      // console.log("AMD eliminado..");
    }
  };
  return (
    <tbody>
      <tr className="table-active">
        <td>{props.materia}</td>
        <td>{props.docente}</td>
        <td>{props.ci}</td>
        <td>{props.ambiente}</td>
        <td>{props.grupo}</td>
        <td>
          <ModalAMD dataItem={props} />{" "}
          <button className="btn btn-outline-danger btn-sm">
            <MdDeleteSweep
              onClick={() => {
                handlerClickDelete();
              }}
            />
          </button>
        </td>
      </tr>
    </tbody>
  );
};
/*
        {dataUser.map((item) => {
          item.ci === props.ci ? (
            <td>{props.docente}</td>
          ) : (
            <td>{props.docente} otra</td>
          );
        })}
           <td>{props.docente}</td>
            */

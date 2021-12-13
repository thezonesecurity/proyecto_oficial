import axios from "axios";
import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { useSelector } from "react-redux";
import { endpointsD } from "../types/endPointsD";

import { ModalRol } from "./ModalRol";

export const ContenidoRol = (props) => {
  const { auth } = useSelector((state) => state);
  const { token } = auth;
  console.log("token", props);

  const handlerClickDelete = () => {
    if (window.confirm(`Advertencia se eliminaria el rol ${props.nombreRol}`)) {
      //logica pa eliminar
      const deleteData = async () => {
        await axios
          .delete(endpointsD.deleteRol.url + props._id, token)
          .catch(function (error) {
            console.log(error);
          });
      };
      deleteData();
      console.log("ROl eliminado..");
    }
  };
  return (
    <>
      <tbody>
        <tr key={props._id} className="table-active">
          <td>{props.nombreRol}</td>
          <td>{props.metodoRol}</td>
          <td>{props.url}</td>
          <td>
            <ModalRol dataItem={props} />{" "}
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                handlerClickDelete();
              }}
            >
              <MdDeleteSweep />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

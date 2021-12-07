import axios from "axios";
import React, { useEffect, useState } from "react";
//import DataHorario from "./contex/AppContexH";
import { ListaHorario } from "./ListaHorario";
import { endpointsH } from "./types/endPointsH";

//import { VerTablaHorarios } from "./VerTablaHorarios";

export const VerHorarios = () => {
  // const { stateH, dispatchH } = useContext(DataHorario);
  //console.log("contenido lista hORAIO", stateH);
  const [dataHorario, setDatahorario] = useState({});

  useEffect(() => {
    const listData = async () => {
      const data = await axios
        .get(endpointsH.listHorarios.url)
        .catch(function (error) {
          console.log(error);
        });
      //console.log("result", data);
      setDatahorario(data.data.serverResponse);
      //console.log("server", data.data.serverResponse);
    };
    listData();
  }, []);

  return (
    <>
      <h4 className="titleForm">Lista de Horarios</h4>
      {/*<div className="col-md-4">
        <select className="form-select" id="va">
          <option value="S0">Elegir Semestre...</option>
          <option value="S1">Semestre 1</option>
          <option value="S2">Semestre 2</option>
          <option value="S3">Semestre 3</option>
          <option value="S4">Semestre 4</option>
        </select>
  </div>*/}
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>

        {dataHorario.length > 0 ? (
          dataHorario.map((item) => {
            return <ListaHorario key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="10">No hay Usuarios registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>

      {/*  {stateH.length > 0 ? (
          stateH.map((horarios) => {
            return <VerTablaHorarios key={horarios.id} {...horarios} />;
          })
        ) : (
         
        )}
        <tbody>
        <tr className="table-active">
          <td colSpan="6">No hay horarios registrados...</td>
        </tr>
      </tbody> */}
    </>
  );
};

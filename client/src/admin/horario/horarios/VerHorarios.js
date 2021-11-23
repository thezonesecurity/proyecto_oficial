import React, { useContext } from "react";
import DataHorario from "./contex/AppContexH";
import { VerTablaHorarios } from "./VerTablaHorarios";

export const VerHorarios = () => {
  const { stateH, dispatchH } = useContext(DataHorario);

  console.log("contenido lista hORAIO", stateH);
  return (
    <>
      <h4 className="titleForm">Lista de Horarios</h4>
      <div className="col-md-4">
        <select className="form-select" id="va">
          <option value="S0">Elegir Semestre...</option>
          <option value="S1">Semestre 1</option>
          <option value="S2">Semestre 2</option>
          <option value="S3">Semestre 3</option>
          <option value="S4">Semestre 4</option>
        </select>
      </div>
      <br />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">hora</th>
            <th scope="col">lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        {stateH.length > 0 ? (
          stateH.map((horarios) => {
            return <VerTablaHorarios key={horarios.id} {...horarios} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="6">No hay horarios registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};

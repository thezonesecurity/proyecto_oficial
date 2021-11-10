import React, { useState } from "react";
import { TablaSemestre1 } from "./semestre/semestre1/TablaSemestre1";
import { TablaSemestre2 } from "./semestre/semestre2/TablaSemestre2";
import { TablaSemestre3 } from "./semestre/semestre3/TablaSemestre3";
import { TablaSemestre4 } from "./semestre/semestre4/TablaSemestre4";

export const RegistroHorarios = () => {
  const [stateOption, setStateOpction] = useState({ valor: "" });
  const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    setStateOpction(e.target.value);
  };
  // console.log(stateOption);

  //LOGICA PARA SELECCIONAR SEMESTRE
  let ShowSemestre1,
    ShowSemestre2,
    ShowSemestre3,
    ShowSemestre4,
    mensajeSemestre = null;
  if (stateOption === "S1") {
    ShowSemestre1 = <TablaSemestre1 />;
    mensajeSemestre = "HORARIO DE SEMESTRE 1";
  } else ShowSemestre1 = null;
  if (stateOption === "S2") {
    ShowSemestre2 = <TablaSemestre2 />;
    mensajeSemestre = "HORARIO DE SEMESTRE 2";
  } else ShowSemestre2 = null;
  if (stateOption === "S3") {
    ShowSemestre3 = <TablaSemestre3 />;
    mensajeSemestre = "HORARIO DE SEMESTRE 3";
  } else ShowSemestre3 = null;
  if (stateOption === "S4") {
    ShowSemestre4 = <TablaSemestre4 />;
    mensajeSemestre = "HORARIO DE SEMESTRE 4";
  } else ShowSemestre4 = null;
  return (
    <div>
      <h4>Horarios</h4>
      <div className="col-md-4">
        <select
          className="form-select"
          id="validationCustom04"
          value={stateOption.valor}
          onChange={handleChangeOption}
        >
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
            <th colSpan="6">{mensajeSemestre}</th>
          </tr>
          <tr>
            <th scope="col">hora</th>
            <th scope="col">lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
          </tr>
        </thead>
        {ShowSemestre1}
        {ShowSemestre2}
        {ShowSemestre3}
        {ShowSemestre4}
        {stateOption === "S0" && (
          <tbody>
            <tr>
              <td colSpan="6">Elija un semestre...</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

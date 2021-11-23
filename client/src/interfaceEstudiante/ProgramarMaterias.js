import React from "react";

import { TablaProgramacion } from "./TablaProgramacion";

export const ProgramarMaterias = () => {
  return (
    <>
      <h4 className="titleForm">Programacion de Marerias</h4>
      <div className="row align-items-start">
        <div className="both">
          <TablaProgramacion />
          <TablaProgramacion />
          <TablaProgramacion />
          <TablaProgramacion />
        </div>
      </div>
      <br />
      <button type="button" className="btn btn-outline-success">
        Programar
      </button>{" "}
      <button type="button" className="btn btn-outline-danger">
        Cancelar
      </button>
    </>
  );
};

{
  /*
<div className="form-group row">
        <h4 className="titleForm">Programación de Materias</h4>
        <TablaProgramacion />
      </div>
*/
}

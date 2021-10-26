import React from "react";
import { TablaProgramacion } from "./TablaProgramacion";

export const ProgramarMaterias = () => {
  return (
    <div>
      <div className="form-group row">
        <h8>Programación de Materias</h8>
        <div>
          <br></br>
          <TablaProgramacion />
          <TablaProgramacion />
        </div>
      </div>
      <br></br>
      <div className="form-group row">
        <div className="col-sm-10 col-form-label">
          <button type="button" className="btn btn-outline-secondary">
            Programar
          </button>

          <button type="button" className="btn btn-outline-secondary">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

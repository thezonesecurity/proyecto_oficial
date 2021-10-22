import React from "react";
import { TablaProgramacion } from "./TablaProgramacion";

export const ProgramarMaterias = () => {
  return (
    <div>
      <div class="form-group row">
        <h8>Programación de Materias</h8>
        <div>
          <br></br>
          <TablaProgramacion />
          <TablaProgramacion />
        </div>
      </div>
      <br></br>
      <div class="form-group row">
        <div class="col-sm-10 col-form-label">
          <button type="button" class="btn btn-outline-secondary">
            Guardar
          </button>

          <button type="button" class="btn btn-outline-secondary">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export const RegistrarSemestre = () => {
  return (
    <div>
      <div>
        <div className="form-group row">
          <h4>Registrar Semestre</h4>
          <label for="input" className="col-sm-2 col-form-label">
            Numero de Semestre
          </label>
          <div class="col-sm-10">
            <select id="inputState" className="form-select">
              <option selected>Semestre1</option>
              <option>Semestre2</option>
              <option>Semestre3</option>
              <option>Semestre4</option>
              <option>Semestre5</option>
              <option>Semestre6</option>
              <option>Semestre7</option>
              <option>Semestre8</option>
              <option>Semestre9</option>
            </select>
          </div>
        </div>
        <hr />
        <div class="form-group row">
          <label for="input" className="col-sm-2 col-form-label">
            Año
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="input"
              placeholder="2020"
            />
          </div>
        </div>
        <hr />
        <div className="form-group row">
          <label for="input" className="col-sm-2 col-form-label">
            Materias
          </label>
          <div class="col-sm-10">
            <select id="inputState" className="form-select">
              <option selected>Diseño</option>
              <option>Programacion</option>
              <option>Forence</option>
              <option>Distribuidos</option>
              <option>Auditoria</option>
              <option>Redes</option>
              <option>Seguridad</option>
            </select>
            <textarea className="form-control" rows="3"></textarea>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 col-form-label">
            <button type="button" className="btn btn-dark">
              Guardar
            </button>

            <button type="button" className="btn btn-dark">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

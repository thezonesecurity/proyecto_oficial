import React from "react";

export const RegistrarSemestre = () => {
  return (
    <div>
      <h4>Registrar Semestre</h4>
      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-form">Semestre</label>
          <div className="col-sm-6">
            <select id="inputState" className="form-select">
              <option selected>Semestre1</option>
              <option>Semestre2</option>
              <option>Semestre3</option>
              <option>Semestre4</option>
            </select>
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label className="col-sm-3 col-form-label">Año</label>
          <input
            type="text"
            className="form-control"
            id="input"
            placeholder="2020"
          />
        </div>
        <br />
        <div className="form-group row">
          <label for="input" className="col-sm-4 col-form-label">
            Materias
          </label>
          <div class="col-sm-8">
            <select id="inputState" className="form-select">
              <option selected>Diseño</option>
              <option>Programacion</option>
              <option>Forence</option>
              <option>Distribuidos</option>
              <option>Auditoria</option>
              <option>Redes</option>
              <option>Seguridad</option>
            </select>
            <textarea className="form-control"></textarea>
          </div>
        </div>
        <br />
        <button type="button" className="btn btn-dark">
          Guardar
        </button>

        <button type="button" className="btn btn-dark">
          Cancelar
        </button>
      </form>
    </div>
  );
};

/*
<div>
      <div className="form-group row">
        <h4>Registrar Semestre</h4>
        
        <label for="input" className="col-sm-2 col-form-label">
          Numero de Semestre
        </label>
        <div className="col-sm-10">
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
            className="form-control"
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
*/

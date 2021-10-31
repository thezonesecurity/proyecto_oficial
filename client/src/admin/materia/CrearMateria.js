import React from "react";

export const CrearMateria = () => {
  return (
    <div>
      <h4>Registrar Materia</h4>
      <tbody>
        <div>
          <div>
            <label htmlFor="uname">Materia :</label>
            <input type="text" id="uname" name="name"></input>
          </div>
          <br />
          <div>
            <label htmlFor="uname">Sigla : </label>
            <input type="text" id="uname" name="name"></input>
          </div>
          <br />
        </div>

        <div className="row 3">
          <div className="col-auto">
            <label htmlFor="uname">Carga Horaria:</label>
          </div>
          <div className="col-auto">
            <input type="number" id="uname" name="name"></input>
          </div>
          <div className="col-auto">
            <select className="form-select" aria-label="Default select example">
              <option selected>Horas</option>
              <option value="1">Minutos</option>
            </select>
          </div>
        </div>

        <br />
        <button type="button" className="btn btn-outline-secondary">
          Guardar
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Cancelar
        </button>
      </tbody>
    </div>
  );
};

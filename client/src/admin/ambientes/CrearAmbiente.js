import React from "react";

export const CrearAmbiente = () => {
  return (
    <div>
      <h4>Formulario para crear ambiente</h4>

      <div className="form-group row">
        <label for="input" className="col-sm-2 col-form-label">
          Ambiente:
        </label>
        <div className="col-sm-8">
          <input type="text" id="uname" name="ambiente"></input>
        </div>
      </div>

      <br></br>
      <div className="form-group row">
        <label for="input" className="col-sm-2 col-form-label">
          Ubicación:
        </label>
        <div className="col-sm-8">
          <input type="text" id="uname" name="ubicacion"></input>
        </div>
      </div>
      <br></br>

      <button type="button" className="btn btn-secondary">
        Guardar
      </button>
      <button type="button" className="btn btn-secondary">
        Cancelar
      </button>
    </div>
  );
};

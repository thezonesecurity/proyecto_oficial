import React from "react";

export const CrearAmbiente = () => {
  return (
    <div>
      <h4>Formulario para crear ambiente</h4>

      <div class="form-group row">
        <label for="input" class="col-sm-2 col-form-label">
          Ambiente:
        </label>
        <div class="col-sm-8">
          <input type="text" id="uname" name="ambiente"></input>
        </div>
      </div>

      <br></br>
      <div class="form-group row">
        <label for="input" class="col-sm-2 col-form-label">
          Ubicación:
        </label>
        <div class="col-sm-8">
          <input type="text" id="uname" name="ubicacion"></input>
        </div>
      </div>
      <br></br>

      <button type="button" class="btn btn-secondary">
        Guardar
      </button>
      <button type="button" class="btn btn-secondary">
        Cancelar
      </button>
    </div>
  );
};

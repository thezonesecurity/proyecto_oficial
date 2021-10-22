import React from "react";

export const SolicitarAjusteMateria = () => {
  return (
    <div>
      <h4>Solicitar Ajuste De Materia</h4>

      <div class="form-group row">
        <label for="input" class="col-sm-2 col-form-label">
          PARA:
        </label>
        <div class="col-sm-8">
          <input
            type="email"
            class="form-control"
            id=""
            placeholder="name@example.com"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="input" class="col-sm-2 col-form-label">
          DE:
        </label>
        <div class="col-sm-8">
          <input
            type="email"
            class="form-control"
            id=""
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="input" class="col-sm-2 col-form-label">
          ASUNTO:
        </label>
        <div class="col-sm-8">
          <textarea class="form-control" rows="3"></textarea>
        </div>
      </div>

      <button type="button" class="btn btn-secondary">
        Enviar
      </button>
      <button type="button" class="btn btn-secondary">
        Cancelar
      </button>
    </div>
  );
};

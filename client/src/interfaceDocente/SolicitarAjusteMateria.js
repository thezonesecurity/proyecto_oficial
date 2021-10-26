import React from "react";

export const SolicitarAjusteMateria = () => {
  return (
    <div>
      <h4>Solicitar Ajuste De Materia</h4>

      <div className="form-group row">
        <label for="input" className="col-sm-2 col-form-label">
          PARA:
        </label>
        <div className="col-sm-8">
          <input
            type="email"
            class="form-control"
            id=""
            placeholder="name@example.com"
          />
        </div>
      </div>

      <div className="form-group row">
        <label for="input" className="col-sm-2 col-form-label">
          DE:
        </label>
        <div className="col-sm-8">
          <input
            type="email"
            class="form-control"
            id=""
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="input" className="col-sm-2 col-form-label">
          ASUNTO:
        </label>
        <div className="col-sm-8">
          <textarea className="form-control" rows="3"></textarea>
        </div>
      </div>

      <button type="button" className="btn btn-secondary">
        Enviar
      </button>
      <button type="button" className="btn btn-secondary">
        Cancelar
      </button>
    </div>
  );
};

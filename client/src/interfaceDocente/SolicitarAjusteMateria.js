import React from "react";

export const SolicitarAjusteMateria = () => {
  return (
    <>
      <h4 className="titleForm">Solicitar Ajuste De Materia</h4>
      <form>
        <div className="form-group row">
          <label for="input" className="col-2 col-form-label">
            PARA:
          </label>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="input" className="col-2 col-form-label">
            DE:
          </label>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="input" className="col-3 col-form-label">
            ASUNTO:
          </label>
          <div className="col-8">
            <textarea className="form-control" rows="3"></textarea>
          </div>
        </div>
      </form>
      <br />
      <button type="button" className="btn btn-outline-success">
        Enviar
      </button>{" "}
      <button type="button" className="btn btn-outline-danger">
        Cancelar
      </button>
    </>
  );
};

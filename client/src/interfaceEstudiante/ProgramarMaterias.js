import React from "react";

export const ProgramarMaterias = () => {
  return (
    <div>
      <div class="form-group row">
        <h8>Programación de Materias</h8>
        <div>
          <br></br>
          <div class="row align-items-start">
            <div class="col sm-10">
              <td>
                <div class="form-check">
                  <h8>Diseño y Programación Gráfica</h8>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <label
                    class="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <table class="table table-borderless">
                  <h8>Grupo</h8>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">G1</option>
                    <option value="2">G2</option>
                  </select>
                </table>
              </td>
            </div>

            <div class="col">
              <td>
                <div class="form-check">
                  <h8> Técnicas de Programación </h8>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <label
                    class="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <table class="table table-borderless">
                  <h8>Grupo</h8>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">G1</option>
                    <option value="2">G2</option>
                    <option value="1">G3</option>
                    <option value="2">G4</option>
                  </select>
                </table>
              </td>
            </div>

            <div class="col">
              <td>
                <div class="form-check">
                  <h8>Análisis Discreto</h8>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <label
                    class="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <table class="table table-borderless">
                  <h8>Grupo</h8>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select</option>
                    <option value="1">G1</option>
                    <option value="2">G2</option>
                  </select>
                </table>
              </td>
            </div>
          </div>
        </div>

        <div>
          <br></br>
          <div class="row align-items-start">
            <div class="row align-items-start">
              <div class="col">
                <td>
                  <div class="form-check">
                    <h8>Álgebra Lineal y Teoría Matricial</h8>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    ></label>
                  </div>
                  <table class="table table-borderless">
                    <h8>Grupo</h8>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">G1</option>
                      <option value="2">G2</option>
                    </select>
                  </table>
                </td>
              </div>

              <div class="col">
                <td>
                  <div class="form-check">
                    <h8>Tecnologías Emergentes</h8>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    ></label>
                  </div>
                  <table class="table table-borderless">
                    <h8>Grupo</h8>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">G1</option>
                      <option value="2">G2</option>
                      <option value="1">G3</option>
                      <option value="2">G4</option>
                    </select>
                  </table>
                </td>
              </div>

              <div class="col">
                <td>
                  <div class="form-check">
                    <h8>Base de Datos 1</h8>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexCheckDefault"
                    ></label>
                  </div>
                  <table class="table table-borderless">
                    <h8>Grupo</h8>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">G1</option>
                      <option value="2">G2</option>
                    </select>
                  </table>
                </td>
              </div>
            </div>
          </div>
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

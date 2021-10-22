import React from "react";

export const TablaProgramacion = () => {
  return (
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
            <label class="form-check-label" for="flexCheckDefault"></label>
          </div>
          <table class="table table-borderless">
            <h8>Grupo</h8>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="1">G1</option>
              <option value="2">G2</option>
            </select>
          </table>
        </td>
      </div>
    </div>
  );
};

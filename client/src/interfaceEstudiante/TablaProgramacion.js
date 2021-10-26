import React from "react";

export const TablaProgramacion = () => {
  return (
    <div className="row align-items-start">
      <div className="col sm-10">
        <td>
          <div className="form-check">
            <h8>Diseño y Programación Gráfica</h8>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" for="flexCheckDefault"></label>
          </div>
          <table className="table table-borderless">
            <h8>Grupo</h8>
            <select className="form-select" aria-label="Default select example">
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

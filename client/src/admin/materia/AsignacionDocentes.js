import React from "react";

export const AsignacionDocentes = () => {
  return (
    <div>
      <h8>Asignación de Docentes</h8>
      <table className="table table-bordered">
        <thead>
          <th scope="col">Materia</th>
          <th scope="col">Siglas</th>
          <th scope="col">Horario</th>
          <th scope="col">Grupo</th>
          <th scope="col">Docente</th>
          <th scope="col">Ambiente</th>
        </thead>

        <tbody>
          <tr>
            <td>Programación</td>
            <td>SIS-101</td>
            <td>08:00 - 08:45</td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Grupo</option>
                <option value="1">G1</option>
                <option value="2">G2</option>
                <option value="3">G3</option>
                <option value="3">G4</option>
              </select>
            </td>

            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Docente</option>
                <option value="1">Ing. Limber Ruiz</option>
                <option value="2">Ing. Clever</option>
                <option value="3">Ing. Oscar Apaza</option>
                <option value="3">Ing. Jesús López</option>
              </select>
            </td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Ambiente</option>
                <option value="1">Amb. 2 2do P.</option>
                <option value="2">Amb. 5 3er P.</option>
                <option value="3">Amb. 3 2do P.</option>
                <option value="3">Amb. 6 3er P.</option>
              </select>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Informática Forense</td>
            <td>SIS-737</td>
            <td>10:00 - 10:45</td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Grupo</option>
                <option value="1">G1</option>
                <option value="2">G2</option>
              </select>
            </td>

            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Docente</option>
                <option value="1">Ing. Limber Ruiz</option>
                <option value="2">Ing. Oscar Apaza</option>
              </select>
            </td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Ambiente</option>
                <option value="1">Amb. 6 3er P.</option>
                <option value="2">Amb. 2 1er P.</option>
              </select>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Diseño</td>
            <td>SIS-313</td>
            <td>14:00 - 14:45</td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Grupo</option>
                <option value="1">G1</option>
                <option value="2">G2</option>
              </select>
            </td>

            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Docente</option>
                <option value="1">Ing. Martín Sandy</option>
                <option value="2">Ing. Oscar Apaza</option>
              </select>
            </td>
            <td>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Ambiente</option>
                <option value="1">Amb. 1 1er P.</option>
                <option value="2">Amb. 3 1er P.</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <button type="button" className="btn btn-outline-secondary">
        Guardar
      </button>
    </div>
  );
};

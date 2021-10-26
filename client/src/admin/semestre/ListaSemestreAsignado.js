import React from "react";

export const ListaSemestreAsignado = () => {
  return (
    <div>
      <h4>Informe de Semestres Asignados</h4>
      <div className="col-md-4">
        <label for="inputState" className="form-label"></label>
        <select id="inputState" className="form-select">
          <option selected>Semestre1</option>
          <option>Semestre2</option>
          <option>Semestre3</option>
          <option>Semestre4</option>
          <option>Semestre5</option>
          <option>Semestre6</option>
          <option>Semestre7</option>
          <option>Semestre8</option>
          <option>Semestre9</option>
        </select>
        <hr />
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Sigla</th>
            <th scope="col">Materia</th>
            <th scope="col">Docente</th>
            <th scope="col">Hora</th>
            <th scope="col">Grupo</th>
            <th scope="col">Ambiente</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Sis-101</th>
            <td>Programacion</td>
            <td>Ing. Limber Ruiz</td>
            <td>08:00 - 08:45</td>
            <td>1</td>
            <td>Amb.4 2do. P.</td>
          </tr>
          <tr>
            <th>SIS-737</th>
            <td>Forence</td>
            <td>Ing. Limber Ruiz</td>
            <td>10:00 - 10:45</td>
            <td>2</td>
            <td>Amb.1 3er. P.</td>
          </tr>
          <tr>
            <th>SIS-313</th>
            <td>Diseño</td>
            <td>Ing. Sandy</td>
            <td>14:00 - 14:45</td>
            <td>3</td>
            <td>Amb.2 1er. P.</td>
          </tr>
          <tr>
            <th>SIS-313</th>
            <td>Computacion Basica</td>
            <td>Ing. Sandy</td>
            <td>16:00 - 16:45</td>
            <td>1</td>
            <td>Amb.3 1er. P.</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" className="btn btn-dark">
          Imprimir
        </button>
      </div>
    </div>
  );
};

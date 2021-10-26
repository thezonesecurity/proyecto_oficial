import React from "react";

export const MateriasAsignadasDocente = () => {
  return (
    <div>
      <h4>Materias Asignadas al Docente</h4>
      <div className="col-md-4">
        <label for="inputState" className="form-label"></label>
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Materia</th>
            <th scope="col">Sigla</th>
            <th scope="col">Ambiente</th>
            <th scope="col">Dia</th>
            <th scope="col">Horario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Programacion</td>
            <td>Sis-101</td>
            <td>Amb.2 3er. P.</td>
            <td>lunes</td>
            <td>08:00 - 08:45</td>
          </tr>
          <tr>
            <td>Forence</td>
            <td>SIS-737</td>
            <td>Amb.1 3er. P.</td>
            <td>miercoles</td>
            <td>10:00 - 10:45</td>
          </tr>
          <tr>
            <td>Diseño</td>
            <td>SIS-313</td>
            <td>Amb.2 1er. P.</td>
            <td>martes</td>
            <td>14:00 - 14:45</td>
          </tr>
          <tr>
            <td>Computacion Basica</td>
            <td>SIS-313</td>
            <td>Amb.3 1er. P.</td>
            <td>lunes</td>
            <td>16:00 - 16:45</td>
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

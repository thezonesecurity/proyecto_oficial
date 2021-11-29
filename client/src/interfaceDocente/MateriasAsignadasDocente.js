import React from "react";

export const MateriasAsignadasDocente = () => {
  return (
    <div>
      <h4 className="titleForm">Materias Asignadas al Docente</h4>
      <table className="table table-dark">
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
          <tr className="table-active">
            <td>Programacion</td>
            <td>Sis-101</td>
            <td>Amb.2 3er. P.</td>
            <td>lunes</td>
            <td>08:00 - 08:45</td>
          </tr>
          <tr className="table-active">
            <td>Forence</td>
            <td>SIS-737</td>
            <td>Amb.1 3er. P.</td>
            <td>miercoles</td>
            <td>10:00 - 10:45</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </div>
  );
};

import React from "react";

export const ReporteDocentesyMaterias = () => {
  return (
    <div>
      <h4 className="titleForm">Reportes de Docentes y Materias</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sigla</th>
            <th scope="col">Materia</th>
            <th scope="col">Docente</th>
            <th scope="col">Hora</th>
            <th scope="col">Grupo</th>
            <th scope="col">Ambiente</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <th scope="row">1</th>
            <td>SIS-131</td>
            <td>Programacion 1</td>
            <td>Ing. Limber</td>
            <td>07:45-08:30</td>
            <td>G-1</td>
            <td>Amb. 4 P2</td>
          </tr>
          <tr className="table-active">
            <th scope="row">2</th>
            <td>SIS-231</td>
            <td>Programacion 2</td>
            <td>Ing. Limber</td>
            <td>10:00-10:45</td>
            <td>G-1</td>
            <td>Amb. 4 P2</td>
          </tr>
          <tr className="table-active">
            <th scope="row">3</th>
            <td>SIS-151</td>
            <td>Diseño</td>
            <td>Ing. Sandy</td>
            <td>07:45-08:30</td>
            <td>G-2</td>
            <td>Amb. 1 P2</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </div>
  );
};

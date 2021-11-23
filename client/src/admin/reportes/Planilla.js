import React from "react";

export const Planilla = () => {
  return (
    <>
      <h4 className="titleForm">Planillas</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Docente</th>
            <th scope="col">Ambiente</th>
            <th scope="col">Materia</th>
            <th scope="col">Hora</th>
            <th scope="col">Firma</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <td>Ing. Martín Sandy</td>
            <td>Amb. 2, 2do P.</td>
            <td>Diseño</td>
            <td>08:00 - 08:30</td>
            <td> </td>
          </tr>
          <tr className="table-active">
            <td>Ing. Limber Ruíz</td>
            <td>Amb. 1, 3er P.</td>
            <td>Diseño</td>
            <td>14:00 - 14:45</td>
            <td> </td>
          </tr>
          <tr className="table-active">
            <td>Ing. Oscar Apaza</td>
            <td>Amb. 2, 3er P.</td>
            <td>Arquitectura de Computadoras</td>
            <td>16:00 - 16:45</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </>
  );
};

import React from "react";

export const VerMateriasProgramadas = () => {
  return (
    <>
      <h4 className="titleForm">Marerias programadas</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sigla</th>
            <th scope="col">Materia</th>
            <th scope="col">Grupo</th>
            <th scope="col">1 Parcial</th>
            <th scope="col">2 Parcial</th>
            <th scope="col">3 Parcial</th>
            <th scope="col">Prom P.</th>
            <th scope="col">Ex. F.</th>
            <th scope="col">Nota F.</th>
            <th scope="col">2do T.</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <td>Sis-101</td>
            <td>Programacion</td>
            <td>2</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr className="table-active">
            <td>SIS-737</td>
            <td>Forence</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </>
  );
};

import React from "react";

export const VerMateriasProgramadas = () => {
  return (
    <div>
      <h4>Mi Programacion de Marerias</h4>
      <div class="col-md-4">
        <label for="inputState" class="form-label"></label>
      </div>
      <table className="table table-bordered table-hover">
        <thead class="table-dark">
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
          <tr>
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
          <tr>
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
          <tr>
            <td>SIS-313</td>
            <td>Diseño</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>SIS-313</td>
            <td>Computacion Basica</td>
            <td>2</td>
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
      <div>
        <button type="button" class="btn btn-dark">
          Imprimir
        </button>
      </div>
    </div>
  );
};

import React from "react";

export const ContenidoMateriaDocenteH = () => {
  return (
    <tbody>
      <tr>
        <td>DIseño</td>
        <td>SIS-154</td>
        <td>08:00 - 08:45</td>
        <td>
          <select className="form-select" aria-label="Default select example">
            <option selected>Grupo</option>
            <option value="1">G1</option>
            <option value="2">G2</option>
            <option value="3">G3</option>
            <option value="3">G4</option>
          </select>
        </td>
        <td>
          <select className="form-select" aria-label="Default select example">
            <option selected>Docente</option>
            <option value="1">Ing. Limber Ruiz</option>
            <option value="2">Ing. Clever</option>
            <option value="3">Ing. Oscar Apaza</option>
            <option value="3">Ing. Jesús López</option>
          </select>
        </td>
        <td>
          <select className="form-select" aria-label="Default select example">
            <option selected>Ambiente</option>
            <option value="1">Amb. 2 2do P.</option>
            <option value="2">Amb. 5 3er P.</option>
            <option value="3">Amb. 3 2do P.</option>
            <option value="3">Amb. 6 3er P.</option>
          </select>
        </td>
      </tr>
    </tbody>
  );
};

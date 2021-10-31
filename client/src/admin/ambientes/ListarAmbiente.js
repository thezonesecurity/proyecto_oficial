import React from "react";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
export const ListarAmbiente = () => {
  return (
    <div>
      <h4>Lista de Ambientes</h4>
      <table className="table table-bordered table-hover">
        {/*class="container" */}
        <thead>
          <tr>
            <th scope="col">Nro.</th>
            <th scope="col">Ambiente</th>
            <th scope="col">Ubicacion</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="col">1</th>
            <td class="col">Amb. 2</td>
            <td class="col">1er Piso</td>
            <td class="col">
              <MdCreate /> <MdDeleteSweep />{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

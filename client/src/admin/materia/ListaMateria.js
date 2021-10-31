import React, { useContext } from "react";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
import DataMateria from "./contex/AppContext";
export const ListaMateria = () => {
  const { state, dispatch } = useContext(DataMateria);
  console.log("state", state);
  return (
    <div>
      <h4>Listado de Materias</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Materia</th>
            <th scope="col">Sigla</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            <tr key={item.id}>
              <th scope="row">{item.num}</th>
              <td>{item.materia}</td>
              <td>{item.sigla}</td>
              <td>
                <button className="btn btn-outline-secondary btn-sm">
                  <MdCreate />
                </button>
                {"   "}
                <button className="btn btn-outline-danger btn-sm">
                  <MdDeleteSweep />
                </button>
              </td>
            </tr>;
          })}
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

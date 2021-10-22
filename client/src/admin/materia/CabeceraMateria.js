import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AsignacionDocentes, Asignacion_Docentes } from "./AsignacionDocentes";
import { CrearMateria } from "./CrearMateria";
import { ListaMateria } from "./ListaMateria";

export const CabeceraMateria = () => {
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" className="col">
                  <a className="nav-link active" aria-current="true" href="#">
                    Ver lista de Materias
                  </a>
                </li>
                <li className="nav-item" className="col">
                  <a className="nav-link active " href="#">
                    Crear Materias
                  </a>
                </li>
                <li className="nav-item" className="col">
                  <a className="nav-link active" href="#">
                    Asignacion Docente
                  </a>
                </li>

                <li className="nav-item" className="col">
                  <li className="col align-self-center">
                    <MdOutlineAccountCircle />
                  </li>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido */}
            <hr />
            {/*<ListaMateria, AsignacionDocentes />*/}
            <CrearMateria />
          </div>
        </div>
      </div>
    </div>
  );
};

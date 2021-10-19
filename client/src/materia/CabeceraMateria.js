import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ListaMateria } from "./ListaMateria";

export const CabeceraMateria = () => {
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" class="col">
                  <a className="nav-link active" aria-current="true" href="#">
                    Ver lista de Materias
                  </a>
                </li>
                <li className="nav-item" class="col">
                  <a className="nav-link active " href="#">
                    Crear Materias
                  </a>
                </li>
                <li className="nav-item" class="col">
                  <a className="nav-link active" href="#">
                    Asignacion Docente
                  </a>
                </li>
                <li className="nav-item" class="col">
                  <li class="col align-self-center">
                    <MdOutlineAccountCircle />
                  </li>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido */}
            <hr />
            <ListaMateria />
          </div>
        </div>
      </div>
    </div>
  );
};

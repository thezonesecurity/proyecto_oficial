import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MateriasAsignadasDocente } from "./MateriasAsignadasDocente";
export const CabeceraInterfaceDoc = () => {
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" class="col">
                  <a className="nav-link active" aria-current="true" href="#">
                    Ver Materias asignadas
                  </a>
                </li>

                <li className="nav-item" class="col">
                  <a className="nav-link active" href="#">
                    Solicitar ajustes de Materia
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
            <MateriasAsignadasDocente />
          </div>
        </div>
      </div>
    </div>
  );
};

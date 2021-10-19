import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
//import { ListaHorario } from "./horarios/ListaHorario";
import { NuevosHorarios } from "./horarios/NuevosHorarios";

export const CabeceraHorario = () => {
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" class="col">
                  <a className="nav-link active" aria-current="true" href="#">
                    Nuevos Horarios
                  </a>
                </li>
                <li className="nav-item" class="col">
                  <a className="nav-link active " href="#">
                    Horarios
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
            {/*<ListaHorario />*/}
            <NuevosHorarios />
          </div>
        </div>
      </div>
    </div>
  );
};

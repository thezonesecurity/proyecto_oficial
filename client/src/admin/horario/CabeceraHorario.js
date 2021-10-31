import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { ListaHorario } from "./horarios/ListaHorario";
//import { ListaHorario } from "./horarios/ListaHorario";
import { NuevosHorarios } from "./horarios/NuevosHorarios";
import { RouteHorario } from "./horarios/route/RouteHorario";
import { Link, useRouteMatch } from "react-router-dom";
import { TablaListaHoraio } from "./horarios/TablaListaHoraio";

export const CabeceraHorario = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/crear-horarios`}>Nuevos Horarios</Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/ver-horarios`}>Ver Horarios</Link>
                </li>

                <li className="nav-item col">
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
            {/*<NuevosHorarios, ListaHorario /> -> TablaListaHoraio*/}

            <RouteHorario path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { RouteHorario } from "./horarios/route/RouteHorario";
import { Link, useRouteMatch } from "react-router-dom";

export const CabeceraHorario = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div className="row align-items-start">
              <ul className="nav card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/lista-horarios`}>Lista de Horarios</Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/registro-horarios`}>
                    Registrar Horarios
                  </Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/asignacion-mat-doc`}>
                    Asignación Materia - Docente
                  </Link>
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

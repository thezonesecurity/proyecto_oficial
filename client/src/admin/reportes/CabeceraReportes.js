import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { RouteReportes } from "./route/RouteReportes";

export const CabeceraReportes = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div className="row align-items-start">
              <ul className="nav card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/planilla`}> Planillas</Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/reporte-doc-mat`}>
                    Reporte de Docentes y materias
                  </Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/informe-semestre`}>
                    Informe de Semestres
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body">
            <RouteReportes path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

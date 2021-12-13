import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { RouteReportes } from "./route/RouteReportes";

export const CabeceraReportes = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col-15 col-s-9">
      {/*CABECERA */}
      <div className="cabecera">
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
            <Link to={`${url}/informe-semestre`}>Informe de Semestres</Link>
          </li>
          <li className="btn btn-outline-dark">
            <Link to={`${url}/notificaciones`}>Notificaciones</Link>
          </li>
        </ul>
      </div>
      {/*CABECERA */}
      {/*CONTENIDO */}

      <div className="col-20 col-s-12">
        <div className="aside">
          <hr />
          <RouteReportes path={path} />
        </div>
      </div>
      {/*CONTENIDO */}
    </div>
  );
};

/**
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
 */

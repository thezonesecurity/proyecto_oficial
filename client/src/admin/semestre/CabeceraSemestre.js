import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { RouteSemestre } from "./route/RouteSemestre";

export const CabeceraSemestre = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col-15 col-s-9">
      {/*CABECERA */}
      <div className="cabecera">
        <ul className="nav card-header-tabs">
          <li className="btn btn-outline-dark">
            <Link to={`${url}/lista-semestre`}>Lista de semestres</Link>
          </li>
          <li className="btn btn-outline-dark">
            <Link to={`${url}/registrar-semestre`}>Registrar Semestre</Link>
          </li>
        </ul>
      </div>
      {/*CABECERA */}
      {/*CONTENIDO */}
      <div className="col-20 col-s-12">
        <div className="aside">
          <hr />
          <RouteSemestre path={path} />
        </div>
      </div>
      {/*CONTENIDO */}
    </div>
  );
};

{
  /*
  <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div className="row align-items-start">
              <ul className="nav card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/lista-semestre`}>Lista de semestres</Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/registrar-semestre`}>
                    Registrar Semestre
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido }
            <hr />
            <RouteSemestre path={path} />
          </div>
        </div>
      </div>
    </div>
*/
}

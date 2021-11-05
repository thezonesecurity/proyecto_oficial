import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { RouteSemestre } from "./route/RouteSemestre";
export const CabeceraSemestre = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div className="row align-items-start">
              <ul className="nav card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/registrar-semestre`}>
                    Registrar Semestre
                  </Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/informe-semestre`}>Informe Semestre</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido */}
            <hr />
            <RouteSemestre path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

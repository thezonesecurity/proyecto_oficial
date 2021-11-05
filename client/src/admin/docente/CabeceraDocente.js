import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { RouteDocente } from "./route/RouteDocente";

export const CabeceraDocente = () => {
  let { path, url } = useRouteMatch(); //(useRouteMatch).. es una lebrireria que hace coincidir con los datos del url
  // console.log(url);

  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div className="row align-items-start">
              <ul className="nav  card-header-tabs">
                <li className="btn btn-outline-dark" aria-current="true">
                  <Link to={`${url}/lista-docente`}>Ver Lista de Docentes</Link>
                </li>
                <li className="btn btn-outline-dark" aria-current="true">
                  <Link to={`${url}/crear-docente`}>Crear Docentes</Link>
                </li>
                <li className="btn btn-outline-dark" aria-current="true">
                  <Link to={`${url}/editar-docente`}>Editar Docente</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido */}
            <hr />
            <RouteDocente path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

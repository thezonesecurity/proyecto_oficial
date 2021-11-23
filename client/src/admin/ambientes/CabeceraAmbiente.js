import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { RouteAmbiente } from "./route/RouteAmbiente";
export const CabeceraAmbiente = () => {
  let { path, url } = useRouteMatch();
  return (
    <div class="col-15 col-s-9">
      {/*CABECERA */}
      <div className="cabecera">
        <ul className="nav card-header-tabs">
          <li className="btn btn-outline-dark">
            <Link to={`${url}/lista-ambientes`}>Ver lista de Ambientes</Link>
          </li>
          <li className="btn btn-outline-dark" aria-current="true">
            <Link to={`${url}/crear-ambiente`}>Crear Ambientes</Link>
          </li>
        </ul>
      </div>
      {/*CABECERA */}
      {/*CONTENIDO */}
      <div className="col-20 col-s-12">
        <div className="aside">
          <hr />
          <RouteAmbiente path={path} />
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
              <ul className="nav  card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/lista-ambientes`}>
                    Ver lista de Ambientes
                  </Link>
                </li>
                <li className="btn btn-outline-dark" aria-current="true">
                  <Link to={`${url}/crear-ambiente`}>Crear Ambientes</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido }
            <hr />
            {/*<ListarAmbiente /> <RouteAmbiente path={path} />}
            <RouteAmbiente path={path} />
          </div>
        </div>
      </div>
    </div>
*/
}

import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, useRouteMatch } from "react-router-dom";
import { RouteAmbiente } from "./route/RouteAmbiente";
export const CabeceraAmbiente = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-link active col">
                  <Link to={`${url}/lista-ambientes`}>
                    Ver lista de Ambientes
                  </Link>
                </li>
                <li className="nav-link active col" aria-current="true">
                  <Link to={`${url}/crear-ambiente`}>Crear Ambientes</Link>
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
            {/*<ListarAmbiente /> <RouteAmbiente path={path} />*/}
            <RouteAmbiente path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

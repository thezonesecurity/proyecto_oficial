import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link, useRouteMatch } from "react-router-dom";
import { RouteDocente } from "./route/RouteDocente";

export const CabeceraDocente = () => {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-link active col" aria-current="true">
                  <Link to={`${url}/lista-docente`}>Ver Lista de Docentes</Link>
                </li>
                <li className="nav-link active col" aria-current="true">
                  <Link to={`${url}/crear-docente`}>Crear Docentes</Link>
                </li>
                <li className="nav-link active col" aria-current="true">
                  <Link to={`${url}/editar-docente`}>Editar Docente</Link>
                </li>
                <li className="nav-link active col">
                  <li className="col align-self-center">
                    <MdOutlineAccountCircle />
                  </li>
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

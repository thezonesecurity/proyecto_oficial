import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { RouteMateria } from "./route/RouteMateria";

export const CabeceraMateria = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div className="row align-items-start">
              <ul className="nav card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/lista-materia`}>Ver lista de Materias</Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/crear-materia`}>Crear Materias</Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/asignacion-materia-docente`}>
                    Asignacion Materia-Docente
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido */}
            <hr />
            <RouteMateria path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

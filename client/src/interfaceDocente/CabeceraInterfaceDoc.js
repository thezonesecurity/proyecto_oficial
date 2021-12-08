import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import { RouteID } from "./route/RouteID";

export const CabeceraInterfaceDoc = () => {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div className="col-15 col-s-9">
      {/*CABECERA */}
      <div className="cabecera">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="btn btn-outline-dark">
            <Link to={`${url}/materias-asignadas`}>Ver Materias asignadas</Link>
          </li>
          <li className="btn btn-outline-dark">
            <Link to={`${url}/ajuste-materia`}>
              Solicitar ajustes de Materia
            </Link>
          </li>
        </ul>
      </div>
      {/*CABECERA */}
      {/*CONTENIDO */}
      <div className="col-20 col-s-12">
        <div className="aside">
          <hr />
          <RouteID path={path} />
        </div>
      </div>
      {/*CONTENIDO */}
    </div>
  );
};

/*
 <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div className="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-link active col" aria-current="true">
                  <Link to={`${url}/materias-asignadas`}>
                    Ver Materias asignadas
                  </Link>
                </li>
                <li className="nav-link active col" aria-current="true">
                  <Link to={`${url}/ajuste-materia`}>
                    Solicitar ajustes de Materia
                  </Link>
                </li>

                <li className="nav-item col">
                  <li className="col align-self-center">
                    <MdOutlineAccountCircle />
                  </li>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido *}
            <hr />
            <RouteID path={path} />
          </div>
        </div>
      </div>
    </div>
*/

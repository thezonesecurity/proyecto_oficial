import React from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import { RouteIE } from "./route/RouteIE";

export const CabeceraInterfaceEstudiant = () => {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div className="col-15 col-s-9">
      {/*CABECERA */}
      <div className="cabecera">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="btn btn-outline-dark">
            <Link to={`${url}/programar-materias`}>Programar materias</Link>
          </li>
          <li className="btn btn-outline-dark">
            <Link to={`${url}/materias-programadas`}>
              Ver Materias Programadas
            </Link>
          </li>
        </ul>
      </div>
      {/*CABECERA */}
      {/*CONTENIDO */}
      <div className="col-20 col-s-12">
        <div className="aside">
          <hr />
          <RouteIE path={path} />
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
                  <Link to={`${url}/programar-materias`}>
                    Programar materias
                  </Link>
                </li>
                <li className="nav-link active col" aria-current="true">
                  <Link to={`${url}/materias-programadas`}>
                    Ver Materias Programadas
                  </Link>
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
            {/*para el contenido   <ProgramarMaterias />*}
            <hr />
            <RouteIE path={path} />
          </div>
        </div>
      </div>
    </div>
*/

import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { RouteHorario } from "./horarios/route/RouteHorario";

export const CabeceraHorario = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="col-15 col-s-9">
      {/*CABECERA */}
      <div className="cabecera">
        <ul className="nav card-header-tabs">
          <li className="btn btn-outline-dark">
            <Link to={`${url}/lista-horarios`}>Lista de Horarios</Link>
          </li>
          {/*<li className="btn btn-outline-dark">
            <Link to={`${url}/registro-horarios`}>Registrar Horarios</Link>
          </li> */}
          <li className="btn btn-outline-dark">
            <Link to={`${url}/asignacion-mat-doc`}>
              Asignación Materia - Docente
            </Link>
          </li>
          <li className="btn btn-outline-dark">
            <Link to={`${url}/list-mat-doc`}>
              Lista Asignacion Materia - Docente
            </Link>
          </li>
        </ul>
      </div>
      {/*CABECERA */}
      {/*CONTENIDO */}
      <div className="col-20 col-s-12">
        <div className="aside">
          <hr />
          <RouteHorario path={path} />
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
              <ul className="nav card-header-tabs">
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/lista-horarios`}>Lista de Horarios</Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/registro-horarios`}>
                    Registrar Horarios
                  </Link>
                </li>
                <li className="btn btn-outline-dark">
                  <Link to={`${url}/asignacion-mat-doc`}>
                    Asignación Materia - Docente
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            {/*para el contenido }
            <hr />
            {/*<NuevosHorarios, ListaHorario /> -> TablaListaHoraio}

            <RouteHorario path={path} />
          </div>
        </div>
      </div>
    </div>
*/

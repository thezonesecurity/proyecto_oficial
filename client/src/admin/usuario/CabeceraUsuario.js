import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { RouteUsuario } from "./route/RouteDocente";

export const CabeceraUsuario = () => {
  let { path, url } = useRouteMatch(); //(useRouteMatch).. es una lebrireria que hace coincidir con los datos del url
  // console.log(url);
  return (
    <div className="col-15 col-s-9">
      {/*CABECERA */}
      <div className="cabecera">
        <ul className="nav  card-header-tabs">
          <li className="btn btn-outline-dark" aria-current="true">
            <Link to={`${url}/lista-usuario`}>Ver Lista de Usuarios</Link>
          </li>
          <li className="btn btn-outline-dark" aria-current="true">
            <Link to={`${url}/crear-usuario`}>Crear Usuarios</Link>
          </li>
          {/* <li className="btn btn-outline-dark" aria-current="true">
            <Link to={`${url}/editar-usuario`}>Editar Usuarios</Link>
          </li>*/}
          <li className="btn btn-outline-dark" aria-current="true">
            <Link to={`${url}/listar-rol`}>Listar Rol</Link>
          </li>
          <li className="btn btn-outline-dark" aria-current="true">
            <Link to={`${url}/crear-rol`}>Crear Rol</Link>
          </li>
        </ul>
      </div>
      {/*CABECERA */}
      {/*CONTENIDO */}
      <div className="col-20 col-s-12">
        <div className="aside">
          <hr />
          <RouteUsuario path={path} />
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
            {/*para el contenido }
            <hr />
            <RouteDocente path={path} />
          </div>
        </div>
      </div>
    </div>
*/

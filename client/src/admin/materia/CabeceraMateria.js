import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
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
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-link active col">
                  <Link to={`${url}/lista-materia`}>Ver lista de Materias</Link>
                </li>
                <li className="nav-link active col">
                  <Link to={`${url}/crear-materia`}>Crear Materias</Link>
                </li>
                <li className="nav-link active col">
                  <Link to={`${url}/asignacion-docente`}>
                    Asignacion Docente
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
            {/*para el contenido */}
            <hr />
            {/*<ListaMateria, AsignacionDocentes />*/}
            <RouteMateria path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

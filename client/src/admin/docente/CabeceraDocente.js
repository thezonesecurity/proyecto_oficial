import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { EditarDocente } from "./EditarDocente";
import { ListaDocente } from "./ListaDocente";
import { Link, Redirect, useRouteMatch } from "react-router-dom";

import { InsertarDocente } from "./InsertarDocente";
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
                <li className="nav-item" class="col">
                  <Link to={`${url}/lista`}>Ver Lista de Docentes</Link>
                </li>
                <li className="nav-item" class="col">
                  <Link to={`${url}/insertar`}>Crear Docentes</Link>
                </li>
                <li className="nav-item" class="col">
                  <a className="nav-link active" href="#">
                    Editar Docente
                  </a>
                </li>
                <li className="nav-item" class="col">
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
            {/*<InsertarDocente, ListaDocente, EditarDocente   />*/}
            <ListaDocente />
          </div>
        </div>
      </div>
    </div>
  );
};

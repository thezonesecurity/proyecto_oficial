import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { EditarDocente } from "./EditarDocente";
import { InsertarDocente } from "./InsertarDocente";
import { ListaDocente } from "./ListaDocente";
export const CabeceraDocente = () => {
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" class="col">
                  <a className="nav-link active" aria-current="true" href="#">
                    Ver lista de docentes
                  </a>
                </li>
                <li className="nav-item" class="col">
                  <a className="nav-link active " href="#">
                    Crear Docentes
                  </a>
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
            {/*<InsertarDocente />*/}
            {/*<EditarDocente />*/}
            <ListaDocente/>
          </div>
        </div>
      </div>
    </div>
  );
};


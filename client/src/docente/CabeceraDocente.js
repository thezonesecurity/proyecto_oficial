import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
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
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /*

<div className="col card">
        <div>
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="true" href="#">
                    Ver lista de docentes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " href="#">
                    Crear Docentes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Editar Docente
                  </a>
                </li>
                <li className="nav-item">
                  <li class="col align-self-center">
                    <MdOutlineAccountCircle />
                  </li>
                </li>
              </ul>
            </div>

            <div className="card-body">
              <hr />
              {/* <ContenidoEditarDocente   ContenidoListaDocente/>**}
              <ContenidoEditarDocente />
            </div>
          </div>
        </div>
      </div>

*/
}

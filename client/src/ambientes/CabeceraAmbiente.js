import React from "react";
import { ContenidoListarAmbiente } from "./ContenidoListarAmbiente";
import { MdOutlineAccountCircle } from "react-icons/md";

export const CabeceraAmbiente = () => {
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" class="col">
                  <a className="nav-link active" aria-current="true" href="#">
                    Ver lista de Ambientes
                  </a>
                </li>
                <li className="nav-item" class="col">
                  <a className="nav-link active " href="#">
                    Crear Ambientes
                  </a>
                </li>
                <li className="nav-item" class="col">
                  <a className="nav-link active" href="#">
                    Ver Ambientes
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
            <ContenidoListarAmbiente />
          </div>
        </div>
      </div>
    </div>
  );
};

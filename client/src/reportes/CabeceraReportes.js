import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Planilla } from "./Planilla";
import { ReporteDocentesyMaterias } from "./ReporteDocentesyMaterias";

export const CabeceraReportes = () => {
  return (
    <div className="col card">
      <div>
        <div className="card text-center">
          <div className="card-header">
            <div class="row align-items-start">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item" class="col-4">
                  <a className="nav-link active " href="#">
                    Planillas
                  </a>
                </li>
                <li className="nav-item" class="col-6">
                  <a className="nav-link active " href="#">
                    Reporte de Docentes y materias
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
            {/*<Planilla />  */}
            <ReporteDocentesyMaterias />
          </div>
        </div>
      </div>
    </div>
  );
};

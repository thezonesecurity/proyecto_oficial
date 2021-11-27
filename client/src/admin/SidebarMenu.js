import React from "react";
import { Link } from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <div className="col-2 col-s-3 menu">
      <ul>
        <li className="nav-item">
          <Link to="/docente" aria-current="page">
            Docente
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/semestre" aria-current="page">
            Semestre
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/materia" aria-current="page">
            Materias
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/ambiente" aria-current="page">
            Ambientes
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/horario" aria-current="page">
            Horarios
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/reporte" aria-current="page">
            Reportes
          </Link>
        </li>
      </ul>
    </div>
  );
};

{
  /*
<div className="col-2 card">
      <div className="nav nav-tabs card-header-tabs">
        <SubSidebar />
      </div>
    </div>
*/
}

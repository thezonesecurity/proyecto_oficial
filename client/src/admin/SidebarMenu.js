import React from "react";
import { Link } from "react-router-dom";

export const SidebarMenu = () => {
  return (
    <div className="col-2 col-s-3 menu">
      <ul>
        <li className="nav-item">
          <Link to="/usuario/lista-usuario" aria-current="page">
            Usuario
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/semestre/lista-semestre" aria-current="page">
            Semestre
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/materia/lista-materia" aria-current="page">
            Materias
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link to="/ambiente/lista-ambientes" aria-current="page">
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

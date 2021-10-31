import React from "react";
import { Link } from "react-router-dom";
export const SubSidebar = () => {
  return (
    <div className="subSidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            to="/docente"
            className="btn btn-outline-info"
            aria-current="page"
          >
            Docente
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link
            to="/materia"
            className="btn btn-outline-info"
            aria-current="page"
          >
            Materias
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link
            to="/ambiente"
            className="btn btn-outline-info"
            aria-current="page"
          >
            Ambientes
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link
            to="/semestre"
            className="btn btn-outline-info"
            aria-current="page"
          >
            Semestre
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link
            to="/horario"
            className="btn btn-outline-info"
            aria-current="page"
          >
            Horarios
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link
            to="/reporte"
            className="btn btn-outline-info"
            aria-current="page"
          >
            Reportes
          </Link>
        </li>
      </ul>
    </div>
  );
};

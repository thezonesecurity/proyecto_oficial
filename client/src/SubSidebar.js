import React from "react";

export const SubSidebar = () => {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Docentes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          materias
        </a>
      </li>
      <li className="nav-item">
        <a className="btn btn-outline-info" aria-current="page" href="#">
          Ambientes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Semestre
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Horarios
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Reportes
        </a>
      </li>
    </ul>
  );
};

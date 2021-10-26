import React from "react";
import { RouteAppAdmin } from "./admin/route/RouteAppAdmin";

/*import { MainAmbiente } from "./admin/ambientes/MainAmbiente";
import { MainDocente } from "./admin/docente/MainDocente";
import { MainHorario } from "./admin/horario/MainHorario";
import { MainMateria } from "./admin/materia/MainMateria";
import { MainReportes } from "./admin/reportes/MainReportes";
import { MainSemestre } from "./admin/semestre/MainSemestre";
import { MainInterfaceDocente } from "./interfaceDocente/MainInterfaceDocente";
import { MainInterfaceEstudiante } from "./interfaceEstudiante/MainInterfaceEstudiante";*/

export const MainApp = () => {
  return (
    /*si el rol de usuario es admin se va a dirijir a RouterAppAdmin */
    /* si el rol de usuario es docente se va a dirijir a RouterAppDocente*/
    /* si el rol de usuario es estudiante se va a dirijir a RouterAppEstudiante*/
    <div>
      <RouteAppAdmin />
    </div>
    /**/
  );
};

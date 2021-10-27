import React from "react";
import { RouteAppAdmin } from "./admin/route/RouteAppAdmin";
import { RouteAppID } from "./interfaceDocente/route/RouteAppID";
import { RouteAppIE } from "./interfaceEstudiante/route/RouteAppIE";

export const MainApp = () => {
  return (
    /*si el rol de usuario es admin se va a dirijir a RouterAppAdmin */
    /* si el rol de usuario es docente se va a dirijir a RouterAppDocente*/
    /* si el rol de usuario es estudiante se va a dirijir a RouterAppEstudiante*/
    /*<RouteAppAdmin />, <RouteAppID />, <RouteAppIE /> */
    <div>
      <RouteAppAdmin />
    </div>
    /**/
  );
};
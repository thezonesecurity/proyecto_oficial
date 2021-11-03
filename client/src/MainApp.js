import React from "react";
import { LoginComponent } from "./admin/login/LoginComponent";

export const MainApp = () => {
  return (
    /*si el rol de usuario es admin se va a dirijir a RouterAppAdmin */
    /* si el rol de usuario es docente se va a dirijir a RouterAppDocente*/
    /* si el rol de usuario es estudiante se va a dirijir a RouterAppEstudiante*/
    /*<RouteAppAdmin />, <RouteAppID />, <RouteAppIE />, <RouteLogin/>*/
    <div>
      <LoginComponent />
    </div>
    /*<RouteAppAdmin />,  <LoginComponent />*/
  );
};

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { MainDocente } from "../../admin/docente/MainDocente";
import { MainMateria } from "../../admin/materia/MainMateria";
import { MainAmbiente } from "../../admin/ambientes/MainAmbiente";
import { MainHorario } from "../../admin/horario/MainHorario";
import { MainReportes } from "../../admin/reportes/MainReportes";
import { MainSemestre } from "../../admin/semestre/MainSemestre";
import { HeaderInterface } from "../../HeaderInterface";
//import { SidebarMenu } from "../../SidebarMenu";

export const DashBoardComponent = ({ children, ...rest }) => {
  //const { auth } = useSelector((state) => state);
  /*si el rol de usuario es admin se va a dirijir a RouterAppAdmin */
  /* si el rol de usuario es docente se va a dirijir a RouterAppDocente*/
  /* si el rol de usuario es estudiante se va a dirijir a RouterAppEstudiante*/
  /*<RouteAppAdmin />, <RouteAppID />, <RouteAppIE />, <RouteLogin/>*/
  const { auth } = useSelector((state) => state);
  const { token } = auth;

  return token == null ? (
    <Redirect to="/login" />
  ) : (
    <>
      <HeaderInterface />
      <Switch>
        <Route path="/docente" component={MainDocente} />
        <Route path="/materia" component={MainMateria} />
        <Route path="/ambiente" component={MainAmbiente} />
        <Route path="/horario" component={MainHorario} />
        <Route path="/reporte" component={MainReportes} />
        <Route path="/semestre" component={MainSemestre} />
      </Switch>
    </>
  );
};
//<Route path="/semestre" component={MainSemestre} />
/*auth == null ? <Redirect to="/login" /> : <Redirect to="/" />;*/
/* */

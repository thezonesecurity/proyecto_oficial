import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//import { SidebarMenu } from "../../SidebarMenu";
import { MainDocente } from "../../docente/MainDocente";
import { MainMateria } from "../../materia/MainMateria";
import { MainAmbiente } from "../../ambientes/MainAmbiente";
import { MainHorario } from "../../horario/MainHorario";
import { MainReportes } from "../../reportes/MainReportes";
import { MainSemestre } from "../../semestre/MainSemestre";
import { HeaderInterface } from "../../../HeaderInterface";

export const DashBoardComponent = ({ children, ...rest }) => {
  //const { auth } = useSelector((state) => state);
  /*si el rol de usuario es admin se va a dirijir a RouterAppAdmin */
  /* si el rol de usuario es docente se va a dirijir a RouterAppDocente*/
  /* si el rol de usuario es estudiante se va a dirijir a RouterAppEstudiante*/
  /*<RouteAppAdmin />, <RouteAppID />, <RouteAppIE />, <RouteLogin/>*/
  const { auth } = useSelector((state) => state);
  const { user } = auth;
  return user == null ? (
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

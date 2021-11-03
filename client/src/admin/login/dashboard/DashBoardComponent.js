import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarMenu } from "../../SidebarMenu";
import { MainDashboard } from "./MainDashboard";

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
      <SidebarMenu />
      <Switch>
        <Route path="/dashboard" component={MainDashboard} />
      </Switch>
    </>
  );
};
/*auth == null ? <Redirect to="/login" /> : <Redirect to="/" />;*/
/* */

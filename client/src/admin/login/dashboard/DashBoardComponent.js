import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteAppAdmin } from "../../admin/route/RouteAppAdmin";
import { RouteAppID } from "../../interfaceDocente/route/RouteAppID";
import { RouteAppIE } from "../../interfaceEstudiante/route/RouteAppIE";

export const DashBoardComponent = ({ children, ...rest }) => {
  //const { auth } = useSelector((state) => state);
  /*si el rol de usuario es admin se va a dirijir a RouterAppAdmin */
  /* si el rol de usuario es docente se va a dirijir a RouterAppDocente*/
  /* si el rol de usuario es estudiante se va a dirijir a RouterAppEstudiante*/
  /*<RouteAppAdmin />, <RouteAppID />, <RouteAppIE />, <RouteLogin/>*/
  return {
    /*auth == null ? <Redirect to="/login" /> : <Redirect to="/" />;*/
  };
};

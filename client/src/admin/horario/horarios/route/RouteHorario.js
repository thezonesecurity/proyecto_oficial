import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListaHorario } from "../ListaHorario";
import { NuevosHorarios } from "../NuevosHorarios";
export const RouteHorario = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/crear-horarios`} component={NuevosHorarios}></Route>
      <Route path={`${path}/ver-horarios`} component={ListaHorario}></Route>
    </Switch>
  );
};

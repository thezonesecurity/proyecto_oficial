import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AsignacionMateriaDocenteH } from "../AsignacionMateriaDocenteH";
import { RegistroHorarios } from "../RegistroHorarios";
import { VerHorarios } from "../VerHorarios";
export const RouteHorario = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/lista-horarios`} component={VerHorarios}></Route>
      <Route
        path={`${path}/registro-horarios`}
        component={RegistroHorarios}
      ></Route>
      <Route
        path={`${path}/asignacion-mat-doc`}
        component={AsignacionMateriaDocenteH}
      ></Route>
    </Switch>
  );
};

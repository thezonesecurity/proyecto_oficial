import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListaAMD } from "../../ListaAMD";
import { AsignacionMateriaDocenteH } from "../AsignacionMateriaDocenteH";
import { IngresarHorarios } from "../IngresarHorarios";
//import { RegistroHorarios } from "../RegistroHorarios";
import { VerHorarios } from "../VerHorarios";
export const RouteHorario = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/lista-horarios`} component={VerHorarios}></Route>
      <Route
        path={`${path}/registro-horarios`}
        component={IngresarHorarios}
      ></Route>
      <Route
        path={`${path}/asignacion-mat-doc`}
        component={AsignacionMateriaDocenteH}
      ></Route>
      <Route path={`${path}/list-mat-doc`} component={ListaAMD}></Route>
    </Switch>
  );
};

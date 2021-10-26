import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MateriasAsignadasDocente } from "../MateriasAsignadasDocente";
import { SolicitarAjusteMateria } from "../SolicitarAjusteMateria";

export const RouteID = ({ path }) => {
  return (
    <Switch>
      <Route
        path={`${path}/materias-asignadas`}
        component={MateriasAsignadasDocente}
      ></Route>
      <Route
        path={`${path}/ajuste-materia`}
        component={SolicitarAjusteMateria}
      ></Route>
    </Switch>
  );
};

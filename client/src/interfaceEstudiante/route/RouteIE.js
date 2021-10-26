import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProgramarMaterias } from "../ProgramarMaterias";
import { VerMateriasProgramadas } from "../VerMateriasProgramadas";

export const RouteIE = ({ path }) => {
  return (
    <Switch>
      <Route
        path={`${path}/programar-materias`}
        component={ProgramarMaterias}
      ></Route>
      <Route
        path={`${path}/materias-programadas`}
        component={VerMateriasProgramadas}
      ></Route>
    </Switch>
  );
};

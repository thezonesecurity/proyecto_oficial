import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListaSemestre } from "../ListaSemestre";
import { RegistrarSemestre } from "../RegistrarSemestre";
export const RouteSemestre = ({ path }) => {
  return (
    <Switch>
      <Route
        path={`${path}/registrar-semestre`}
        component={RegistrarSemestre}
      ></Route>
      <Route path={`${path}/lista-semestre`} component={ListaSemestre}></Route>
    </Switch>
  );
};

import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListaSemestreAsignado } from "../ListaSemestreAsignado";
import { RegistrarSemestre } from "../RegistrarSemestre";
export const RouteSemestre = ({ path }) => {
  return (
    <Switch>
      <Route
        path={`${path}/registrar-semestre`}
        component={RegistrarSemestre}
      ></Route>
      <Route
        path={`${path}/informe-semestre`}
        component={ListaSemestreAsignado}
      ></Route>
    </Switch>
  );
};

import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CrearAmbiente } from "../CrearAmbiente";
import { ListarAmbiente } from "../ListarAmbiente";
export const RouteAmbiente = ({ path }) => {
  return (
    <Switch>
      <Route
        path={`${path}/lista-ambientes`}
        component={ListarAmbiente}
      ></Route>
      <Route path={`${path}/crear-ambiente`} component={CrearAmbiente}></Route>
    </Switch>
  );
};

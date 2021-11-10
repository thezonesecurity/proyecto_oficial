import React from "react";
import { CrearMateria } from "../CrearMateria";
import { ListaMateria } from "../ListaMateria";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const RouteMateria = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/lista-materia`} component={ListaMateria}></Route>
      <Route path={`${path}/crear-materia`} component={CrearMateria}></Route>
    </Switch>
  );
};

import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ListaDocente } from "../docente/ListaDocente";
import { RouteAppAdmin } from "../route/RouteAppAdmin";
export const RouterDocente = () => {
  return (
    <Router>
      <Switch>
        <Route path="/lista-docente" component={ListaDocente}></Route>
      </Switch>
    </Router>
  );
};

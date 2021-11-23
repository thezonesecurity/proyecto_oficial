import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";
import { MainInterfaceDocente } from "../MainInterfaceDocente";

export const RouteAppID = () => {
  return;
  <Router>
    <Switch>
      <Route path="/interface-docente" component={MainInterfaceDocente} />
    </Switch>
  </Router>;
};

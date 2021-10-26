import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";
import { MainInterfaceEstudiante } from "../MainInterfaceEstudiante";

export const RouteAppIE = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/interface-estudiante"
          component={MainInterfaceEstudiante}
        />
      </Switch>
    </Router>
  );
};

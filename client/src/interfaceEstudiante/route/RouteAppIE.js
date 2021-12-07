import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  /*Link*/
} from "react-router-dom";
import { MainInterfaceEstudiante } from "../MainInterfaceEstudiante";

export const RouteAppIE = () => {
  const { auth } = useSelector((state) => state);
  const { token } = auth;
  return token == null ? (
    <Redirect to="/login" />
  ) : (
    <>
      <Switch>
        <Route
          path="/interface-estudiante"
          component={MainInterfaceEstudiante}
        />
      </Switch>
    </>
  );
};

{
  /**<Router>
    <Switch>
      <Route path="/interface-estudiante" component={MainInterfaceEstudiante} />
    </Switch>
  </Router>;
}; */
}

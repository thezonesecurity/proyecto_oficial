import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  /*Link*/
} from "react-router-dom";
import { MainInterfaceDocente } from "../MainInterfaceDocente";

export const RouteAppID = () => {
  const { auth } = useSelector((state) => state);
  const { token } = auth;
  return token == null ? (
    <Redirect to="/login" />
  ) : (
    <>
      <Switch>
        <Route path="/interface-docente" component={MainInterfaceDocente} />
      </Switch>
    </>
  );
};

/**
;
  <Router>
    <Switch>
      <Route path="/interface-docente" component={MainInterfaceDocente} />
    </Switch>
  </Router>;
*/

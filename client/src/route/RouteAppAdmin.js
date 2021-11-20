import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";
import { DashBoardComponent } from "../login/dashboard/DashBoardComponent";
import { LoginAD } from "../login/LoginAD";
import { Register } from "../login/Register";

export const RouteAppAdmin = ({ path }) => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginAD} />
        <Route path="/register" component={Register} />
        <Route path="/" component={DashBoardComponent} />
      </Switch>
    </Router>
  );
};

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";
import { DashBoardComponent } from "../dashboard/DashBoardComponent";
import { Login } from "../Login";
import { Register } from "../Register";

export const RouteLogin = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={DashBoardComponent} />
      </Switch>
    </Router>
  );
};

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";

import { RouteAppID } from "../interfaceDocente/route/RouteAppID";
import { RouteAppIE } from "../interfaceEstudiante/route/RouteAppIE";
import { DashBoardComponent } from "../login/dashboard/DashBoardComponent";
import { LoginAD } from "../login/LoginAD";

export const RouteAppAdmin = ({ path }) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={LoginAD} />
          <Route path="/" component={DashBoardComponent} />
        </Switch>
        <RouteAppID />
        <RouteAppIE />
      </Router>
    </>
  );
};

/*para ruta interface DOCENTE */

/**<Route path="/interface-docente" component={MainInterfaceDocente} /> */

/*para ruta login */

/*para ruta interface ESTUDIANTE 
           <Route
            path="/interface-estudiante"
            component={MainInterfaceEstudiante}
          />
          ----------------------------------7
          <Route path="/register" component={Register} />
          */

/*para ruta login */

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";
import { MainInterfaceDocente } from "../interfaceDocente/MainInterfaceDocente";
import { RouteAppID } from "../interfaceDocente/route/RouteAppID";
import { MainInterfaceEstudiante } from "../interfaceEstudiante/MainInterfaceEstudiante";
import { RouteAppIE } from "../interfaceEstudiante/route/RouteAppIE";
import { DashBoardComponent } from "../login/dashboard/DashBoardComponent";
import { LoginAD } from "../login/LoginAD";
import { Register } from "../login/Register";

export const RouteAppAdmin = ({ path }) => {
  return (
    <>
      <Router>
        <Switch>
          {/*para ruta interface DOCENTE */}
          {/**<Route path="/interface-docente" component={MainInterfaceDocente} /> */}
          {/*para ruta login */}
          {/*para ruta interface ESTUDIANTE 
           <Route
            path="/interface-estudiante"
            component={MainInterfaceEstudiante}
          />
          */}

          {/*para ruta login */}
          <Route path="/login" component={LoginAD} />
          <Route path="/register" component={Register} />
          <Route path="/" component={DashBoardComponent} />
        </Switch>
        <RouteAppID />
        <RouteAppIE />
      </Router>
    </>
  );
};
{
  /*

*/
}

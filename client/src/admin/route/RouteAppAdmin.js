import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*Link*/
} from "react-router-dom";
import { DashBoardComponent } from "../../login/dashboard/DashBoardComponent";
import { Login } from "../../login/Login";
import { Register } from "../../login/Register";
import { MainAmbiente } from "../ambientes/MainAmbiente";
import { MainDocente } from "../docente/MainDocente";
import { MainHorario } from "../horario/MainHorario";
import { MainMateria } from "../materia/MainMateria";
import { MainReportes } from "../reportes/MainReportes";
import { MainSemestre } from "../semestre/MainSemestre";

export const RouteAppAdmin = () => {
  return (
    <Router>
      <Switch>
        <Route path="/docente" component={MainDocente} />
        <Route path="/materia" component={MainMateria} />
        <Route path="/ambiente" component={MainAmbiente} />
        <Route path="/horario" component={MainHorario} />
        <Route path="/reporte" component={MainReportes} />
        <Route path="/semestre" component={MainSemestre} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={DashBoardComponent} />
      </Switch>
    </Router>
  );
};

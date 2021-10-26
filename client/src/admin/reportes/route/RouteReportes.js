import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Planilla } from "../Planilla";
import { ReporteDocentesyMaterias } from "../ReporteDocentesyMaterias";
export const RouteReportes = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/planilla`} component={Planilla}></Route>
      <Route
        path={`${path}/reporte-doc-mat`}
        component={ReporteDocentesyMaterias}
      ></Route>
    </Switch>
  );
};

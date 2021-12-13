import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { InformeSemestre } from "../InformeSemestre";
import { Notificaciones } from "../Notificaciones";
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
      <Route
        path={`${path}/informe-semestre`}
        component={InformeSemestre}
      ></Route>
      <Route path={`${path}/notificaciones`} component={Notificaciones}></Route>
    </Switch>
  );
};

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ListaMensajesEnviados } from "../ListaMensajesEnviados";
import { MateriasAsignadasDocente } from "../MateriasAsignadasDocente";
import { SolicitarAjusteMateria } from "../SolicitarAjusteMateria";

export const RouteID = ({ path }) => {
  console.log("path", path);
  return (
    <Switch>
      <Route
        path={`${path}/materias-asignadas`}
        component={MateriasAsignadasDocente}
      ></Route>
      <Route
        path={`${path}/ajuste-materia`}
        component={SolicitarAjusteMateria}
      ></Route>
      <Route
        path={`${path}/mensajes-enviados`}
        component={ListaMensajesEnviados}
      ></Route>
    </Switch>
  );
};

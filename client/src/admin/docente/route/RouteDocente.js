import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EditarDocente } from "../EditarDocente";
import { InsertarDocente } from "../InsertarDocente";
import { ListaDocente } from "../ListaDocente";

export const RouteDocente = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/lista-docente`} component={ListaDocente}></Route>
      <Route path={`${path}/crear-docente`} component={InsertarDocente}></Route>
      <Route path={`${path}/editar-docente`} component={EditarDocente}></Route>
    </Switch>
  );
};

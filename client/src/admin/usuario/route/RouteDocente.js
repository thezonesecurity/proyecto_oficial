import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { InsertarUsuario } from "../InsertarUsuario";
import { ListaUsuario } from "../ListaUsuario";

export const RouteUsuario = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/lista-usuario`} component={ListaUsuario}></Route>
      <Route path={`${path}/crear-usuario`} component={InsertarUsuario}></Route>
      {/*<Route path={`${path}/editar-usuario`} component={EditarDocente}></Route> */}
    </Switch>
  );
};

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CheckRoles } from "../CheckRoles";

import { InsertarUsuario } from "../InsertarUsuario";
import { ListaUsuario } from "../ListaUsuario";
import { CrearRol } from "../roles/CrearRol";
import { ListarRoles } from "../roles/ListarRoles";

export const RouteUsuario = ({ path }) => {
  return (
    <Switch>
      <Route path={`${path}/lista-usuario`} component={ListaUsuario}></Route>
      {/* <Route path={`${path}/crear-usuario`} component={CheckRoles}></Route> */}
      <Route path={`${path}/crear-usuario`} component={InsertarUsuario}></Route>

      {/*<Route path={`${path}/editar-usuario`} component={EditarDocente}></Route> */}
      <Route path={`${path}/listar-rol`} component={ListarRoles}></Route>
      <Route path={`${path}/crear-rol`} component={CrearRol}></Route>
    </Switch>
  );
};

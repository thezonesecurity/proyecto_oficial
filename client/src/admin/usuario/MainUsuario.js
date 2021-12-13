import React, { useReducer, useState } from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraUsuario } from "./CabeceraUsuario";
import { AppReducer } from "./contex/AppReducer";
import DataUsuario from "./contex/AppContext";

export const MainUsuario = () => {
  const [user] = useState([]);
  const [state, dispatch] = useReducer(AppReducer, user); //useReducer es un hook de React para actualizar un estado interno por medio de una función llamada reducer
  return (
    <DataUsuario.Provider value={{ state, dispatch }}>
      {/*(DataUsuario.Provider).....El patrón Provider permite a la librería pasar datos de arriba a abajo*/}
      {/*el dispatch se encarga de modificar los valores del state*/}
      <div className="row align-items-start">
        <SidebarMenu />
        <CabeceraUsuario />
      </div>
    </DataUsuario.Provider>
  );
};

/*
<div>
        <div className="row align-items-start">
          <SidebarMenu />
          <CabeceraDocente />
        </div>
      </div>
*/

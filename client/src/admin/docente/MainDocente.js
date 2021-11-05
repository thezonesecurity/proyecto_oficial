import React, { useReducer, useState } from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraDocente } from "./CabeceraDocente";
import { AppReducer } from "./contex/AppReducer";
import DataDocente from "./contex/AppContext";
import "./style.css";

export const MainDocente = () => {
  const [user, setuser] = useState([]);
  const [state, dispatch] = useReducer(AppReducer, user); //useReducer es un hook de React para actualizar un estado interno por medio de una función llamada reducer
  return (
    <DataDocente.Provider value={{ state, dispatch }}>
      {/*(DataDocente.Provider).....El patrón Provider permite a la librería pasar datos de arriba a abajo*/}
      {/*el dispatch se encarga de modificar los valores del state*/}
      <div>
        <div className="row align-items-start">
          <SidebarMenu />
          <CabeceraDocente />
        </div>
      </div>
    </DataDocente.Provider>
  );
};

import React, { useReducer, useState } from "react";
import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraDocente } from "./CabeceraDocente";
import { AppReducer } from "./contex/AppReducer";
import DataDocente from "./contex/AppContext";
import "./style.css";

export const MainDocente = () => {
  const [user, setuser] = useState([]);
  const [state, dispatch] = useReducer(AppReducer, user);
  return (
    <DataDocente.Provider value={{ state, dispatch }}>
      {/*el dispatch se encarga de modificar los valores del state*/}
      <div className="container">
        <div className="row align-items-start">
          <HeaderTitle />
          <SidebarMenu />
          <CabeceraDocente />
        </div>
      </div>
    </DataDocente.Provider>
  );
};

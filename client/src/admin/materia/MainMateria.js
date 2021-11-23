import React, { useReducer, useState } from "react";
import { AppReducer } from "../docente/contex/AppReducer";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraMateria } from "./CabeceraMateria";
import DataMateria from "./contex/AppContext";

export const MainMateria = () => {
  const [user, setuser] = useState([]);
  const [state, dispatch] = useReducer(AppReducer, user);
  return (
    <DataMateria.Provider value={{ state, dispatch }}>
      <div className="row align-items-start">
        <SidebarMenu />
        <CabeceraMateria />
      </div>
    </DataMateria.Provider>
  );
};

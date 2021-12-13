import React, { useReducer, useState } from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraAmbiente } from "./CabeceraAmbiente";
import DataAmbiente from "./contex/AppContext";
import { AppReducerAmb } from "./contex/AppReducerAmb";

export const MainAmbiente = () => {
  const [ambiente] = useState([]);
  const [state, dispatch] = useReducer(AppReducerAmb, ambiente);
  return (
    <DataAmbiente.Provider value={{ state, dispatch }}>
      <div className="row align-items-start">
        <SidebarMenu />
        <CabeceraAmbiente />
      </div>
    </DataAmbiente.Provider>
  );
};

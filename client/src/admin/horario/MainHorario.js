import React, { useReducer, useState } from "react";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraHorario } from "./CabeceraHorario";
import DataHorario from "./horarios/contex/AppContexH";
import { AppReducerH } from "./horarios/contex/AppReducerH";

export const MainHorario = () => {
  const [horario, setHorario] = useState([]);
  const [state, dispatch] = useReducer(AppReducerH, horario);
  return (
    <DataHorario.Provider value={{ state, dispatch }}>
      <div>
        <div className="row align-items-start">
          <SidebarMenu />
          <CabeceraHorario />
        </div>
      </div>
    </DataHorario.Provider>
  );
};

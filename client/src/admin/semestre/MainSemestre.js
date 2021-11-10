import React, { useReducer, useState } from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraSemestre } from "./CabeceraSemestre";
import DataSemestre from "./contex/AppContexSemestre";
import { AppReducerSemestre } from "./contex/AppReducerSemestre";
export const MainSemestre = () => {
  const [semestre, setSemestre] = useState([]);
  const [state, dispatch] = useReducer(AppReducerSemestre, semestre);
  return (
    <DataSemestre.Provider value={{ state, dispatch }}>
      <div>
        <div className="row align-items-start">
          <SidebarMenu />
          <CabeceraSemestre />
        </div>
      </div>
    </DataSemestre.Provider>
  );
};

import React, { useReducer, useState } from "react";

import { CabeceraInterfaceDoc } from "./CabeceraInterfaceDoc";
import DataInterfaceDocente from "./contex/IDContext";
import { SidebarMenuID } from "./SidebarMenuID";

export const MainInterfaceDocente = () => {
  const [iDocente, setIDocente] = useState([]);
  const [state, dispatch] = useReducer(DataInterfaceDocente, iDocente);
  return (
    <DataInterfaceDocente.Provider value={{ state, dispatch }}>
      <div className="row align-items-start">
        <SidebarMenuID />
        <CabeceraInterfaceDoc />
      </div>
    </DataInterfaceDocente.Provider>
  );
};

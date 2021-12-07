import React from "react";
import { HeaderInterface } from "../HeaderInterface";
import { CabeceraInterfaceDoc } from "./CabeceraInterfaceDoc";
import DataInterfaceDocente from "./contex/IDContext";
import { SidebarMenuID } from "./SidebarMenuID";

export const MainInterfaceDocente = () => {
  return (
    <DataInterfaceDocente.Provider>
      <div className="row align-items-start">
        <SidebarMenuID />
        <CabeceraInterfaceDoc />
      </div>
    </DataInterfaceDocente.Provider>
  );
};

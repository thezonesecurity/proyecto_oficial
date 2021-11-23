import React from "react";
import { HeaderInterface } from "../HeaderInterface";
import { CabeceraInterfaceDoc } from "./CabeceraInterfaceDoc";
import { SidebarMenuID } from "./SidebarMenuID";

export const MainInterfaceDocente = () => {
  return (
    <div className="row align-items-start">
      <HeaderInterface />
      <SidebarMenuID />
      <CabeceraInterfaceDoc />
    </div>
  );
};

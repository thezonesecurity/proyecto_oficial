import React from "react";
import { HeaderInterface } from "../HeaderInterface";
import { CabeceraInterfaceEstudiant } from "./CabeceraInterfaceEstudiant";

import { SidebarMenuIE } from "./SidebarMenuIE";

export const MainInterfaceEstudiante = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <HeaderInterface />
        <SidebarMenuIE />
        <CabeceraInterfaceEstudiant />
      </div>
    </div>
  );
};

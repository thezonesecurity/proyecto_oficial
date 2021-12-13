import React from "react";

import { CabeceraInterfaceEstudiant } from "./CabeceraInterfaceEstudiant";
import DataInterfaceEstudiante from "./context/IEContext";
import { SidebarMenuIE } from "./SidebarMenuIE";

export const MainInterfaceEstudiante = () => {
  return (
    <DataInterfaceEstudiante.Provider>
      <div className="row align-items-start">
        <SidebarMenuIE />
        <CabeceraInterfaceEstudiant />
      </div>
    </DataInterfaceEstudiante.Provider>
  );
};

import React from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraHorario } from "./CabeceraHorario";

export const MainHorario = () => {
  return (
    <div>
      <div className="row align-items-start">
        <SidebarMenu />
        <CabeceraHorario />
      </div>
    </div>
  );
};

import React from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraReportes } from "./CabeceraReportes";

export const MainReportes = () => {
  return (
    <div>
      <div className="row align-items-start">
        <SidebarMenu />
        <CabeceraReportes />
      </div>
    </div>
  );
};

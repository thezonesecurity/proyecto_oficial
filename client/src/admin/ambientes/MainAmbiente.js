import React from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraAmbiente } from "./CabeceraAmbiente";

export const MainAmbiente = () => {
  return (
    <div>
      <div className="row align-items-start">
        <SidebarMenu />
        <CabeceraAmbiente />
      </div>
    </div>
  );
};

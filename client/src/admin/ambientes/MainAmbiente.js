import React from "react";
import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraAmbiente } from "./CabeceraAmbiente";

export const MainAmbiente = () => {
  return (
    <div>
      <div className="row align-items-start">
        <HeaderTitle />
        <SidebarMenu />
        <CabeceraAmbiente />
      </div>
    </div>
  );
};

import React from "react";
import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraHorario } from "./CabeceraHorario";

export const MainHorario = () => {
  return (
    <div>
      <div className="row align-items-start">
        <HeaderTitle />
        <SidebarMenu />
        <CabeceraHorario />
      </div>
    </div>
  );
};

import React from "react";
import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraReportes } from "./CabeceraReportes";

export const MainReportes = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <HeaderTitle />
        <SidebarMenu />
        <CabeceraReportes />
      </div>
    </div>
  );
};

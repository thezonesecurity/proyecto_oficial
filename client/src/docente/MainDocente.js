import React from "react";
import { CabeceraDocente } from "./CabeceraDocente";

import "./style.css";
import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
export const MainDocente = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <HeaderTitle />
        <SidebarMenu />
        <CabeceraDocente />
      </div>
    </div>
  );
};

import React from "react";
import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraDocente } from "./CabeceraDocente";
import "./style.css";

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

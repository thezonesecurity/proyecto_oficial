import React from "react";

import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraMateria } from "./CabeceraMateria";
export const MainMateria = () => {
  return (
    <div>
      <div className="row align-items-start">
        <HeaderTitle />
        <SidebarMenu />
        <CabeceraMateria />
      </div>
    </div>
  );
};

import React from "react";

import { HeaderTitle } from "../HeaderTitle";
import { SidebarMenu } from "../SidebarMenu";
import { CabeceraSemestre } from "./CabeceraSemestre";
export const MainSemestre = () => {
  return (
    <div>
      <div className="row align-items-start">
        <HeaderTitle />
        <SidebarMenu />
        <CabeceraSemestre />
      </div>
    </div>
  );
};

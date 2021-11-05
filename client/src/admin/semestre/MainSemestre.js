import React from "react";

import { SidebarMenu } from "../SidebarMenu";
import { CabeceraSemestre } from "./CabeceraSemestre";
export const MainSemestre = () => {
  return (
    <div>
      <div className="row align-items-start">
        <SidebarMenu />
        <CabeceraSemestre />
      </div>
    </div>
  );
};

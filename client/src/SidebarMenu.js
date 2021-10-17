import React from "react";
import { SubSidebar } from "./SubSidebar";

export const SidebarMenu = () => {
  return (
    <div className="col-2 card">
      <div className="nav nav-tabs card-header-tabs">
        <SubSidebar />
      </div>
    </div>
  );
};

import React from "react";
import { SideNav } from "./SideNav";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <div className="layout">
      <SideNav />
      <div className="main d-fex row">
        <div >
        <Header />
        </div>
       
        <div className="containte"> main containte</div>
      </div>
    </div>
  );
};

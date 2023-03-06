import React from "react";
import { Outlet } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";

function NavbarLayoutAdmin() {
  return (
    <>
      <div className="w-full h-full flex flex-row">
        <SidebarAdmin />
        <div className="w-full h-screen flex flex-col">
          <HeaderAdmin />
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default NavbarLayoutAdmin;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function NavbarLayout() {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default NavbarLayout;

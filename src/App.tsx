import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarLayout from "./components/NavbarLayout";
import NavbarLayoutAdmin from "./components/NavbarLayoutAdmin";
import HomeAdmin from "./page/admin/HomeAdmin";
import LoginAdmin from "./page/admin/LoginAdmin";
import NotFoundAdmin from "./page/admin/NotFoundAdmin";
import Home from "./page/Home";
import Login from "./page/Login";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<NavbarLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
          <Route path="/admin" element={<NavbarLayoutAdmin />}>
            <Route index element={<HomeAdmin />}></Route>
          </Route>
          <Route path="/admin/*" element={<NotFoundAdmin />}></Route>
          <Route path="/admin/login" element={<LoginAdmin />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

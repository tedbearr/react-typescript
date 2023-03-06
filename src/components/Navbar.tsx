import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full h-full max-sm:flex-col flex-row justify-end bg-blue-400 flex items-center">
        <div className="w-full flex">
          <div className=" max-sm:hidden flex justify-start items-center text-white p-2">
            Logo
          </div>
          <div className="p-2 flex w-full">
            <input
              className="rounded-sm flex justify-center w-full focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="flex items-center text-white">Cart</div>
          <div className="justify-end hidden max-sm:flex">
            <button
              className=" text-white p-2 flex "
              onClick={() => setShow((prev) => !prev)}
            >
              Click
            </button>
          </div>
        </div>
        <div
          className={
            show
              ? "max-sm:w-full flex justify-center text-white text-center pb-2 max-sm:flex-col flex-row p-2"
              : "max-sm:hidden flex text-white mx-1"
          }
        >
          <Link to="/login" className="mx-1">
            Login
          </Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

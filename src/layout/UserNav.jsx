import React, { useState } from "react";
import logo from "../assets/AFIT 1.svg";
import hamburger from "../assets/Vector.svg";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";


const UserNav = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <div className="m-container">
      <div className="">
        <div className="flex items-center justify-between py-3 md:py-2 w-full">
          <div className="flex flex-col justify-center items-start">
            <img src={logo} alt="" />
            <p className="text-[10px] ">Airforce Institute of Technology</p>
          </div>
          <div
            className={`md:relative md:right-0 md:flex md:gap-4 text-sm ${
              nav 
                ? "fixed  top-0 right-0 z-30 bg-white w-[55%] px-4 py-10 transition-all duration-500 ease-in-out "
                : "fixed right-[-100%]"
            } `}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-5">
              <Link to="/user/home">
                <li onClick={handleNav}>Home</li>
              </Link>
              <li onClick={handleNav}>About</li>
              <li onClick={handleNav}>Resources</li>
              <Link to="/user/contact">
                <li onClick={handleNav}>Contact</li>
              </Link>
             
            </ul>
            <button className="bg-blue text-white border-buttonGrey border-[1px] py-2 px-5 mt-4 md:mt-0 rounded-lg">
                <Link to="/user/login">Login</Link>
              </button>
          </div>
          <div className="z-50 md:hidden" onClick={handleNav}>
          {nav ?  <img src={close} className="w-5" alt="" /> : <img src={hamburger} alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;

import React, { useState } from "react";
import logo from "../assets/AFIT 1.svg";
import hamburger from "../assets/Vector.svg";
import close from "../assets/close.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    !toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };
  return (
    <div className=" md:bg-blueishGray">
      <div className="my-container">
        <div className="flex items-center justify-between py-5 md:py-2">
          <div>
            <img src={logo} alt="" />
          </div>
          <div
            className={`md:relative md:right-0 md:flex md:items-center md:gap-5 md:justify-between md:w-[80%] text-sm   ${
              toggle
                ? "fixed  top-0 right-0 z-30 bg-white w-[55%] px-4 py-10 transition-all duration-500 ease-in-out "
                : "fixed right-[-100%]"
            } `}
          >
            <div className="md:mx-auto">
              <ul className="flex flex-col md:flex-row md:items-center md:gap-5  gap-y-5">
                <li>Benefits</li>
                <li>Features</li>
                <li>Support</li>
                <Link to="/login">
                  <li>Login</li>
                </Link>
              </ul>
            </div>
            <div>
              <Link to="/signup">
                <button className="bg-blue text-white text-sm md:px-2 md:py-2 mt-4 md:mt-0 py-3 px-3 rounded-lg md:rounded-3xl">
                    Get Started for Free
                  </button>
              </Link>
            </div>
          </div>
          <div onClick={handleToggle} className="z-50 md:hidden">
            {toggle ?  <img src={close} className="w-5" alt="" /> : <img src={hamburger} alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

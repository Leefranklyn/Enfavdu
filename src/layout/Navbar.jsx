import React, { useState } from "react";
import logo from "../assets/AFIT 1.svg";
import hamburger from "../assets/Vector.svg";

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
        <div className="flex items-center justify-between py-5 md:py-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <div onClick={handleToggle} className="z-20">
            <img src={hamburger} alt="" />
          </div>
          <div
            className={
              toggle
                ? "fixed top-0 right-0 bg-white w-[55%] px-4 py-10 transition-all duration-500 ease-in-out"
                : "fixed right-[-100%]"
            }
          >
            <ul className="flex flex-col gap-y-5">
              <li>Benefits</li>
              <li>Features</li>
              <li>Support</li>
              <li>Login</li>
              <button className="bg-blue text-white py-3 rounded-lg">
                Get Started for Free
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'
import logo from "../assets/AFIT 1.svg"
import hamburger from "../assets/Vector.svg"

const UserNav = () => {
  return (
    <div className="">
      <div className="my-container">
        <div className="flex items-center justify-between py-5 md:py-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <div  className="z-50">
            <img src={hamburger} alt="" />
          </div>
          {/* <div
            className={
              toggle
                ? "fixed  top-0 right-0 z-30 bg-white w-[55%] px-4 py-10 transition-all duration-500 ease-in-out"
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
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default UserNav

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import admin from "../../../assets/admin.svg";
import view from "../../../assets/Overview.svg";
import people from "../../../assets/Customers.svg";
import up from "../../../assets/up.svg";
import Reports from "../../../assets/Reports.svg";
import payment from "../../../assets/payment.svg";
import Settings from "../../../assets/Settings.svg";
import out from "../../../assets/out.svg";
import Context from "../../../context/ToggleContext"


const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
    // !toggle
    // ? (document.body.style.overflow = "hidden")
    // : (document.body.style.overflow = "unset");
  }

  const handleLogout = () => {
    localStorage.removeItem("id");
  }


  return (
    <>
    <Context.Provider value={{toggle , setToggle}}>
      <div className="flex relative bg-lightGrey min-h-full">
        <div className={`bg-blue md:w-[25%] lg:w-[18%]  rounded-e-[30px] ${ toggle ? "absolute top-0 w-[70%] h-full  translate-x-[0]" : "absolute translate-x-[-1000%]"} min-h-[100vh] md:relative md:translate-x-[0] `}>
          <div className="flex flex-col justify-start min-h-[100%] px-12 py-10  md:pt-12 md:pb-32 ">
            <div className="flex items-center">
              <img src={admin} alt="" />
              <h2 className="text-white text-3xl font-bold">Admin</h2>
            </div>
            <div className="mt-8">
              <ul className="flex flex-col gap-4 my-4 mt-8 md:mt-0  text-buttonGrey">
                <Link to="/dashboard">
                  <li className="flex gap-2" onClick={handleToggle}>
                    <img src={view} alt="" />
                    Dashboard
                  </li>
                </Link>
                <Link to="/dashboard/adduser">
                  <li className="flex gap-2"  onClick={handleToggle}>
                    <img src={view} alt="" />
                    Add User
                  </li>
                </Link>
                <Link to="/dashboard/scores">
                  <li className="flex gap-2"  onClick={handleToggle}>
                    <img src={people} alt="" />
                    Exams
                  </li>
                </Link>
                  <Link to="/dashboard/editquestion">
                  <li className="flex gap-2"  onClick={handleToggle}>
                    <img src={up} alt="" />
                    Edit Questions
                  </li>
                </Link>
                <li className="flex gap-2"  onClick={handleToggle}>
                  <img src={Reports} alt="" />
                  Reports
                </li>
                <li className="flex gap-2"  onClick={handleToggle}>
                  <img src={payment} alt="" />
                  Payment
                </li>
              </ul>
            </div>
            <div> 
              <ul className="flex flex-col gap-4 text-buttonGrey">
                <li className="flex gap-2"  onClick={handleToggle}>
                  <img src={Settings} alt="" />
                  Settings
                </li>
                  <Link to="/login" onClick={handleLogout}>
                <li className="flex gap-2"  onClick={handleToggle}>
                  <img src={out} alt="" />
                  Sign out
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[75%] lg:w-[85%]">
          <Outlet/>
        </div>
      </div>
      </Context.Provider>
    </>
  );
};

export default Dashboard;

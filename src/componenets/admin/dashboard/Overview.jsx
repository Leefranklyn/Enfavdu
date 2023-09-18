import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import box from "../../../assets/Shadow 05.svg";
import box2 from "../../../assets/Shadow 6.svg";

const Overview = ({}) => {
  return (
    <div className="bg-lightGrey min-h-[100%]">
      <Header />

      <div className="flex flex-col items-center justify-center  ">
        <div className=" flex flex-col items-start justify-start w-[80%]  pt-4 md:pt-10 mx-auto">
          <h1 className="text-[20px] font-bold ">Admin Dashboard</h1>
          <h3 className="text-lg font-semibold">Welcome back,Jo</h3>
        </div>

        <div className="flex flex-col md:flex-row pt-10">
          <Link to="/dashboard/scores">
            <div>
              <img src={box} className="" alt="" />
            </div>
          </Link>
          <div>
            <img src={box2} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

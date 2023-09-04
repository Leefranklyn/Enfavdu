import React from "react";
import man from "../../../assets/man.png";
import google from "../../../assets/google.svg";
import icon from "../../../assets/icon.svg"

const Login = () => {
  return (
    <div className="md:flex">
      <div className="bg-blue flex justify-center items-center py-16 md:w-1/2 h-[100vh]">
        <img src={man} alt="" />
      </div>
      <div className="bg-lightGrey py-28 flex flex-col justify-center md:w-1/2 h-[100vh]">
        <div className="w-[80%] mx-auto">
          <h5 className="px-2">Login</h5>
          <input
            type="text"
            placeholder="EMAIL"
            className="w-full outline-none my-3 py-2 px-3 rounded-md"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            className=" w-full outline-none my-3 py-2 px-3 rounded-md"
          />
          <div className="mx-2">
            <input type="checkbox" name="" id="" className="mr-2" />
            <label>View password</label>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center">
              <div className="px-2 py-3">
                <p>Forgot your password?<a href="" className="text-blue">Click here</a></p>
              </div>
              <div className="flex flex-col gap-3 items-center md:flex-row my-5">
                <button className="bg-white flex items-center justify-between py-3 px-3 rounded-md"><img src={google} alt="" />Login with Google</button>
                <button className="bg-blue text-white flex items-center justify-between py-3 px-6 rounded-md">Login <img src={icon} alt="" /></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

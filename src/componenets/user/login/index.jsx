import React from "react";

const UserLogin = () => {
  return (
    <div className="flex items-center bg-lightGrey h-[100vh] ">
      <div className=" w-[90%] md:w-[400px] mx-auto">
        <div className="my-4">
          <h2 className="text-[25px] font-semibold text-center">
            Welcome User,
          </h2>
          <h2 className="text-[25px] font-semibold text-center">
            Are you ready to take your test?
          </h2>
        </div>
        <p className="text-center my-3">
          Please input the login details sent to your email by the institution
        </p>
        <div className="flex flex-col gap-4 my">
          <input
            type="text"
            placeholder="Username"
            className="w-full border-loginGrey border-[1px] py-2 px-4 outline-none rounded-md text-textGray"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-loginGrey border-[1px] py-2 px-4 outline-none rounded-md text-textGray"
          />
        </div>
        <div className="flex justify-center items-center my-6">
          <button className="border-lineBlue border-[1px] py-2 px-8 text-lineBlue rounded-md ">
            Login
          </button>
        </div>
        <div className="w-[80%] mx-auto pt-5">
          <p className="text-center">
            Please note, as you login, your test starts,and your timer starts
            ticking immediately!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

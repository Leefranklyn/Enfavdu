import React from "react";
import show from "../../../assets/show.svg"


const CreateNewPassword = () => {
  return (
    <div className="h-[100%] flex justify-center">
      <div className="bg-white h-[50%] md:h-[65%] w-[90%] max-w-[400px] flex flex-col justify-center md:gap-y-5 my-auto text-center py-12 px-3 rounded-lg shadow-xl">
        <div>
          <h4 className="text-[20px]  md:text-[25px] font-bold">
            Create New Password
          </h4>
          <p>Enter your new password if you forgot it. </p>
          <div className="py-5 flex flex-col items-start gap-5">
            <input
              type="password"
              placeholder="password"
              className="w-[90%] mx-auto py-2 px-4 rounded-md border-gray border-[1px]"
            />
            <input
              type="Confirm password"
              placeholder="Email ,phone & username"
              className="w-[90%] mx-auto py-2 px-4 rounded-md border-gray border-[1px]"
            />
          </div>
        </div>
        <div>
          <button className="bg-blue text-white py-2 px-8 rounded-md shadow-xl">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;

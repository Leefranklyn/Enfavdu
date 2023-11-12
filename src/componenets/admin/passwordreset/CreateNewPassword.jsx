import React, { useState } from "react";
import show from "../../../assets/show.svg";

const CreateNewPassword = ({ id, page, setPage }) => {
  const [adminPassword, setadminPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleChange(event) {
    // setLoading(true);

    if (adminPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }


    try {
      const response = await fetch(
        `https://testmanagement2.onrender.com/api/admin/resetpassword/${id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ adminPassword }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setPage("success");
        setMessage("Password reset successfully.");
      } else {
        const errorData = data || {};
        setMessage("Password reset failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred.");
      console.error(error);
    }
  }

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
              value={adminPassword}
              onChange={(e) => setadminPassword(e.target.value)}
            />
            <input
              type="Confirm password"
              placeholder="Confirm Password"
              className="w-[90%] mx-auto py-2 px-4 rounded-md border-gray border-[1px]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <p>{message}</p>
        </div>
        <div>
          <button
            onClick={handleChange}
            className="bg-blue text-white py-2 px-8 rounded-md shadow-xl"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;

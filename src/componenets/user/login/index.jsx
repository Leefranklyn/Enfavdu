import React, { useState, useContext } from "react";
import UserLoginContext from "../../../context/UserLoginContext"
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";



const UserLogin = () => {
  const navigate = useNavigate();
  const {id, setId} = useContext(UserLoginContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false)
  const [form, setForm] = useState({
    userName: "",
    password: "",
  })

  const handleLogin = async () => {
    console.log(form)
    setLoading(true);
    try {
      setMessage(false)
      const response = await fetch(
        "https://testmanagement2.onrender.com/api/user/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form), // Send user credentials
        }
      );
      const data = await response.json();
      if (response.ok) {
        const token = data.token;
        const userId = data.data.id;
        localStorage.setItem('userJwt', token);
        console.log(token)
        setId(userId)
        console.log(data)
        setMessage(false);

        navigate("/user/test")

        // Successful login, perform necessary actions (e.g., redirect)
      } else {
        setLoading(false);
        setMessage(true)
        // Handle authentication errors (e.g., show error message)
      }
    } catch (error) {
      setLoading(false);
      setMessage(true);
      // Handle network errors
    }
  };

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
            value={form.userName}
            onChange={(e) => {
              setForm({ ...form, userName: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-loginGrey border-[1px] py-2 px-4 outline-none rounded-md text-textGray"
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
          />
        </div>
        {message && (
            <div>
              <p className="text-center text-red">
                An error occurred. Check the user name or password and try again
              </p>
            </div>
          )}
        <div className="flex justify-center items-center my-6">
          <button onClick={handleLogin} className="border-lineBlue border-[1px] py-2 px-8 text-lineBlue rounded-md ">
          {loading ? (
                  <ClipLoader
                    css={css`
                      display: block;
                      margin: 0 auto;
                    `}
                    size={24}
                    color={"#4A3AFF"}
                    loading={loading}
                  />
                ) : (
                  "Login"
                )}
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

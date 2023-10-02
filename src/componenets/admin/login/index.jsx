import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import man from "../../../assets/man.png";
import google from "../../../assets/google.svg";
import LoginContext from "../../../context/LoginContext"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(LoginContext);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    adminEmail: "",
    adminPassword: "",
  })

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    console.log(form)
    try {
      const response = await fetch(
        "https://testmanagement.onrender.com/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form), // Send user credentials
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data)
        const adminId = data.data.id;
        const token = data.token;
        localStorage.setItem('jwt', token);
        console.log(token)
        setUserId(adminId)
        console.log(adminId)
        navigate("/dashboard")

        // Successful login, perform necessary actions (e.g., redirect)
      } else {
        // Handle authentication errors (e.g., show error message)
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <div className="md:flex">
      <div className="bg-blue flex justify-center items-center py-16 md:w-[35%] h-[100vh]">
        <img src={man} alt="" />
      </div>
      <div className="bg-lightGrey py-28 flex flex-col justify-center md:w-[65%] h-[100vh]">
        <div className="w-[80%]  mx-auto">
          <div className=" lg:w-[550px] mx-auto">
            <h5 className="px-2 text-lg">Login</h5>
            <input
              type="text"
              placeholder="EMAIL"
              className="w-full outline-none my-3 py-2 px-3 rounded-md"
              value={form.adminEmail}
              onChange={(e) => {
                setForm({ ...form, adminEmail: e.target.value });
              }}
            />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="PASSWORD"
                className=" w-full outline-none my-3 py-2 px-3 rounded-md"
                value={form.adminPassword}
                onChange={(e) => {
                  setForm({ ...form, adminPassword: e.target.value });
                }}
              />
              <div className="mx-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-2"
                  onChange={handleShowPassword}
                />
                <label>View password</label>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center">
            <div className="px-2 py-3">
              <p>
                Forgot your password?
                <Link to="/passwordreset" className="text-blue">
                  Click here
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center md:flex-row my-5">
              <button className="bg-white flex items-center justify-between py-3 px-3 rounded-md">
                <img src={google} alt="" />
                Login with Google
              </button>
              <button
                onClick={handleLogin}
                className="bg-blue text-white flex items-center justify-between py-3 px-6 rounded-md"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

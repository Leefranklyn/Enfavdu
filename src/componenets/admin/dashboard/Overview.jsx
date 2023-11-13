import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../../../context/LoginContext";
import Header from "./Header";
import box from "../../../assets/Shadow 05.svg";
import box2 from "../../../assets/Shadow 6.svg";

const Overview = ({}) => {
  const { userId } = useContext(LoginContext);
  const [adminName, setAdminName] = useState("");
  const [registered, setRegistered] = useState("")
  const [taken, setTaken] = useState("")

  const navigate = useNavigate()
  const jwt = localStorage.getItem("jwt");
  const id = localStorage.getItem("id");

  const checkTokenExpiration = async () => {
    const jwt = localStorage.getItem("jwt");
    const expirationTime = localStorage.getItem("expirationTime");

    if (jwt && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > parseInt(expirationTime)) {
        // Token has expired, navigate the user to the login page
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        credentials: "include",
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/admin/institution/users/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        setRegistered(data.totalUsers)
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  },[id, jwt])

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        credentials: "include",
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/admin/institution/userswithresults/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        setTaken(data.totalUsersWithResults)
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, [id, jwt])

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        credentials: "include",
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/institution/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        const adminName = data.data.adminFirstName;
        setAdminName(adminName);
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, [jwt, id]);

  return (
    <div className="bg-lightGrey min-h-[100%]">
      <Header />

      <div className="flex flex-col items-center justify-center  ">
        <div className=" flex flex-col items-start justify-start w-[80%]  pt-4 md:pt-10 mx-auto">
          <h1 className="text-[20px] font-bold ">Admin Dashboard</h1>
          <h3 className="text-lg font-semibold">{`Welcome back,${adminName}`}</h3>
        </div>

        <div className="flex flex-col md:flex-row pt-10">
          <Link to="/dashboard/scores">
            <div>
              <img src={box} className="" alt="" />
            </div>
          </Link>
          <Link to='/dashboard/registered'>
            <div>
              <img src={box2} className="" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;

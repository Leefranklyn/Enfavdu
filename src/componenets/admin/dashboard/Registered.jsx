import React, { useEffect, useContext, useState } from "react";
import Header from "./Header";
import edit from "../../../assets/edit.svg";
import trash from "../../../assets/trash.svg";
import plus from "../../../assets/plus.svg";
import LoginContext from "../../../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Registered = () => {
    const { userId } = useContext(LoginContext);
    const [registered, setRegistered] = useState([]);
    const id = localStorage.getItem("id");
    const navigate = useNavigate()
    const jwt = localStorage.getItem("jwt");
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
        async function fetchData() {
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
                console.log(data);
                const arr = data.userInfo;
                setRegistered(arr);
            } catch (error) {
                // Handle the error
            }
        }

        fetchData();
    }, [jwt, id]);

    return (
        <div className="bg-lightGrey min-h-[100vh]">
            <Header />
            <div className="w-[80%] mx-auto">
                <div className="w-[90%] md:w-[85%] mt-12 md:mt-20 mx-auto">
                    <h3 className="font-bold text-[25px]  ">Test registered</h3>
                </div>
                <div>
                    <div className="">
                        <table className="table-auto mx-auto lg:mx-20 mt-10 w-full md:w-[90%] lg:w-[80%] overflow-auto bg-white rounded-xl shadow-lg">
                            <thead>
                                <tr>
                                    <th className="py-3 text-center">Name</th>
                                    {/* <th className="py-3 text-center">Title</th> */}
                                    <th className="py-3 text-center">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registered && registered.map((register, index) => (
                                    <tr key={index}>
                                        <td className="py-3 text-center ">{register.firstName} {register.lastName}</td>
                                        {/* <td className="py-3 text-center">Mr.</td> */}
                                        <td className="py-3 text-center">{register.email}</td>
                                        {/* <td>
                      <div className="flex  items-center justify-end gap-6 md:gap-12 px-3">
                        <img src={edit} alt="" />
                        <img src={trash} alt="" />
                      </div>
                    </td> */}
                                    </tr>
                                ))}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Registered;

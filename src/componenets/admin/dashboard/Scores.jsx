import React, { useEffect, useContext, useState } from "react";
import Header from "./Header";
import edit from "../../../assets/edit.svg";
import trash from "../../../assets/trash.svg";
import plus from "../../../assets/plus.svg";
import LoginContext from "../../../context/LoginContext";

const Scores = () => {
  const { userId } = useContext(LoginContext);
  const [scores, setScores] = useState([]);

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
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement.onrender.com/api/admin/institution/userswithresults/${userId}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        console.log(data);
        const arr = data.userInfo;
        setScores(arr);
      } catch (error) {
        // Handle the error
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-lightGrey min-h-[100vh]">
      <Header />
      <div className="w-[80%] mx-auto">
        <div className="w-[90%] md:w-[85%] mt-12 md:mt-20 mx-auto">
          <h3 className="font-bold text-[25px]  ">Test scores</h3>
        </div>
        <div>
          <div className="">
            <table class="table-auto mx-auto lg:mx-20 mt-10 w-full md:w-[90%] lg:w-[80%] overflow-auto bg-white rounded-xl shadow-lg">
              <thead>
                <tr>
                  <th className="py-3 text-center">Name</th>
                  <th className="py-3 text-center">Title</th>
                  <th className="py-3 text-center">score</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr key={index}>
                    <td className="py-3 text-center ">{score.firstName} {score.lastName}</td>
                    {/* <td className="py-3 text-center">Mr.</td> */}
                    <td className="py-3 text-center">{score.score}</td>
                    <td>
                      <div className="flex  items-center justify-end gap-6 md:gap-12 px-3">
                        <img src={edit} alt="" />
                        <img src={trash} alt="" />
                      </div>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                    <td className="py-3 text-center ">
                    John Girma
                    </td>
                    <td className="py-3 text-center">Mr.</td>
                    <td className="py-3 text-center">26/30</td>
                    <td >
                     <div className='flex  items-center justify-end gap-12 px-3' >
                         <img src={edit} alt="" />
                         <img src={trash} alt="" />
                     </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-center ">
                    John Girma
                    </td>
                    <td className="py-3 text-center">Mr.</td>
                    <td className="py-3 text-center">26/30</td>
                    <td >
                     <div className='flex  items-center justify-end gap-12 px-3' >
                         <img src={edit} alt="" />
                         <img src={trash} alt="" />
                     </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-center ">
                    John Girma
                    </td>
                    <td className="py-3 text-center">Mr.</td>
                    <td className="py-3 text-center">26/30</td>
                    <td >
                     <div className='flex  items-center justify-end gap-12 px-3' >
                         <img src={edit} alt="" />
                         <img src={trash} alt="" />
                     </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 text-center ">
                    John Girma
                    </td>
                    <td className="py-3 text-center">Mr.</td>
                    <td className="py-3 text-center">26/30</td>
                    <td >
                     <div className='flex  items-center justify-end gap-12 px-3' >
                         <img src={edit} alt="" />
                         <img src={trash} alt="" />
                     </div>
                    </td>
                  </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[90%] md:w-[85%] mt-12 mx-auto">
          <button className="flex gap-2 border-blue text-blue border-[1px] py-2 px-3 rounded-lg">
            <div className="bg-blue p-[4px] rounded-full ">
              <img src={plus} alt="" />
            </div>
            <p>Add Examinees</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scores;

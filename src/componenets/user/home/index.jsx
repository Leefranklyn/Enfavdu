import React from "react";
import UserNav from "../../../layout/UserNav";

const HomePage = () => {
  return (
    <div>
      <UserNav />
      <div className="bg-hero  py-16 bg-contain bg-center bg-no-repeat">
        <h2 className="text-[30px] text-center font-extrabold">
          Welcome to the AFIT Online Recruitment Service
        </h2>
      </div>
      <div className="w-[80%] mx-auto">
        <p className="text-center">
          The AFIT online recruitment service is a service set up by the
          Institution to enhance recruitment of staff into the Institution in
          fairness and an organized manner, to curb the challenges faced in the
          recruitment of staff in the Institution.
        </p>
      </div>
      <h3 className="text-[25px] font-semibold text-center my-5 text-textGrey">Instructions for Test</h3>
      <ol>
        <li>hdfrvw</li>
      </ol>
    </div> 
  );
};

export default HomePage;

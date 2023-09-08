import React from "react";
import UserNav from "../../../layout/UserNav";
import person from "../../../assets/person.png";
import UserFooter from "../../../layout/UserFooter";
import user from "../../../assets/user.png"

const HomePage = () => {
  return (
    <>
    <UserNav />
    <div className="bg-veryLightGrey">
    <div className="m-container">
        <div className="md:flex md:items-center md:py-9">
          <div className="md:w-[60%]">
            <div className="bg-hero  py-16 md:pt-0 md:pb-5 bg-contain bg-center bg-no-repeat">
              <h2 className="text-[30px] text-center  md:text-left font-extrabold">
                Welcome to the AFIT Online Recruitment Service
              </h2>
            </div>
            <div className="w-[80%] md:w-full mx-auto">
              <p className="text-center md:text-left">
                The AFIT online recruitment service is a service set up by the
                Institution to enhance recruitment of staff into the Institution in
                fairness and an organized manner, to curb the challenges faced in the
                recruitment of staff in the Institution.
              </p>
            </div>
          </div>
          <div className="hidden md:block">
           <img src={user} className="h-[300px]" alt="" />
          </div>
        </div>
        <div className="px-3 py-4">
          <h3 className="text-[25px] font-semibold text-center my-5 text-textGrey">
            Instructions for Test
          </h3>
          <ol className="list-decimal list-outside px-1 flex flex-col gap-2">
            <li>
              <span className="font-semibold">Time Limit</span>: Each question
              must be completed within the specified time limit of 10 minutes.
            </li>
            <li>
              <span className="font-semibold">No Collaboration</span>: Students
              are strictly prohibited from collaborating with each other during
              the test. Any form of communication will result in immediate
              disqualification.
            </li>
            <li>
              <span className="font-semibold">Closed-Book Policy</span>: This test
              is closed-book. Students are not allowed to refer to any notes,
              textbooks, or online resources while taking the test.
            </li>
            <li>
              <span className="font-semibold">Answer Format</span>: All answers
              must be written legibly in blue or black ink. Pencil or other
              colored inks will not be accepted.
            </li>
            <li>
              <span className="font-semibold">Cell Phones</span>: Cell phones and
              electronic devices are not permitted during the test. All electronic
              devices must be turned off and stored in backpacks or designated
              areas.
            </li>
          </ol>
          <div className="flex justify-center">
            <button className="bg-blue my-5 text-white py-4 px-5 rounded-lg">
              Take Test
            </button>
          </div>
        </div>
          {/* <div>
            <h3 className="text-[25px] font-semibold text-center my-5 ">
              You are in good company
            </h3>
          </div> */}
        <div className="md:flex-row-reverse">
          <div><img src={person} alt="" /></div>
          <div>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
    </div>
    <UserFooter/>
    </>
  );
};

export default HomePage;

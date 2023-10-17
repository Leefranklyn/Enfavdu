import React, { useEffect } from "react";
import UserNav from "../../../layout/UserNav";
import person from "../../../assets/person.png";
import UserFooter from "../../../layout/UserFooter";
import user from "../../../assets/user.png";
import { Link, useParams } from "react-router-dom";

const HomePage = () => {
  const { path } = useParams();
  const schoolId = localStorage.getItem("schoolId");
  console.log(schoolId)

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace 'your_api_url' with the actual URL for your data.
        const response = await fetch(`https://testmanagement2.onrender.com/api/institution/get/${schoolId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // setItemData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [path]);




  return (
    <>
      <UserNav />
      <div className="bg-veryLightGrey">
        <div className="m-container mx-36">
          <div className="md:flex md:items-center md:justify-between md:py-9">
            <div className="md:w-[45%]">
              <div className=" py-16 md:pt-0 md:pb-5 bg-contain bg-center bg-no-repeat">
                <h2 className="text-[30px] md:text-[40px]  text-center  md:text-left font-extrabold">
                  Welcome to the AFIT Online Recruitment Service
                </h2>
              </div>
              <div className="hidden md:block">
                <h4 className="text-[18px] font-semibold">
                  NUMBER OF APPLICANTS{" "}
                  <span className="text-[25px] font-extrabold text-lineBlue">
                    200+
                  </span>
                </h4>
              </div>
              <div className="w-[80%] md:w-full mx-auto md:hidden">
                <p className="text-center md:text-left">
                  The AFIT online recruitment service is a service set up by the
                  Institution to enhance recruitment of staff into the
                  Institution in fairness and an organized manner, to curb the
                  challenges faced in the recruitment of staff in the
                  Institution.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <img src={user} className="h-[350px]" alt="" />
            </div>
          </div>
          <div className="w-[80%] hidden md:block md:w-full mx-auto">
            <h4 className="text-[25px] font-semibold text-center my-5">
              ABOUT
            </h4>
            <p className="text-center md:text-left">
              The AFIT online recruitment service is a service set up by the
              Institution to enhance recruitment of staff into the Institution
              in fairness and an organized manner, to curb the challenges faced
              in the recruitment of staff in the Institution.
            </p>
          </div>
          <div className="px-3 py-4">
            <h3 className="text-[25px] font-semibold text-center md:text-left my-5 text-textGrey">
              Instructions for Test:
            </h3>
            <ol className="list-decimal list-outside px-1 flex flex-col gap-2">
              <li>
                <span className="font-semibold">Time Limit</span>: Each question
                must be completed within the specified time limit of 10 minutes.
              </li>
              <li>
                <span className="font-semibold">No Collaboration</span>:
                Candidates are strictly prohibited from collaborating with each
                other during the test. Any form of communication will result in
                immediate disqualification.
              </li>
              <li>
                <span className="font-semibold">Closed-Book Policy</span>: This
                test is closed-book. Candidates are not allowed to refer to any
                notes, textbooks, or online resources while taking the test.
              </li>
              <li>
                <span className="font-semibold">Answer Format</span>: All
                answers must be written legibly in blue or black ink. Pencil or
                other colored inks will not be accepted.
              </li>
              <li>
                <span className="font-semibold">Cell Phones</span>: Cell phones
                and electronic devices are not permitted during the test. All
                electronic devices must be turned off and stored in backpacks or
                designated areas.
              </li>
            </ol>
            <div className="flex justify-center">
              <Link to="/user/login">
                <button className="bg-blue my-5 text-white py-4 px-5 rounded-lg">
                  Take Test
                </button>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <h3 className="text-[25px] font-semibold text-center my-5 ">
              You are in good company
            </h3>
          </div>
          <div className="flex flex-col justify-between md:flex-row pb-10">
            <div className="hidden md:block w-[45%]">
              <div>
                <h3 className="text-[25px] font-semibold text-left my-5 ">
                  You are in good company
                </h3>
              </div>
              <p className="text-center md:text-left ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div className="flex justify-center md:w-[40%]">
              <img src={person} className="md:w-[100%] "alt="" />
            </div>
            <div className=" md:hidden">
              <p className="text-center md:text-left pt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export default HomePage;

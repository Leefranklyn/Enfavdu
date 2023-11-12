import { useContext, useEffect, useState } from "react";
import UserNav from "../../../layout/UserNav";
// import person from "../../../assets/person.png";
import UserFooter from "../../../layout/UserFooter";
import user from "../../../assets/user.png";
import { Link, useParams } from "react-router-dom";
import { SchoolContext } from "../../../context/SchoolContext";

const HomePage = () => {
  const { info, setInfo } = useContext(SchoolContext)
  const { path } = useParams();
  localStorage.setItem("path", path)
  const jwt = localStorage.getItem("userJwt");
  const id = localStorage.getItem("userId");
  const [time, setTime] = useState('')

  const item = localStorage.getItem('path')

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace 'your_api_url' with the actual URL for your data.
        const response = await fetch(`https://testmanagement2.onrender.com/api/institution/schoolinfo/${item}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        else {
          const data = await response.json();
          const res = await fetch(`https://testmanagement2.onrender.com/api/institution/${data.data.schoolId}`)
          if (res.ok) {
            const data = await res.json();
            setInfo(data.data)
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [path, setInfo, item]);

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
          `https://testmanagement2.onrender.com/api/user/test/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        const test = await data.data.timer;
        setTime(test);

      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, [jwt, id]);


  return (
    <>
      <UserNav />
      <div className="bg-veryLightGrey">
        <div className="m-container mx-36">
          <div className="md:flex md:items-center md:justify-between md:py-9">
            <div className="md:w-[45%]">
              <div className=" py-16 md:pt-0 md:pb-5 bg-contain bg-center bg-no-repeat">
                <h2 className="text-[30px] md:text-[40px]  text-center  md:text-left font-extrabold">
                  Welcome to the {info && info.schoolShortName.toUpperCase()} Online Recruitment Service
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
                  The {info && info.schoolShortName.toUpperCase()} online recruitment service is a service set up by the
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
              The {info && info.schoolShortName.toUpperCase()} online recruitment service is a service set up by the
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
                <span className="font-semibold">Time Limit</span>: The test has a duration of {time && time} minutes. It is important to manage your time effectively to complete all the tasks within the given timeframe.
              </li>
              <li>
                <span className="font-semibold">Task Instruction</span>:
                You will be presented with a series of multiple-choice questions. Read each question carefully and select the most appropriate answer.
                Answer all the questions to the best of your ability
              </li>
              <li>
                <span className="font-semibold">Submission Deadline</span>: The test must be submitted within the given time limit.
                The system will automatically close the test at the end of the 15-minute duration.
              </li>
              <li>
                <span className="font-semibold">Technical Requirements</span>: Use a desktop or laptop computer for the best experience.
                Ensure a stable internet connection throughout the test.
                Use a compatible web browser (Chrome, Firefox, Safari, or Edge) with JavaScript enabled.
                Disable any browser extensions that may interfere with the test.
              </li>
              {/* <li>
                <span className="font-semibold">Cell Phones</span>: Cell phones
                and electronic devices are not permitted during the test. All
                electronic devices must be turned off and stored in backpacks or
                designated areas.
              </li> */}
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
          <div className="flex flex-col items-center justify-between md:flex-row pb-10">
            <div className="hidden md:block w-[45%]">
              <div>
                <h3 className="text-[25px] font-semibold text-left my-5 ">
                  You are in good company
                </h3>
              </div>
              <p className="text-center md:text-left ">
                Good Luck!
              </p>
            </div>
            <div className="flex justify-center md:w-[40%]">
              <img src={info && info.proprietorSignature} className="md:w-[100%] " alt="" />
            </div>
            <div className=" md:hidden">
              <p className="text-center md:text-left pt-8">
                Good Luck!
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

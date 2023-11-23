import React from "react";
import { Link } from "react-router-dom";
import adminImage from "../../assets/Bitmap.svg";
import exercise from "../../assets/Bitmap2.svg";
import technician from "../../assets/Bitmap3.svg";
import symbol from "../../assets/Symbol.svg";
import symbol2 from "../../assets/Symbol2.svg";
import symbol3 from "../../assets/Symbol3.svg";
import symbol4 from "../../assets/Symbol4.svg";
import image from "../../assets/element.png";
import check from "../../assets/check.svg";
import staff from "../../assets/staff.png";
import svg from "../../assets/SVG.svg";
import svg2 from "../../assets/SVG2.svg";
import svg3 from "../../assets/SVG3.svg";
import chart from "../../assets/Chart.jpg";
import happy from "../../assets/happy.png";
import SVG1 from "../../assets/SVG1.svg";
import Layer from "../../assets/Layer.svg";
import SVGg from "../../assets/SVGg.svg";
import Profile from "../../assets/Profile.svg";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" ">
        <div className="md:bg-skyBlue md:py-16">
          <div className="my-container">
          <h1 className="text-4xl font-extrabold text-center px-[10%] pb-[50px]">
            WELCOME TO ENFAVEDU RECRUITMENT PLATFORM
          </h1>
            <h1 className="text-3xl font-extrabold text-center ">
              Online School Recruitment System
            </h1>
            <p className="text-center py-3 max-w-[60ch] md:mx-auto">
              ENFAVEDU is designed to help you streamline your
              Institution&apos;s Recruitment and Employment service to ensure
              fairness and to curb the challenges facing recruitment of staff
            </p>
            <div className="flex justify-center">
              <Link to="/signup">
                <button className="bg-blue flex justify-center py-2 px-5 rounded-3xl text-white outline-none border-none">
                  Get Started for free
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="md:bg-skyBlue">
          <div className="flex flex-col md:flex-row justify-center items-center my-auto gap-8 pt-14 md:h-[550px] my-container">
            <div className="bg-grey w-[85%] h-[320px] flex flex-col items-center justify-center rounded-md">
              <img className="ml-12 mb-10 w-[160px]" src={adminImage} alt="" />
              <h4 className="text-white text-2xl font-semibold">
                Admin Exercise
              </h4>
            </div>
            <div className="bg-darkGreen w-[85%] h-[320px] flex flex-col justify-center md:self-start items-center rounded-md">
              <img className="ml-12  mb-10 w-[160px]" src={exercise} alt="" />
              <h4 className="text-white text-2xl font-semibold">
                Lecturing job Exercise
              </h4>
            </div>
            <div className="bg-cream w-[85%] h-[320px]  flex flex-col justify-center items-center rounded-md">
              <img className="ml-12  mb-10 w-[160px]" src={technician} alt="" />
              <h4 className="text-darkGreen text-2xl font-semibold">
                Technician Exercise
              </h4>
            </div>
          </div>
        </div> */}
        <div className="md:bg-skyBlue">
          <p className="text-center max-w-[35ch] mx-auto md:py-36 ">
            Over 200+ Institutions Trust & Use ENFAVEDU for Online recruitment
            exercises
          </p>
        </div>

        <div className="py-5 md:py-14 my-container md:flex md:gap-8">
          <div>
            <h3 className="text-center md:text-left font-bold text-lg">
              Why ENFAVEDU?
            </h3>
            <div className="hidden md:block">
              <h3 className="text-[25px] font-extrabold w-[18ch]">
                Why Top Institutions Choose ENFAVEDU?
              </h3>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap md:w-[60%] items-center gap-y-6 md:gap-y-0 md:gap-x-5  py-5">
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3 px-4">
              <img src={symbol} className="w-9" alt="" />
              <h5 className="text-lg md:text-xl font-semibold">Customer</h5>
              <p className="text-[14px] md:text-[15px]">
                We put our customers & their needs first
              </p>
            </div>
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3  px-3">
              <img src={symbol2} className="w-9" alt="" />
              <h5 className="text-lg md:text-xl font-semibold">
                Customer support
              </h5>
              <p className="text-[14px] md:text-[15px]">
                Excellent customer support
              </p>
            </div>
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3 px-3">
              <img src={symbol3} className="w-9" alt="" />
              <h5 className="text-lg md:text-xl font-semibold">Experience</h5>
              <p className="text-[14px] md:text-[15px]">
                Certified and Experienced software engineers
              </p>
            </div>
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3 px-4">
              <img src={symbol4} className="w-9" alt="" />
              <h5 className="text-lg md:text-xl font-semibold">Downtimes</h5>
              <p className="text-[14px] md:text-[15px]">No downtimes</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block  my-8 ">
          <h3 className="text-[25px] font-bold w-[30ch] mx-auto text-center">
            The Reliable Online Recruitment Software Designed For:
          </h3>
        </div>
        <div className="my-container">
          <h4 className="text-center md:hidden font-semibold text-xl my-4">
            Institution Administrator
          </h4>
          <div className="md:flex md:justify-center md:items-center gap-10 md:gap-16">
            <div className="flex justify-center">
              <img src={image} className="h-[350px]" alt="" />
            </div>
            <div>
              <h5 className="hidden md:block my-2 text-lg">
                Institution Administrator
              </h5>
              <p className=" md:pt-0 md:w-[40ch]">
                ENFAVEDU provides a comprehensive management system that helps
                you efficiently streamline operations of the recruitment process
                on your institution.
              </p>
              <ul className="">
                <li className="flex items-center gap-2 pb-2">
                  <img src={check} alt="" />
                  Transparency
                </li>
                <li className="flex items-center gap-2 pb-2">
                  <img src={check} alt="" />
                  Fairness
                </li>
                <li className="flex items-center gap-2 pb-2">
                  <img src={check} alt="" />
                  Increase efficiency by 100%
                </li>
                <li className="flex items-center gap-2 pb-2">
                  <img src={check} alt="" />
                  Generate reports with ease
                </li>
                <li className="flex items-center gap-2 pb-2">
                  <img src={check} alt="" />
                  Seamless recruitment process
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-container">
          <h4 className="text-center md:hidden text-lg font-semibold my-4">
            Prospective Staff
          </h4>
          <div className="md:flex md:flex-row-reverse md:justify-center md:items-center md:my-16">
            <div className="flex justify-center">
              <img src={staff} className="h-[350px]" alt="" />
            </div>
            <div className="">
              <h5 className="hidden md:block my-2 text-lg">
                Prospective Staff
              </h5>
              <p className=" md:w-[40ch]">
                ENFAVEDU provides a comprehensive management system that helps
                you seamlessly carry out your staff recruitment process.
              </p>
              <ul className="">
                <li className="flex items-center gap-2 pb-2">
                  <img src={check} alt="" />
                  TakeTest seamlessly
                </li>
                <li className="flex  gap-2 pb-2 md:w-[30ch]">
                  <img src={check} alt="" />
                  Compile results of your test swiftly and effortlessly with
                  100% accuracy
                </li>
                <li className="flex items-center gap-2 pb-2">
                  <img src={check} alt="" />
                  Fairness and Transparency
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:block bg-skyBlue py-8">
          <h3 className="text-[20px] text-center font-semibold">
            Tap into the Benefits of ENFAVEDU For Your Institution
          </h3>
          <div className="w-[70%] mx-auto py-14">
            <div className="flex justify-center gap-6 py-5">
              <div className="bg-white w-[350px] h-[250px] py-4 px-5 rounded-md">
                <img src={SVG1} className="w-8" alt="" />
                <h4 className="font-bold">Stress Free Result Compilation</h4>
                <p className="text-[14px]">
                  With ENFAVEDU, you can now have a fast, 100% accurate, and
                  effortless result compilation of all your students with
                  minimum effort on your part.
                </p>
              </div>

              <div className="bg-white  w-[350px] h-[250px]  py-4 px-5 rounded-md">
                <img src={Layer} className="w-8" alt="" />
                <h4 className="font-bold">Data Protection</h4>
                <p className="text-[14px]">
                  You do not have to worry about the frustration of losing your
                  school or prospective employee data anymore. With ENFAVEDU,
                  you can be sure that your Institution data is protected
                  forever.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <div className="bg-white w-[350px] h-[250px]  py-4 px-5 rounded-md">
                <img src={SVGg} className="w-8" alt="" />
                <h4 className="font-bold">Zero Paper Work</h4>
                <p className="text-[14px]">
                  Efficiently record, manage and analyze all prospective staff
                  information on a single platform thereby reducing workload and
                  saving time spent on paperwork
                </p>
              </div>
              <div className="bg-blue text-white w-[350px] h-[250px]  py-4 px-5 rounded-md">
                {/* <img src={SVGg} className="w-8" alt="" /> */}
                <p className="text-[14px]">
                  Embrace Productivity & Increase Your Revenue When You Use
                  ENFAVEDU
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 ">
          <h3 className="text-lg font-semibold text-center">
            We are Trusted By:
          </h3>
          <div className="flex flex-col md:flex-row sm:w-[100%] lg:w-[70%] lg:mx-auto md:flex-wrap md:gap-x-5 md:justify-center items-center gap-y-6 my-7">
            <div className="border border-lightBlue flex flex-col items-center gap-y-2 py-10 px-3 w-[85%] max-w-[350px] md:h-[200px] rounded-e-lg">
              <img src={svg} alt="" />
              <p className="text-3xl font-extrabold">376</p>
              <p className="text-center">
                Institutions use ENFAVEDU across Africa
              </p>
            </div>
            <div className="border border-lightBlue flex flex-col items-center gap-y-2 py-10 px-3 w-[85%] max-w-[350px] md:h-[200px] rounded-e-lg">
              <img src={svg2} alt="" />
              <p className="text-3xl font-extrabold">200+</p>
              <p className="text-center">
                Prospective staff get their results in a shortest possible time
              </p>
            </div>
            <div className="border border-lightBlue flex flex-col items-center gap-y-2 py-10 px-3 w-[85%] max-w-[350px] md:h-[200px] rounded-e-lg">
              <img src={svg3} alt="" />
              <p className="text-3xl font-extrabold">18</p>
              <p className="text-center">Countries presence</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] mx-auto py-6 hidden md:block">
          <h3 className="font-bold drop-shadow-2xl text-2xl text-center">
            Testimonials
          </h3>
          <p className="text-center text-[14px] py-2">
            Don&apos;t just take our word for it. See what our satisfied
            customers have to say
          </p>
          <p className="text-center text-[14px] py-2">
            With ENFAVEDU, you always have access to your data and it helps you
            analyze your data. I recommend ENFAVEDU to other schools that want
            to manage their data
          </p>
          <div className="flex justify-center items-center gap-3">
            <div>
              <img src={Profile} alt="" />
            </div>
            <div>
              <h3>Linda Osifor</h3>
              <p>Proprietress</p>
            </div>
          </div>
        </div>
        <div className="bg-skyBlue rounded-lg pt-3 mb-12  md:mt-24 md:mb-10  px-4 md:flex shadow-lg my-container">
          <div className="md:w-1/2 flex flex-col gap-y-5 justify-center ">
            <h4 className="text-lg font-semibold text-start">Join the Train</h4>
            <p>
              With tools to make every part of your process more human and a
              support team always available to help you, we invite you to become
              one of the schools we are committed to, starting with a FREE
              account.
            </p>
            <Link to="/Signup">
              <button className="bg-blue text-white py-3 w-[200px] rounded-3xl my-3">
                Get Started for Free
              </button>
            </Link>
          </div>
          <div className="hidden md:block w-1/2 mt-[-100px]">
            <img src={happy} className="h-[350px]" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

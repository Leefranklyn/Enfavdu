import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
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
import chart from "../../assets/Chart.jpg"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" ">
        <div className="md:bg-skyBlue md:py-16">
          <div className="my-container">
            <h1 className="text-3xl font-extrabold text-center ">
              Online School Recruitment System
            </h1>
            <p className="text-center py-3 max-w-[60ch] md:mx-auto">
              ENFAVEDU is designed to help you streamline your Institution&apos;s
              Recruitment and Employment service to ensure fairness and to curb
              the challenges facing recruitment of staff
            </p>
            <div className="flex justify-center">
              <button className="bg-blue flex justify-center py-2 px-7 rounded-md text-white outline-none border-none">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="md:bg-skyBlue">
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
        </div>
        <div className="md:bg-skyBlue">
          <p className="text-center max-w-[35ch] mx-auto md:py-36 ">
            Over 200+ Institutions Trust & Use ENFAVEDU for Online recruitment
            exercises
          </p>
        </div>

        <div className="py-5 my-container md:flex md:gap-8">
          <div>
            <h3 className="text-center md:text-left font-bold text-lg">Why ENFAVEDU?</h3>
            <div className="hidden md:block">
              <h3 className="text-[25px] font-extrabold w-[18ch]">Why Top Institutions Choose ENFAVEDU?</h3>
              <img src={chart} alt="" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap md:w-[60%] items-center gap-y-6 md:gap-y-0 md:gap-x-5  py-5">
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3 px-4">
              <img src={symbol} className="w-9" alt="" />
              <h5 className="text-xl font-semibold">Customer</h5>
              <p className="text-[18px] md:text-[15px]">
                We put our customers & their needs first
              </p>
            </div>
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3  px-4">
              <img src={symbol2} className="w-9" alt="" />
              <h5 className="text-xl font-semibold">Customer support</h5>
              <p className="text-[18px] md:text-[15px]">Excellent customer support</p>
            </div>
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3 px-4">
              <img src={symbol3} className="w-9" alt="" />
              <h5 className="text-xl font-semibold">Experience</h5>
              <p className="text-[18px] md:text-[15px]">
                Certified and Experienced software engineers
              </p>
            </div>
            <div className="border border-borderBlue rounded-md w-[80%] max-w-[250px] h-[150px] flex flex-col gap-1 py-3 px-4">
              <img src={symbol4} className="w-9" alt="" />
              <h5 className="text-xl font-semibold">Downtimes</h5>
              <p className="text-[18px] md:text-[15px]">No downtimes</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-center font-semibold text-xl my-4">
            Institution Administrator
          </h4>
          <div className="flex justify-center">
            <img src={image} alt="" />
          </div>
          <p className="pt-7">
            ENFAVEDU provides a comprehensive management system that helps you
            efficiently streamline operations of the recruitment process on your
            institution.
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
        <div>
          <h4 className="text-center text-lg font-semibold my-4">
            Prospective Staff
          </h4>
          <div className="flex justify-center">
            <img src={staff} alt="" />
          </div>
          <p>
            ENFAVEDU provides a comprehensive management system that helps you
            seamlessly carry out your staff recruitment process.
          </p>
          <ul className="">
            <li className="flex items-center gap-2 pb-2">
              <img src={check} alt="" />
              TakeTest seamlessly
            </li>
            <li className="flex  gap-2 pb-2">
              <img src={check} alt="" />
              Compile results of your test swiftly and effortlessly with 100%
              accuracy
            </li>
            <li className="flex items-center gap-2 pb-2">
              <img src={check} alt="" />
              Fairness and Transparency
            </li>
          </ul>
        </div>
        <div className="my-5 ">
          <h3 className="text-lg font-semibold text-center">
            We are Trusted By:
          </h3>
          <div className="flex flex-col items-center gap-y-6 my-7">
            <div className="border border-lightBlue flex flex-col items-center gap-y-2 py-10 px-3 w-[85%] rounded-e-lg">
              <img src={svg} alt="" />
              <p className="text-3xl font-extrabold">376</p>
              <p className="text-center">
                Institutions use ENFAVEDU across Africa
              </p>
            </div>
            <div className="border border-lightBlue flex flex-col items-center gap-y-2 py-10 px-3 w-[85%] rounded-e-lg">
              <img src={svg2} alt="" />
              <p className="text-3xl font-extrabold">200+</p>
              <p className="text-center">
                Prospective staff get their results in a shortest possible time
              </p>
            </div>
            <div className="border border-lightBlue flex flex-col items-center gap-y-2 py-10 px-3 w-[85%] rounded-e-lg">
              <img src={svg3} alt="" />
              <p className="text-3xl font-extrabold">18</p>
              <p className="text-center">Countries presence</p>
            </div>
          </div>
        </div>
        <div className="bg-skyBlue rounded-lg pt-3 my-6 px-4">
          <h4 className="text-lg font-semibold">Join the Train</h4>
          <p>
            With tools to make every part of your process more human and a
            support team always available to help you, we invite you to become
            one of the schools we are committed to, starting with a FREE
            account.
          </p>
          <button className="bg-blue text-white py-3 px-4 rounded-3xl my-3">
            Get Started for Free
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

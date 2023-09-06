import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg"

const UserFooter = () => {
  return (
    <div className="bg-black md:bg-footerGrey px-10 ">
      <div className="my-container">
        <div className="flex flex-col md:flex-row text-center md:text-start gap-x-14  text-white pt-16  pb-12 md:pb-36 px-6 gap-y-4">
          <div>
            <h5 className="font-semibold text-lg mb-4">Mobile App</h5>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Live Share</a>
              </li>
              <li>
                <a href="">Video Record</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-4">Community</h5>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="">Featured artists</a>
              </li>
              <li>
                <a href="">Live Portal</a>
              </li>
              <li>
                <a href="">Featured Artist</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-4">Company</h5>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href=""></a>Contact us
              </li>
              <li>
                <a href=""></a>History
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-center gap-3">
              <div  className="bg-socials w-10 h-10 md:w-12 md:h-12 rounded-full  flex justify-center items-center">
                <a href="">
                  <img src={facebook} className="w-5 h-5" alt="" />
                </a>
              </div>
              <div className="bg-socials w-10 h-10 md:w-12 md:h-12 rounded-full  flex justify-center items-center">
                <a href="">
                  <img src={twitter} className="w-5" alt="" />
                </a>
              </div>
              <div className="bg-socials w-10 h-10 md:w-12 md:h-12 rounded-full  flex justify-center items-center">
                <a href="">
                  <img src={instagram} className="w-5" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="border-t-[1px] border-lightGrey pb-10 text-white text-sm">
          © Photo, Inc. 2023. We love our users!
        </p>
      </div>
    </div>
  );
};

export default UserFooter;

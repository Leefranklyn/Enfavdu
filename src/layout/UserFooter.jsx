import React from "react";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg"

const UserFooter = () => {
  return (
    <div className="bg-black md:bg-white px-10 ">
      <div className="my-container">
        <div className="flex flex-col md:flex-row text-center md:text-start gap-x-14  text-white md:text-black pt-5  pb-12 md:pb-5 px-6 gap-y-4">
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
          <div className=" md:hidden">
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
        <div className="md:flex md:justify-between md:items-center md:mt-4 md:mb-6 border-t-[1px] border-lightGrey  md:border-black  pb-10 md:pb-0">
          <p className=" text-white md:text-black text-sm pt-4 md:pt-0
          ">
            © Photo, Inc. 2023. We love our users!
          </p>
          <div className="hidden md:flex  items-center gap-3  md:pt-2">
               <p className="text-sm">Follow us:</p>
                <div  className="bg-socials w-10 h-10 md:w-8 md:h-8 rounded-full  flex justify-center items-center">
                  <a href="">
                    <img src={facebook} className="w-5 md:w-4 h-5 md:h-4" alt="" />
                  </a>
                </div>
                <div className="bg-socials w-10 h- md:w-8 md:h-8 rounded-full  flex justify-center items-center">
                  <a href="">
                    <img src={twitter} className="w-5 md:w-4 h-5 md:h-4" alt="" />
                  </a>
                </div>
                <div className="bg-socials w-10 h-10  md:w-8 md:h-8 rounded-full  flex justify-center items-center">
                  <a href="">
                    <img src={instagram} className="w-5 md:w-4 h-5 md:h-4" alt="" />
                  </a>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;

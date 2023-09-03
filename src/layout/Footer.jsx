import React from "react";

const Footer = () => {
  return (
    <div className="bg-black md:bg-footerGrey px-10">
      <div className="my-container">
        <div className="flex flex-col md:flex-row text-center md:text-start gap-x-14  text-white pt-16  pb-12 md:pb-36 px-6 gap-y-4">
          <div className="hidden md:block w-[40%]">
            <p className="text-left">ENFAVEDU is a product of FlexiENFAV Edusoft Limited </p>
            <p className="text-left">Abuja: No.18 Garki Street,Abuja Nigeria</p>
            <p className="text-left">Kaduna: No. 37 Ali Akilu road kadduna, Kaduna state, Nigeria</p>
            <a  href="/">info@ENFAVEDU.com</a>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-4">Resources</h5>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
              <li>
                <a href="">Site Map</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-4">Legal</h5>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
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
        </div>
        <p className="border-t-[1px] border-lightGrey pb-10 text-white">
        © 2023 ENFAVEDU. All rights reserved.
      </p>
      </div>
     
    </div>
  );
};

export default Footer;

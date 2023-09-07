import React from "react";
import UserNav from "../../../layout/UserNav";
import UserFooter from "../../../layout/UserFooter";

const Contact = () => {
  return (
    <>
      <UserNav />
      <div className=" h-[100%] flex justify-center items-center my-14 md:py-10 lg:py-16  md:bg-contact md:bg-no-repeat md:bg-center md:bg-contain">
        <div className="w-[90%] md:w-[350px] ">
          <h3 className="text-[25px] font-extrabold text-center z-[-10]">Contact Us</h3>
          <p className="text-center">Some contact information on how to reach out</p>
          <div className="flex flex-col gap-3 my-6">
            <input type="text" name="" id="" placeholder="Name" className="w-[90%]  p-2.5 block mx-auto text-sm border border-inputGray outline-none rounded-sm" />
            <input type="text" name="" id="" placeholder="Email" className="w-[90%]  p-2.5 block mx-auto text-sm border border-inputGray outline-none rounded-sm"   />
            <textarea
              id="message"
              rows="5"
              class="block p-2.5 w-[90%] mx-auto text-sm  rounded-sm border border-inputGray outline-none"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-center"><button className="bg-blue text-white px-10 py-3 md:w-[300px] rounded-md">Send Message</button></div>
        </div>
      </div>
      <UserFooter/>
    </>
  );
};

export default Contact;

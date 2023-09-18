import React from "react";
import { useState } from "react";
import Personalinfo from "./Personalinfo";
import Schoolinfo from "./Schoolinfo";
import FormContext from "../../../context/FormContext";
import right from "../../../assets/right.svg"

const SignUp = ({ path, setPath }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    shortName: "",
    country: "",
    url: "",
    schoolWebsite: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [page, setPage] = useState(0);
  const formTitles = ["About School", "About You"];
  const pageDisplay = () => {
    if (page === 0) {
      return <Schoolinfo />;
    } else if (page === 1) {
      return <Personalinfo />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* <Navbar/> */}
      <FormContext.Provider value={{ formData, setFormData, path, setPath }}>
        <div className="bg-lightGrey pt-10 pb-14 min-h-[100vh] flex justify-center items-center">
          <div className="my-container md:flex md:justify-between">
            <div>
              <div className="flex relative">
                <div className="border-gray border-[1px] w-[50px] h-[50px] rounded-full bg-white absolute flex justify-center items-center">
                  <div className="bg-gray w-[20px] h-[20px] rounded-full"></div>
                </div>
                <div className="border-gray border-[1px] rounded-3xl py-3 px-8 bg-white text-blue flex  items-center shadow-md">
                  <h2 className="relative ml-7">School SignUp</h2>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="border-gray border-[1px] w-[150px] h-[40px] md:w-[40px] md:h-[150px] rounded-3xl  px-4 my-3 bg-white text-blue  shadow-md flex md:flex-col  md:justify-center
                 items-center">
                  <div className={`${page === 0 ? "w-5 h-5  rounded-full  border-blue  border-t  border-[1px] border-dashed flex md:flex-col justify-center items-center" : ""}`}>
                    <div className="bg-blue w-3 h-3 rounded-full "></div>
                  </div>
                  <span className="h-[1px] md:h-16 md:w-[1px] w-16 border-t bg-blue border-dashed"></span>
                  <div className={`${page === 1 ? "w-5 h-5  rounded-full  border-blue  border-t  border-[1px] border-dashed flex justify-center items-center" : ""}`}>
                    <div className="bg-blue w-3 h-3 rounded-full "></div>
                  </div>
                </div>
                <div className="hidden md:flex  flex-col justify-between gap-14">
                  <h3 className="font-extrabold">{page === 0 ? "About School" : "About You"}</h3>
                  <h3>{page === 0 ? "About You" : "About School"}</h3>
                </div>
              </div>
            </div>
            <div className="md:w-[70%]">
              <div>
                <h1 className="font-bold"> {formTitles[page]}</h1>
                <div>{pageDisplay()}</div>
              </div>
              <div className="flex justify-center md:justify-end gap-9 md:gap-5 items-center py-4 ">
                {page === 0 ? (
                  ""
                ) : (
                  <button
                    className="py-2 px-9 border-black border-[1px]  text-black rounded-md "
                    disabled={page === 0}
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Previous
                  </button>
                )}
                {/* <button onClick={handleSubmit} className="py-2 px-9 bg-orange text-white rounded-md">Submit</button> */}
                <button
                  className="py-2 px-9 bg-blue text-white rounded-md flex items-center gap-6"
                  onClick={(e) => {
                    if (page === formTitles.length - 1) {
                      e.preventDefault();
                      console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === formTitles.length - 1 ? "Finish" : " Next"}
                  {page ==- 0 ? <img src={right} alt="" /> : ""}
                </button>
              </div>
            </div>
          </div>
        </div>
      </FormContext.Provider>
    </>
  );
};

export default SignUp;

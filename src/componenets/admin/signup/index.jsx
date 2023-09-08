import React from "react";
import { useState } from "react";
import Personalinfo from "./Personalinfo";
import Schoolinfo from "./Schoolinfo";

const SignUp = () => {
  const [page, setPage] = useState(0);
  const formTitles = ["About School", "About You"];
  const pageDisplay = () => {
    if (page === 0) {
      return <Schoolinfo />;
    } else if (page === 1) {
      return <Personalinfo />;
    }
  };
  return (
    <div className="bg-lightGrey pt-10 pb-14 min-h-[100vh] flex justify-center items-center">
      <div className="my-container md:flex md:justify-between">
        <div>
          <div className="flex relative">
            <div className="border-gray border-[1px] w-[50px] h-[50px] rounded-full bg-white absolute flex justify-center items-center">
              <div className="bg-gray w-[20px] h-[20px] rounded-full"></div>
            </div>
            <div className="border-gray border-[1px] rounded-3xl py-3 px-8 bg-white text-blue flex items-center shadow-md">
              <h2 className="relative ml-7">School SignUp</h2>
            </div>
          </div>
          <div>
            <div className="border-gray border-[1px] w-[150px] rounded-3xl py-3 my-3 bg-white text-blue flex items-center shadow-md">
              <div></div>
            </div>
          </div>
        </div>
        <div className="md:w-[70%]">
          <div>
            <h1 className="font-bold"> {formTitles[page]}</h1>
            <div>{pageDisplay()}</div>
          </div>
          <div className="flex justify-end gap-5 items-center py-4 ">
            {page === 0 ? (
              ""
            ) : (
              <button
                className="py-2 px-9 bg-blue text-white rounded-md "
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
            )}
            {/* <button onClick={handleSubmit} className="py-2 px-9 bg-orange text-white rounded-md">Submit</button> */}
            <button
              className="py-2 px-9 bg-blue text-white rounded-md"
              onClick={(e) => {
                if (page === formTitles.length - 1) {
                  e.preventDefault();
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === formTitles.length - 1 ? "Finish" : " Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

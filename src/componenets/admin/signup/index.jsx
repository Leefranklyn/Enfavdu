import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";
import { BeatLoader} from "react-spinners";
import Personalinfo from "./Personalinfo";
import Schoolinfo from "./Schoolinfo";
import CompleteSignUp from "./CompleteSignUp";
import FormContext from "../../../context/FormContext";
import right from "../../../assets/right.svg";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = ({ path, setPath }) => {
  const navigate = useNavigate();
  const [routePath,setRoutePath] = useState("")
  const [id, setId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolShortName: "",
    country: "",
    schoolUrl: "",
    website: "",
    adminFirstName: "",
    adminLastName: "",
    adminEmail: "",
    adminPhone: "",
    adminPassword: "",
  });

  const [page, setPage] = useState(0);
  const formTitles = ["About School (All fields must be filled)", "Admin Information (All fields must be filled)"];
  const pageDisplay = () => {
    if (page === 0) {
      return <Schoolinfo path={path} setPath={setPath} routePath={routePath} setRoutePath={setRoutePath} />;
    } else if (page === 1) {
      return <Personalinfo />;
    }
  };

  async function handleSubmit(event) {
    // event.preventDefault(); // Prevent the form from submitting in the default way

    setLoading(true);
    console.log(path);
    
    try {
      setMessage(false)
      const response = await fetch(
        "https://testmanagement2.onrender.com/api/institution/signup",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        const adminId = data.data._id;
        setId(adminId);
        console.log(adminId);
        console.log(id);
        console.log(window.location.href);
        setIsSubmitted(true);
        setMessage(false);
        setLoading(false);
      } else {
        const errorData = data || {};
        setLoading(false);
        setMessage("true");
      }
    } catch (error) {
      setLoading(false);
      setMessage(true);
      console.error(error);
    }
  }

  return (
    <>
      {/* <Navbar/> */}
      <FormContext.Provider value={{ formData, setFormData, path, setPath }}>
        {isSubmitted && <CompleteSignUp formData={formData} id={id} />}
        {loading ? (
          <div className="fixed h-[100vh] w-[100%] z-40 top-0 left-0 bg-overlay flex justify-center items-center">
            <BeatLoader
              css={css`
                display: block;
                margin: 0 auto;
              `}
              size={24}
              color={"#FFFFFF"}
              loading={loading}
            />
          </div>
        ) : (
          ""
        )}
        <div
          className={` ${
            isSubmitted
              ? "hidden"
              : "bg-lightGrey pt-10 pb-14 min-h-[100vh] flex justify-center items-center"
          }`}
        >
          <div className="my-container md:flex md:justify-between">
            <div>
              {/* <div className="flex relative">
                <div className="border-gray border-[1px] w-[50px] h-[50px] rounded-full bg-white absolute flex justify-center items-center">
                  <div className="bg-gray w-[20px] h-[20px] rounded-full"></div>
                </div>
                <div className="border-gray border-[1px] rounded-3xl py-3 px-8 bg-white text-blue flex  items-center shadow-md">
                  <h2 className="relative ml-7">School SignUp</h2>
                </div>
              </div> */}
              {/* <div className="flex items-center gap-4">
                <div
                  className="border-gray border-[1px] w-[150px] h-[40px] md:w-[40px] md:h-[150px] rounded-3xl  px-4 my-3 bg-white text-blue  shadow-md flex md:flex-col  md:justify-center
                 items-center"
                >
                  <div
                    className={`${
                      page === 0
                        ? "w-5 h-5  rounded-full  border-blue  border-t  border-[1px] border-dashed flex md:flex-col justify-center items-center"
                        : ""
                    }`}
                  >
                    <div className="bg-blue w-3 h-3 rounded-full "></div>
                  </div>
                  <span className="h-[1px] md:h-16 md:w-[1px] w-16 border-t bg-blue border-dashed"></span>
                  <div
                    className={`${
                      page === 1
                        ? "w-5 h-5  rounded-full  border-blue  border-t  border-[1px] border-dashed flex justify-center items-center"
                        : ""
                    }`}
                  >
                    <div className="bg-blue w-3 h-3 rounded-full "></div>
                  </div>
                </div>
                <div className="hidden md:flex  flex-col justify-between gap-14">
                  <h3 className="font-extrabold">
                    {page === 0 ? "About School" : "About You"}
                  </h3>
                  <h3>{page === 0 ? "About You" : "About School"}</h3>
                </div>
              </div> */}
            </div>
            <div className="md:w-[70%]">
              <div>
                <h1 className="font-bold"> {formTitles[page]}</h1>
                <div>{pageDisplay()}</div>
              </div>
              {message && (
                <div>
                  <p className="text-red">An error occurred.Please try again</p>
                </div>
              )}
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
                  onClick={() => {
                    if (page === formTitles.length - 1) {
                      handleSubmit();
                      console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === formTitles.length - 1 ? "Finish" : " Next"}
                  {page === 0 ? <img src={right} alt="" /> : ""}
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

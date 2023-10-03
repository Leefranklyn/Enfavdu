import React, { useRef, useState, useContext } from "react";
import LoginContext from "../../../context/LoginContext";
import Header from "./Header";

const EditProfile = () => {
  const { userId } = useContext(LoginContext);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [cover, setCover] = useState("");
  const [cover2, setCover2] = useState("");
  const [cover3, setCover3] = useState("");
  const [proprietorSignature, setProprietorSignature] = useState("");

  const handleCoverInput = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleCoverInput2 = (e) => {
    e.preventDefault();
    ref2.current.click();
  };

  const handleCoverInput3 = (e) => {
    e.preventDefault();
    ref3.current.click();
  };

  const handleFileInput2 = (e) => {
    const file = e.target.files[0].name;
    console.log(file);
    setForm({ ...form, profilePhoto: file });
  };

  const handleFileInput3 = (e) => {
    const file = e.target.files[0].name;
    console.log(file);
    setForm({ ...form, profilePhoto: file });
  };

  const jwt = localStorage.getItem("jwt");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://testmanagement.onrender.com/api/admin/proprietorSignature/upload/${userId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({proprietorSignature}), // Send user credentials
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        // navigate('/user/:path')
        // Successful login, perform necessary actions (e.g., redirect)
      } else {
        // Handle authentication errors (e.g., show error message)
      }
    } catch (error) {
      console.error(error);
      // Handle network errors
    }
  };

  return (
    <div>
      <Header />
      <div className="my-container py-6 min-h-[100vh] bg-lightGrey">
        <div className="flex justify-center items-center">
          <button className=" bg-blue text-white py-3 px-5 text-sm rounded-md">
            Edit Profile
          </button>
        </div>
        <div>
          <div className="border-[1px] border-dashed w-[200px] h-[200px] flex flex-col justify-center items-center">
            <div className="border-[1px] border-grey w-[100px] h-[100px]"></div>
            <div className="text-xs mt-3">
              <p className="text-center">
                Drag and drop your image file here or
              </p>
              <div className="flex justify-center">
                <button
                onClick={handleCoverInput}
                  className="bg-blue text-white py-1 px-4 rounded-md "
                >
                  Browse file
                </button>
              </div>
            </div>
          </div>
          <input
            type="file"
            name=""
            id=""
            ref={ref}
            value={cover}
            className="hidden"
            onClick={(e) => setProprietorSignature(e.target.files[0])}
          />
        </div>
        <div>
        <div className="border-[1px] border-dashed w-[200px] h-[200px] flex flex-col justify-center items-center">
            <div className="border-[1px] border-grey w-[100px] h-[100px]"></div>
            <div className="text-xs mt-3">
              <p className="text-center">
                Drag and drop your image file here or
              </p>
              <div className="flex justify-center">
                <button
                onClick={handleCoverInput}
                  className="bg-blue text-white py-1 px-4 rounded-md "
                >
                  Browse file
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="border-[1px] border-dashed w-[200px] h-[200px] flex flex-col justify-center items-center">
            <div className="border-[1px] border-grey w-[100px] h-[100px]"></div>
            <div className="text-xs mt-3">
              <p className="text-center">
                Drag and drop your image file here or
              </p>
              <div className="flex justify-center">
                <button
                onClick={handleCoverInput}
                  className="bg-blue text-white py-1 px-4 rounded-md "
                >
                  Browse file
                </button>
              </div>
            </div>
          </div>
          <input
            type="file"
            name="profilePhoto"
            id=""
            ref={ref3}
            value={cover}
            className="hidden"
            // onChange={handleFileInput}
          />
        </div>
        <fieldset>
        <label className="font-bold text-[13px]">
          GENDER<span className="text-red">*</span>
        </label>
        <div className="flex gap-3">
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="gender"
              value="MALE"
              // checked={formData.adminGender === "MALE"}
              // onChange={(e) => {
              //   setFormData({ ...formData, adminGender: e.target.value });
              // }}
            />
            <label>MALE</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="gender"
              id=""
              value="FEMALE"
              // checked={formData.adminGender === "FEMALE"}
              // onChange={(e) => {
              //   setFormData({ ...formData, adminGender: e.target.value });
              // }}
            />
            <label>FEMALE</label>
          </div>
        </div>
      </fieldset>
      <div>
         <div className='md:1/2 '>
              <label className="font-semibold text-[12px]">
                FIRST NAME
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolName"
              //   value={form.schoolName}
              //   onChange={handleInputChange}
              />
            </div>
            <div className='md:1/2 '>
              <label className="font-semibold text-[12px]">
                LAST NAME
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolName"
              //   value={form.schoolName}
              //   onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
                PHONE NUMBER
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolMotto}
              //   onChange={(e) =>
              //     setForm({ ...form, schoolMotto: e.target.value })
              //   }
              />
            </div>
              <label className="font-semibold text-[12px]">
                EMAIL
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolType}
              //   onChange={(e) =>
              //     setForm({ ...form, schoolType: e.target.value })
              //   }
              />
            </div>
           
            <div>
              <label className="font-semibold text-[12px]">
              SCHOOL NAME
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolAddress}
              //   onChange={(e) =>
              //     setForm({ ...form, schoolAddress: e.target.value })
              //   }
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
              SCHOOL EMAIL
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolMotto}
              //   onChange={(e) =>
              //     setForm({ ...form, schoolMotto: e.target.value })
              //   }
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
              SCHOOL WEBSITE
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolMotto}
              //   onChange={(e) =>
              //     setForm({ ...form, schoolMotto: e.target.value })
              //   }
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
              SCHOOL PHONE NUMBER
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolMotto}
              //   onChange={(e) =>
              //     setForm({ ...form, schoolMotto: e.target.value })
              //   }
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
              SCHOOL ADDRESS
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolMotto}
              //   onChange={(e) =>
              //     setForm({ ...form, schoolMotto: e.target.value })
              //   }
              />
            </div>
            
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EditProfile;

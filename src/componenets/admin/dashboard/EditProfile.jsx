import React, { useRef, useState, useContext } from "react";
import LoginContext from "../../../context/LoginContext";
import Header from "./Header";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { userId } = useContext(LoginContext);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [cover, setCover] = useState("");
  const [cover2, setCover2] = useState("");
  const [cover3, setCover3] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePreview2, setImagePreview2] = useState(null);
  const [imagePreview3, setImagePreview3] = useState(null);
  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState(false);
  const [form, setForm] = useState({
    adminGender: "",
    adminFirstName: "",
    adminLastName: "",
    adminPhone: "",
    adminEmail: "",
    schoolName: "",
    schoolContactEmail: "",
    website: "",
    schoolContactPhone: "",
    schoolAddress: "",
    adminDateOfBirth: "",
    adminProfilePhoto: "",
    schoolLogo: "",
    proprietorSignature: "",
  });

  const handleDate = (e) => {
    const inputDate = e.target.value;

    if (inputDate) {
      // Split the input date string into parts
      const parts = inputDate.split("-");

      if (parts.length === 3) {
        // Parse the date parts into a Date object
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed
        const day = parseInt(parts[2], 10);

        const selectedDate = new Date(year, month, day);

        // Format the date as "yyyy-MM-dd"
        const formattedDateString = `${selectedDate.getFullYear()}-${(
          selectedDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;

        setForm({ ...form, adminDateOfBirth: formattedDateString });
      } else {
        console.error("Invalid date format");
        setFormattedDate("");
      }
    } else {
      setFormattedDate("");
    }
  };

  // Assuming you have a function to make a POST request
  const handleSendDate = () => {
    if (formattedDate) {
      // Make the POST request with formattedDate
      console.log("Sending POST request with formatted date:", formattedDate);
    } else {
      console.warn("No date selected");
    }
  };

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
  const handleFileInput = (e) => {
    // setForm({ ...form, adminProfilePhoto: e.target.files[0] });
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("api_key", "148857165459491");
    formData.append("upload_preset", "p9rngv4l");

    fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const url = data.url;
        setForm({ ...form, adminProfilePhoto: url });
        // Handle the response data
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  const handleFileInput2 = (e) => {
    // setForm({ ...form, schoolLogo: e.target.files[0] });
    const file = e.target.files[0];
    setImagePreview2(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("api_key", "148857165459491");
    formData.append("upload_preset", "p9rngv4l");

    fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const url = data.url;
        setForm({ ...form, schoolLogo: url });
        // Handle the response data
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  const handleFileInput3 = (e) => {
    // setForm({ ...form, proprietorSignature: e.target.files[0] });
    const file = e.target.files[0];
    setImagePreview3(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("api_key", "148857165459491");
    formData.append("upload_preset", "p9rngv4l");

    fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const url = data.url;
        console.log(data);
        console.log(data.url)
        setForm({ ...form, proprietorSignature: url });
        // Handle the response data
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  const handleForm = async () => {
    console.log(form);
    try {
      setMessage(false);
      setLoading(true);
      const response = await fetch(
        `https://testmanagement.onrender.com/api/admin/update/${userId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form), // Send user credentials
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setLoading(false);
        setMessage(false);
        navigate("/dashboard")
        // navigate('/user/:path')
        // Successful login, perform necessary actions (e.g., redirect)
      } else {
        setLoading(false);
        setMessage(true);
        // Handle authentication errors (e.g., show error message)
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setMessage(true);
      // Handle network errors
    }
  };

  return (
    <div>
      <Header />
      <div className="my-container py-6 min-h-[100vh] bg-lightGrey">
        <div className="flex justify-center md:hidden items-center">
          <button className=" bg-blue text-white py-3 px-5 text-sm rounded-md">
            Edit Profile
          </button>
        </div>
        <div className="md:flex">
          <div className="flex flex-col items-center my-6 md:my-0 gap-3 md:w-[30%]">
            <div>
              <div className="border-[1px] border-dashed w-[200px] h-[200px] flex flex-col justify-center items-center">
                <div>
                  <p className="text-[10px] pb-2">Change Admin Photo</p>
                </div>
                <div className="border-[1px] border-grey w-[100px] h-[100px] flex justify-center items-center">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      className="w-[100] h-[100] object-contain"
                      alt="Image Preview"
                    />
                  )}
                </div>
                <div className="text-xs mt-3">
                  <p className="text-center text-[10px]">
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
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
            <div>
              <div className="border-[1px] border-dashed w-[200px] h-[200px] flex flex-col justify-center items-center">
                <div>
                  <p className="text-[10px] pb-2">Change School Badge</p>
                </div>
                <div className="border-[1px] border-grey w-[100px] h-[100px] flex justify-center items-center">
                  {imagePreview2 && (
                    <img
                      src={imagePreview2}
                      className="w-[100] h-[100] object-contain"
                      alt="Image Preview"
                    />
                  )}
                </div>
                <div className="text-xs mt-3">
                  <p className="text-center text-[10px]">
                    Drag and drop your image file here or
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={handleCoverInput2}
                      className="bg-blue text-white py-1 px-4 rounded-md "
                    >
                      Browse file
                    </button>
                  </div>
                </div>
              </div>
              <input
                type="file"
                name="schoolLogo"
                id=""
                className="hidden"
                ref={ref2}
                value={cover2}
                onChange={handleFileInput2}
              />
            </div>
            <div></div>
            <div className="border-[1px] border-dashed w-[200px] h-[200px] flex flex-col justify-center items-center">
              <div>
                <p className="text-[10px] pb-2">
                  Change School Proprietor’s Signature
                </p>
              </div>
              <div className="border-[1px] border-grey w-[100px] h-[100px] flex justify-center items-center">
              {imagePreview3 && (
                    <img src={imagePreview3}  className="w-[100] h-[100] object-contain" alt="Image Preview" />
                  )}
              </div>
              <div className="text-xs mt-3">
                <p className="text-center text-[10px]">
                  Drag and drop your image file here or
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={handleCoverInput3}
                    className="bg-blue text-white py-1 px-4 rounded-md "
                  >
                    Browse file
                  </button>
                </div>
              </div>
            </div>
            <input
              type="file"
              name="proprietorSignature"
              id=""
              ref={ref3}
              value={cover3}
              className="hidden"
              onChange={handleFileInput3}
            />
          </div>
          <div className="md:w-[70%]">
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
                    checked={form.adminGender === "MALE"}
                    onChange={(e) => {
                      setForm({ ...form, adminGender: e.target.value });
                    }}
                  />
                  <label>MALE</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    value="FEMALE"
                    checked={form.adminGender === "FEMALE"}
                    onChange={(e) => {
                      setForm({ ...form, adminGender: e.target.value });
                    }}
                  />
                  <label>FEMALE</label>
                </div>
              </div>
            </fieldset>
            <div>
              <div className="">
                <label className="font-semibold text-[12px]">
                  DATE OF BIRTH
                </label>
                <input
                  type="date"
                  className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                  name="adminDateOfBirth"
                  value={form.adminDateOfBirth}
                  onChange={handleDate}
                />
              </div>
            </div>
            <div>
              <div className="md:flex gap-6">
                <div className="">
                  <label className="font-semibold text-[12px]">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                    name="adminFirstName"
                    value={form.adminFirstName}
                    onChange={(e) => {
                      setForm({ ...form, adminFirstName: e.target.value });
                    }}
                  />
                </div>
                <div className="md:1/2 ">
                  <label className="font-semibold text-[12px]">LAST NAME</label>
                  <input
                    type="text"
                    className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                    name="adminLastName"
                    value={form.adminLastName}
                    onChange={(e) => {
                      setForm({ ...form, adminLastName: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="md:flex gap-6">
                <div className="md:1/2">
                  <label className="font-semibold text-[12px]">
                    PHONE NUMBER
                  </label>
                  <input
                    type="text"
                    name="adminPhone"
                    className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                    value={form.adminPhone}
                    onChange={(e) =>
                      setForm({ ...form, adminPhone: e.target.value })
                    }
                  />
                </div>
                <div className="md:1/2">
                  <label className="font-semibold text-[12px]">EMAIL</label>
                  <input
                    type="text"
                    name="adminName"
                    className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                    value={form.adminEmail}
                    onChange={(e) =>
                      setForm({ ...form, adminEmail: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="md:flex gap-6">
              <div>
                <label className="font-semibold text-[12px]">SCHOOL NAME</label>
                <input
                  type="text"
                  name="schoolName"
                  className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                  value={form.schoolName}
                  onChange={(e) =>
                    setForm({ ...form, schoolName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="font-semibold text-[12px]">
                  SCHOOL EMAIL
                </label>
                <input
                  type="text"
                  name="schoolContactEmail"
                  className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                  value={form.schoolContactEmail}
                  onChange={(e) =>
                    setForm({ ...form, schoolContactEmail: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div>
                <label className="font-semibold text-[12px]">
                  SCHOOL WEBSITE
                </label>
                <input
                  type="text"
                  name="website"
                  className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="font-semibold text-[12px]">
                  SCHOOL PHONE NUMBER
                </label>
                <input
                  type="text"
                  name="schoolContactPhone"
                  className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                  value={form.schoolContactPhone}
                  onChange={(e) =>
                    setForm({ ...form, schoolContactPhone: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label className="font-semibold text-[12px]">
                SCHOOL ADDRESS
              </label>
              <input
                type="text"
                name="schoolAddress"
                className="w-full outline-0 border-[1px] h-[100px] md:h-[150px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                value={form.schoolAddress}
                onChange={(e) =>
                  setForm({ ...form, schoolAddress: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        {message && (
          <div>
            <p className="text-red">An error occurred.Please try again</p>
          </div>
        )}
        <div className="flex md:justify-end">
          <button
            onClick={handleForm}
            className="text-white bg-blue py-2 px-6 rounded-lg my-3"
          >
            {loading ? (
              <ClipLoader
                css={css`
                  display: block;
                  margin: 0 auto;
                `}
                size={24}
                color={"#FFFFFF"}
                loading={loading}
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

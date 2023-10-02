import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import adminprofile from "../../../assets/adminprofile.svg";
import adminPicture from "../../../assets/adminPicture.svg";
import { useRef, useState, useEffect, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CompleteSignUp = ({ formData, id }) => {
  const navigate = useNavigate();
  const [cover, setCover] = useState("");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("")
  const options = useMemo(() => countryList().getData(), []);
  const ref = useRef(null);
  const file = useRef(null);
  const [form, setForm] = useState({
    schoolName: "",
    schoolShortName: "",
    schoolOwner:"",
    country: "",
    schoolUrl: "",
    website: "",
    schoolType: "",
    schoolMotto:"",
    schoolAddress: "",
    stateOrProvince: "",
    schoolLogo:null,
    schoolContactPhone:"",
    schoolContactEmail:"",
    technicaLContactPhone:"",
    technicaLContactEmail:"",
    proprietorSignature:"",

  });

  const handleCoverInput = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleFileInput = (e) => {
    e.preventDefault;
    file.current.click();
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  const handlePhoneChange = (value) => {
    setForm({ ...form, schoolContactPhone: value });
  };

  const handleCountryChange = (value) => {
    const countryCode = value.label.toUpperCase();
    setForm({ ...form, country: countryCode });
  };

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://testmanagement.onrender.com/api/institution/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch ID");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setForm({
            ...form,
            schoolName: data.data.schoolName,
            schoolShortName: data.data.schoolShortName,
            schoolUrl: data.data.schoolUrl,
            adminPhone: data.data.adminPhone,
          });
        });
    }
    fetchData();
  }, []);



  
  async function handleSubmit(event) {

    // setLoading(true);
    console.log(form);

    try {
      const response = await fetch(
        `https://testmanagement.onrender.com/api/institution/completeregistration/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        console.log(window.location.href);
        // setLoading(false)
        navigate("/login");
      } else {
        const errorData = data || {};
        // setLoading(false);
        setMessage(errorData.message || "An error occurred.");
      }
    } catch (error) {
      // setLoading(false);
      setMessage("An error occurred.");
      console.error(error);
    }
  }
  return (
    // <FormContext.Provider value={{id, setId}}>
    // {console.log(id)}
    <div className="bg-formGray min-h-[50%]">
      <div className="my-container ">
        <div className="flex items-center  py-5 justify-between">
          <div>
            <h2>School Information</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-lightGrey w-10 h-10 rounded-full flex justify-center items-center">
              <img src={adminprofile} alt="" />
            </div>
            <h4>{formData.adminFirstName}</h4>
          </div>
        </div>
        <h4>School Information</h4>
        <div className="border-[1px] border-black border-dashed py-4 px-3 md:px-10 md:py-5 mt-7">
          <div>
            <label className="font-bold text-[13px]">
              SCHOOL NAME<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-sm py-3 px-3 mb-3"
              name="schoolName"
              value={form.schoolName}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between gap-8">
            <div className="w-1/2">
              <label className="font-bold text-[13px]">
                SCHOOL OWNER<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-3 px-3 mb-3"
                name="schoolShortName"
                value={form.schoolOwner}
                onChange={(e) =>
                  setForm({ ...form, schoolOwner: e.target.value })
                }
              />
            </div>
            <div className="w-1/2">
              <label className="font-bold text-[13px]">
                SCHOOL SHORT NAME<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-3 px-3 mb-3"
                name="schoolShortName"
                value={form.schoolShortName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label className="font-bold text-[13px]">
              SCHOOL TYPE<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
              value={form.schoolType}
              onChange={(e) =>
                setForm({ ...form, schoolType: e.target.value })
              }
            />
          </div>
          <div>
            <label className="font-bold text-[13px]">
              SCHOOL MOTTO<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
              value={form.schoolMotto}
              onChange={(e) =>
                setForm({ ...form, schoolMotto: e.target.value })
              }
            />
          </div>
          <div>
            <label className="font-bold text-[13px]">
              SCHOOL ADDRESS<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
              value={form.schoolAddress}
              onChange={(e) =>
                setForm({ ...form, schoolAddress: e.target.value })
              }
            />
          </div>
          <div>
            <label className="font-bold text-[13px]">
              COUNTRY<span className="text-red">*</span>
            </label>
            <Select options={options} onChange={handleCountryChange} />
          </div>
          <div>
            <label className="font-bold text-[13px]">
              STATE<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
              value={form.stateOrProvince}
              onChange={(e) =>
                setForm({ ...form, stateOrProvince: e.target.value })
              }
            />
          </div>
          <div>
            <label className="font-bold text-[13px]">
              WEBSITE<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
              value={form.website}
              onChange={(e) =>
                setForm({ ...form, website: e.target.value })
              }
            />
          </div>
          <div>
            <label className="font-bold text-[13px]">
              SCHOOL URL<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
              name="schoolUrl"
                value={form.schoolUrl}
                onChange={handleInputChange}

            />
          </div>
        </div>
        <div className="border-[1px] border-black border-dashed py-4 px-3 mt-10">
          <h3>School Logo</h3>
          <div className="flex flex-col  gap-3 justify-center items-center">
            <div className="bg-white px-3 py-3">
              <div className="bg-lightGrey h-20 w-20 rounded-full flex justify-center items-center">
                <img src={adminPicture} alt="" />
              </div>
            </div>
            <div>
              <button className="bg-white" onClick={handleCoverInput}>
                Upload Photo
              </button>
            </div>
            <input
              type="file"
              name=""
              id=""
              ref={ref}
              value={cover}
              className="hidden"
              onChange={(e) =>
                setForm({ ...form, schoolLogo: e.target.files[0]})
              }
            />
          </div>
          <h3>Select school colour</h3>
          <input type="color" name="" id="" />
        </div>
        <div className="mt-10">
          <h3>School Contact</h3>
          <div className="border-[1px] border-black border-dashed py-4 px-3 ">
            <div>
              <label className="font-bold text-[13px]">
                PHONE NUMBER<span className="text-red">*</span>
              </label>
              <PhoneInput
                country={"us"}
                inputProps={{ required: true }}
                value={form.schoolContactPhone}
                onChange={handlePhoneChange}
                containerStyle={{
                  border:"2px  dashed black",
                  borderRadius: "6px"
                }}
                // className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
              />
            </div>
            <div>
              <label className="font-bold text-[13px]">
                EMAIL<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
                name="adminPhone"
                value={form.schoolContactEmail}
                onChange={(e) =>
                  setForm({ ...form, schoolContactEmail: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3>Technical Contact</h3>
          <p>
            Technical Contact is the information of the lead ICT/Technical
            Engineer/System Information Personnel managing the system. All
            technical or system issues will be addressed to this contact.
          </p>
          <div className="border-[1px] border-black border-dashed py-4 px-3 mt-5">
            <div>
              <label className="font-bold text-[13px]">
                PHONE NUMBER<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
                value={form.technicaLContactPhone}
                onChange={(e) =>
                  setForm({ ...form, technicaLContactPhone: e.target.value })
                }
                
              />
            </div>
            <div>
              <label className="font-bold text-[13px]">
                EMAIL<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[2px] bg-lightGrey border-black border-dashed rounded-md py-2 px-3 mb-3"
                name="technicaLContactEmail"
                value={form.technicaLContactEmail}
                onChange={(e) =>
                  setForm({ ...form, technicaLContactEmail: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mt-10">
            <h3 className="py-2">Proprietor’s Signature</h3>
            <div className="border-[1px] border-black border-dashed py-4 px-3 ">
              <h3>Select Signature Image</h3>
              <div className="flex flex-col justify-center items-center gap-3 my-3">
                <div className="bg-white px-3 py-3">
                  <div className="bg-lightGrey h-20 w-20 rounded-full flex justify-center items-center">
                    <img src={adminPicture} alt="" />
                  </div>
                </div>
                <div>
                  <button className="bg-white" onClick={handleFileInput}>
                    Upload Photo
                  </button>
                </div>
                <input
                  type="file"
                  name=""
                  id=""
                  value={input}
                  ref={file}
                  className="hidden"
                  onChange={(e) =>
                    setForm({ ...form,  proprietorSignature: e.target.files[0]})
                  }

                />
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center py-5">
            <button onClick={handleSubmit} className="bg-blue text-white px-8 py-3 rounded-2xl">
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
    // </FormContext.Provider>
  );
};

export default CompleteSignUp;
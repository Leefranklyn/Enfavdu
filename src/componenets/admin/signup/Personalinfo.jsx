import React, { useState, useContext } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormContext from "../../../context/FormContext";

const Personalinfo = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [showPassword, setShowPassword] = useState(false);


  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phoneNumber: value });
  };

  

  return (
    <div>
      <div className="md:flex md:justify-between">
        <div>
          <label className="font-bold text-[13px]">
            FIRST NAME<span className="text-red">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g John"
            className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="font-bold text-[13px]">
            LAST NAME<span className="text-red">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g Doe"
            className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>
      <div className="md:flex justify-between">
        <div>
          <label className="font-bold text-[13px]">
            EMAIL ADDRESS<span className="text-red">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g johndoe@example.com"
            className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label className="font-bold text-[13px]">
            PHONE NUMBER<span className="text-red">*</span>
          </label>
          <PhoneInput
            country={"us"}
            inputProps={{ required: true }}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            // className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
          />
        </div>
      </div>
      <div>
        <label className="font-bold text-[13px]">
          PASSWORD<span className="text-red">*</span>
        </label>
        <div className="md:w-[60%]">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full  outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-2"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" onChange={toggle} />
          <label className="text-xs">View Password</label>
        </div>
      </div>
      <div className="my-3 italic">
        <p className="text-red underline">Password must Contain</p>
        <ul className="list-disc list-inside">
          <li>Minimum of 8 characters</li>
          <li>One uppercase letter and One lowercase</li>
          <li>One number</li>
          <li>One special character</li>
        </ul>
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
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            />
            <label>MALE</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="gender"
              id=""
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            />
            <label>FEMALE</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Personalinfo;

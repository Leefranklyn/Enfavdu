import React from "react";

const Personalinfo = () => {
  return (
    <div>
      <div>
        <label className="font-bold text-[13px]">
          FIRST NAME<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g John"
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
        />
      </div>
      <div>
        <label className="font-bold text-[13px]">
          LAST NAME<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g Doe"
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
        />
      </div>
      <div>
        <label className="font-bold text-[13px]">
          EMAIL<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g johndoe@example.com"
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
        />
      </div>
      <div>
        <label className="font-bold text-[13px]">
          EMAIL<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g johndoe@example.com"
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
        />
      </div>
      <div>
        <label className="font-bold text-[13px]">
          PASSWORD<span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name=""
          id=""
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
        />
      </div>
      <div>
        <p>Password must Contain</p>
        <ul>
          <li>Minimum of 8 characters</li>
          <li>One uppercase letter and One lowercase</li>
          <li>One number</li>
          <li>One special character</li>
        </ul>
      </div>
      <fieldset>
        <label className="font-bold text-[13px]">
          GENDER<span className="text-red-500">*</span>
        </label>
        <label >MALE</label>
        <input type="radio" name="" id="" />
        <label >FEMALE</label>
        <input type="radio" name="" id="" />
      </fieldset>
    </div>
  );
};

export default Personalinfo;

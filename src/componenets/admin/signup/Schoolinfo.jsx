import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'




const Schoolinfo = () => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = value => {
    setValue(value)
  }

  return (
    <div>
      <div className="my-4">
        <p>A bit of information about the school you work and represent</p>
      </div>
      <div>
        <label className="font-bold text-[13px]">
          SCHOOL NAME<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g KadBiz Institute"
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
        />
      </div> 
      <div className="md:flex gap-5">
        <div>
          <label className="font-bold text-[13px]">
            SCHOOL SHORT NAME<span className="text-red">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g KadBiz "
            className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
          />
        </div>
        <div>
          <label className="font-bold text-[13px]">
            COUNTRY<span className="text-red">*</span>
          </label>
         <Select  options={options} value={value} onChange={changeHandler} />
        </div>
      </div>
      <div className="my-4">
        <input
          type="text"
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3"
        />
        <p className="text-[13px]">
          This will be the main url link to your portal
        </p>
      </div>
      <div>
        <label className="font-bold text-[13px]">
          SCHOOL WEBSITE<span className="text-red">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g www.kadbizinstitute.com "
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
        />
      </div>
     
    </div>
  );
};

export default Schoolinfo;

import React, { useState, useMemo, useContext } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import FormContext from "../../../context/FormContext";

const Schoolinfo = ({ path, setPath }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const handleInputChange = (e) => {
    setPath(e.target.value);
  };
  const handleCountryChange = (value) => {
    const countryCode = value.label.toUpperCase();
    setFormData({ ...formData, country: countryCode });
  };
  const handleMirrorInput = () => {
   
   console.log(path)
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
          value={formData.schoolName}
          onChange={(e) =>
            setFormData({ ...formData, schoolName: e.target.value })
          }
        />
      </div>
      <div className="md:flex gap-5 w-full">
        <div>
          <label className="font-bold text-[13px]">
            SCHOOL SHORT NAME<span className="text-red">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g KadBiz "
            className="w-full  outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
            value={formData.schoolShortName}
            onChange={(e) =>
              setFormData({ ...formData, schoolShortName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="font-bold text-[13px]">
            COUNTRY<span className="text-red">*</span>
          </label>
          <div className="lg:w-[20rem] md:w-[17rem]">
            <Select
              options={options}
              onChange={handleCountryChange}
            />
          </div>
        </div>
      </div>
      <div className="my-4">
        <input
          type="text"
          className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
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
          value={formData.schoolUrl}
          onChange={(e) =>
            setFormData({ ...formData, schoolUrl: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Schoolinfo;

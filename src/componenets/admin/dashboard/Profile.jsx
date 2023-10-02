import React, { useState } from 'react'
import star from "../../../assets/Star.svg"
import { Link } from 'react-router-dom'

const Profile = () => {
    const [form, setForm] = useState({

    })
  return (
    <div className='my-container py-16'>
      <div className="md:flex md:justify-between items-end">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className='w-[200px] h-[200px] border-[1px] border-grey'>
                <img src="" alt="" />
              </div>
              <div>
                  <h3 className='font-bold text-3xl'>Umu Kuru</h3>
                  <div className='bg-green py-2 px-2 rounded-lg mt-2'>
                    <p className='text-center'>Active</p>
                  </div>
                  <div className='flex gap-2 items-center '>
                    <img src={star} alt="" />
                    <h3 className='font-bold text-xl pt-2'>Super Admin</h3>
                  </div>
              </div>
          </div>
          <div className='flex gap-3 justify-center my-6'>
            <button className='bg-blue text-white py-3 px-5 text-sm rounded-md'>Change Email</button>
            <Link to="/dashboard/editprofile"><button className='border-[1px] border-blue text-blue py-3 px-5 text-sm rounded-md'>Edit Profile</button></Link>
          </div>
      </div>
      <div>
      <div className=" py-4 px-3 md:px-10 md:py-5 mt-7">
          <div className="md:flex gap-8">
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
              <div className='md:1/2'>
                <label className="font-semibold text-[12px]">
                 LAST NAME
                </label>
                <input
                  type="text"
                  className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                  name="schoolShortName"
                  // value={form.schoolOwner}
                  // onChange={(e) =>
                  //   setForm({ ...form, schoolOwner: e.target.value })
                  // }
                />
              </div>
              <div className="">
              <label className="font-semibold text-[12px]">
                OTHER NAME
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolShortName"
                // value={form.schoolShortName}
                // onChange={handleInputChange}
              />
            </div>
          </div>
           
          <div className="md:flex gap-8">
            <div>
              <label className="font-semibold text-[12px]">
                EMAIL ADDRESS
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
            <div>
              <label className="font-semibold text-[12px]">
                DATE OF BIRTH
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
          </div>
          <div className="md:flex gap-8">
            <div>
              <label className="font-semibold text-[12px]">
                COUNTRY
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.website}
              //   onChange={(e) =>
              //     setForm({ ...form, website: e.target.value })
              //   }
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
                SCHOOL NAME<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                  // value={form.schoolUrl}
                  // onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
                SCHOOL ADDRESS<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                  // value={form.schoolUrl}
                  // onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="md:flex gap-8">
            <div>
              <label className="font-semibold text-[12px]">
                SCHOOL EMAIL<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                  // value={form.schoolUrl}
                  // onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="font-semibold text-[12px]">
                SCHOOL WEBSITE<span className="text-red">*</span>
              </label>
              <input
                type="text"
                className="w-full outline-0 border-[1px] bg-lightGrey border-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                  // value={form.schoolUrl}
                  // onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

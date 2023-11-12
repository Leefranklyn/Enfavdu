import React, { useState, useEffect, useContext } from 'react'
import star from "../../../assets/Star.svg"
import { Link, useNavigate } from 'react-router-dom'
import LoginContext from "../../../context/LoginContext";


const Profile = () => {
    const [form, setForm] = useState({

    })
    const navigate = useNavigate()
  const { userId } = useContext(LoginContext);
  const [admin, setAdmin] = useState("");

  const jwt = localStorage.getItem("jwt");
  const id = localStorage.getItem("id");

  const checkTokenExpiration = async () => {
    const jwt = localStorage.getItem("jwt");
    const expirationTime = localStorage.getItem("expirationTime");

    if (jwt && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > parseInt(expirationTime)) {
        // Token has expired, navigate the user to the login page
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        credentials: "include",
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/institution/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        console.log(data);
        const adminName = data.data;
        console.log(adminName);
        setAdmin(adminName);
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, [jwt, id]);
  
  return (
    <div className='my-container py-16'>
      <div className="md:flex md:justify-between items-end">
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className='w-[200px] h-[200px] border-[1px] border-grey'>
                <img src={admin && admin.adminProfilePhoto} alt="" className='w-full h-full object-contain' />
              </div>
              <div>
                  <h3 className='font-bold text-3xl'>{admin && admin.adminFirstName} {admin && admin.adminLastName}</h3>
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolName"
                value={admin && admin.adminFirstName}
                readOnly
              //   onChange={handleInputChange}
              />
            </div>
              <div className='md:1/2'>
                <label className="font-semibold text-[12px]">
                 LAST NAME
                </label>
                <input
                  type="text"
                  className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
                  name="schoolShortName"
                value={admin && admin.adminLastName}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolType}
                value={admin && admin.adminEmail}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolMotto}
                value={admin && admin.adminPhone}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.schoolAddress}
                value={admin && admin.adminDateOfBirth}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
              //   value={form.website}
                value={admin && admin.country}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                value={admin && admin.schoolName}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                value={admin && admin.schoolAddress}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                value={admin && admin.schoolContactEmail}
                readOnly
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
                className="w-full outline-0 border-b-[1px] bg-lightGrey border-b-black border-dashed rounded-sm py-2 px-3 mb-3"
                name="schoolUrl"
                value={admin && admin.website}
                readOnly
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

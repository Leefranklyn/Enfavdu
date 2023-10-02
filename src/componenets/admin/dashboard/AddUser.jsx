import React, { useState, useRef, useContext } from "react";
import Header from "./Header";
import solid from "../../../assets/solid.svg";
import LoginContext from "../../../context/LoginContext";
import { Form, useNavigate } from "react-router-dom";


const AddUser = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { userId } = useContext(LoginContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("")
  const [cover, setCover] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [profilePhoto, setProfilePhoto] = useState("");
  
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePhoto: "",
    userName: "",
  });

  const handleCoverInput = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleUpload = async() => {
    console.log(cover)
    console.log(form)
    if (form.password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    } else {
      setMessage("");
    }
    
    // try {
    //   const jwt = localStorage.getItem('jwt');
    
    //   const response = await fetch(
    //     `https://testmanagement.onrender.com/api/user/signup/${userId}`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Authorization": `Bearer ${jwt}`, // Include the JWT token in the Authorization header
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify(form),
    //     }
    //   );
    
    //   const data = await response.json();
    
    //   if (response.ok) {
    //     console.log(data);
    //     navigate("/user/login")
    //   } else {
    //     const errorData = data || {};
    //     // Handle the error
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    const jwt = localStorage.getItem('jwt');
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('userName', userName);

    if (profilePhoto) {
      formData.append('profilePhoto', profilePhoto, profilePhoto.name);
    }

    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    fetch(`https://testmanagement.onrender.com/api/user/signup/${userId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  };
 
  return (
    <div className="bg-lightGrey min-h-[100vh]">
      <Header />
      <div className="my-container py-9 flex flex-col justify-center">
        <div className="md:flex md:gap-16">
          <div className="md:w-1/2">
            <label className="font-bold text-[13px]">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-bold text-[13px]">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="md:flex gap-16">
          <div className="md:w-1/2">
            <label className="font-bold text-[13px]">Email</label>
            <input
              type="text"
              name="email"
              placeholder="name@example.com"
              className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-bold text-[13px]">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
              value={form.userName}
              onChange={(e) =>
                setForm({ ...form, userName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="md:flex gap-16">
          <div className="md:w-1/2">
            <label className="font-bold text-[13px]">Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter user password"
              className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>
          <div className="md:w-1/2">
            <label className="font-bold text-[13px]">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter Password"
              className="w-full outline-0 border-[1px] border-gray rounded-md py-2 px-3 mb-3"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />
          </div>
        </div>
        <p className="text-red">{message}</p>
        <div className="">
          <div onClick={handleCoverInput} className="flex justify-center">
            <img src={solid} alt="" />
          </div>
          <input
            type="file"
            name="profilePhoto"
            id=""
            ref={ref}
            value={cover}
            className="hidden"
            onChange={(e) =>
              setForm({ ...form, profilePhoto: e.target.files[0] })
            }
          />
        </div>
        <div className="flex justify-center items-center my-5">
          <button onClick={handleUpload} className="bg-blue text-white py-2 px-6 rounded-md">Create User</button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

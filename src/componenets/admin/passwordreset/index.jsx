import React, { useState } from "react";
import ConfirmEmail from "./ConfirmEmail";
import Otp from "./Otp.jsx";
import OtpContext from "../../../context/OtpContext"
import CreateNewPassword from "./CreateNewPassword";
import SuccessModal from "./SuccessModal";

const ResetPassword = () => {
  const [page, setPage] = useState("confirmEmail");
  const [id , setId] = useState("")

  const [form, setForm] = useState({
    adminEmail : "",
  })



 const handleEmail = async () => {
  console.log(form)
  try {
    const response = await fetch(
      "https://testmanagement.onrender.com/api/admin/requestotp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // Send user credentials
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log('yesss')
      console.log(data)
      const otpId = data.otp._id;
      setId(otpId)
      setPage("otp")
      console.log(otpId)
      // Successful login, perform necessary actions (e.g., redirect)
    } else {
      // Handle authentication errors (e.g., show error message)
    }
  } catch (error) {
    // Handle network errors
  }
};

  const pageDisplay = () => {
    if (page === "confirmEmail") {
      return <ConfirmEmail form={form} setForm={setForm} handleEmail={handleEmail} />;
    } else if (page === "otp") {
      return <Otp  id={id}/>;
    }else if (page === 2) {
      return <CreateNewPassword/>
    }else if (page === 3) {
      return <SuccessModal/>
    }
  };
  return (
    <>
      <div className="h-[100vh] bg-lightGrey">
        {pageDisplay()}
        {/* <ConfirmEmail page={page} setPage={setPage} />
        {<SuccessModal/>}
        <Otp/>
        <CreateNewPassword/> */}
      </div>
    </>
  );
};

export default ResetPassword;

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Otp = ({id, page, setPage}) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
   if(isNaN(element.value)) return false;

   setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

   if (element.nextSibling) {
     element.nextSibling.focus();
   }

  }
  
  const handleOtp = async () => {
    console.log(otp)
    const enteredOTP = otp.join('');
    console.log(JSON.stringify({ otp: enteredOTP }))
    try {
      const response = await fetch(
        `https://testmanagement.onrender.com/api/admin/verifyotp/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp: enteredOTP }), // Send user credentials
        }
      );
      const data = await response.json();
      if (response.ok) {
        setPage("create")
        console.log('yesss')
        console.log(data)
        // Successful login, perform necessary actions (e.g., redirect)
      } else {
        // Handle authentication errors (e.g., show error message)
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <div className="h-[100%] flex justify-center">
      <div className="bg-white h-[50%] md:h-[65%] w-[90%] max-w-[400px] flex flex-col justify-center md:gap-y-5 my-auto text-center py-12 px-3 rounded-lg shadow-xl">
        <div>
          <h4 className="text-[20px]  md:text-[25px] font-bold">
            You&apos;ve Got Email
          </h4>
          <p>
            We have sent the OTP verification code to your email address check
            your email and enter the code below.{" "}
          </p>
          <div className="py-5 flex flex-col items-center">
            <div className="otp-input flex justify-center gap-4 w-[80%] mx-auto">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  className="w-[35px] h-[35px] border text-center"
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  maxLength="1"
                />
              ))}
            </div>
            <div className="text-blue">
              <Link>Didn&apos;t receive email?</Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button onClick={handleOtp} className="bg-blue text-white py-2 px-8 rounded-md">
              Confirm
            </button>
          </div>
          <Link to="/signup" className="text-blue text-sm">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Otp;

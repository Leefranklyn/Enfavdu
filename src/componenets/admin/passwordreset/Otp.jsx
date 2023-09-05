import React from 'react'
import { Link } from 'react-router-dom'


const Otp = () => {
  return (
    <div className="h-[100%] flex justify-center">
    <div className="bg-white h-[50%] md:h-[65%] w-[90%] max-w-[400px] flex flex-col justify-center md:gap-y-5 my-auto text-center py-12 px-3 rounded-lg shadow-xl">
      <div>
          <h4 className="text-[20px]  md:text-[25px] font-bold">You&apos;ve Got Email</h4>
          <p>We have sent the OTP verification code to your email address check your email and enter the code below. </p>
          <div className="py-5 flex flex-col items-start">
              <input type="text" placeholder="Email ,phone & username" className="w-[100%] mx-auto py-2 px-4 rounded-md border-gray border-[1px]" />
              <div>
                  <Link>Forgot Email?</Link>
              </div>
          </div>
      </div>
      <div><button className="bg-blue text-white py-2 px-8 rounded-md">Send Reset Link</button></div>
      <Link to="/signup" className="text-blue text-sm">Back to Sign In</Link>
    </div>
  </div>
  )
}

export default Otp

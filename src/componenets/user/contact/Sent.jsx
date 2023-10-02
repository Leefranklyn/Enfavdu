import React from 'react'
import success from "../../../assets/success.svg"

const Sent = () => {
  return (
    <div className='flex justify-center'>
       <div className="bg-white h-[300px]  w-[90%] max-w-[350px] flex flex-col justify-center items-center    md:gap-y-5 my-auto text-center px-2 rounded-lg shadow-xl">
        <div className=" w-20 mx-auto">
          <img src={success} alt="" />
        </div>
        <h4 className="font-semibold text-[23px]">Message sent successfully!</h4>
        <p className="text-[14px] px-3">your message has been successfully sent</p>
      </div>
    </div>
  )
}

export default Sent

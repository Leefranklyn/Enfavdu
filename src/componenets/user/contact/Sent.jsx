import React from 'react'

const Sent = () => {
  return (
    <div>
       <div className="bg-white h-[50%]  w-[90%] max-w-[350px] flex flex-col  md:gap-y-5 my-auto text-center py-7 px-3 rounded-lg shadow-xl">
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

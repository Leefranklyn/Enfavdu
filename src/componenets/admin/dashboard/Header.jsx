import React, { useState, useContext } from 'react'
import Context from "../../../context/ToggleContext"
import bell from "../../../assets/Notification.svg"
import hamburger from "../../../assets/Vector.svg";



const Header = () => {
 
  const {toggle, setToggle} = useContext(Context)
  console.log(toggle)
  const handleToggle = () => {
    setToggle(!toggle);
    !toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };
  
  return (
    <div className='bg-lightGrey md:bg-white '>
      <div className='py-6 md:py-4 flex items-center justify-between  w-[80%] mx-auto'>
         <div className='md:hidden' onClick={handleToggle}>
           <img src={hamburger} alt="" />
         </div>
          <div className='text-[15px] hidden md:block text-linkGrey'>
              <label htmlFor="">Sort by:</label>
              <select name="" id="" className='border-linkGrey border-[1px] px-1 mx-1 outline-none'>
                <option value="">Last Week</option>
                <option value="">This Week</option>
              </select>
          </div>
          <div className=' items-center  hidden md:flex gap-1'>
             <img src={bell} alt="" />
             <div className='w-8 h-8 bg-blue rounded-full text-white flex justify-center items-center'>U</div>
          </div>
      </div>
    </div>
  )
}

export default Header
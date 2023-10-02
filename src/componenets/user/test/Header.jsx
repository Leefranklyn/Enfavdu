import React from 'react'
import person from "../../../assets/Ellipse6.svg"

const Header = () => {
  return (
    <div className=" mt-3  flex items-center justify-between md:gap-32 lg:gap-72" >
      <input type="text" placeholder='Search' className='w-full px-10 py-2'/>
      <div className='w-full'>
        <img src={person} alt="" />
      </div>
    </div>
  )
}

export default Header

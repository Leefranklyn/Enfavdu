import React from 'react'
import Header from './Header'

const EditProfile = () => {
  return (
    <div>
      <Header/>
      <div  className='my-container py-6 min-h-[100vh] bg-lightGrey'>
      <div className="flex justify-center items-center"><button className=' bg-blue text-white py-3 px-5 text-sm rounded-md'>Edit Profile</button></div>
      <div>
        <input type="text" />
      </div>
      </div>
    </div>
  )
}

export default EditProfile

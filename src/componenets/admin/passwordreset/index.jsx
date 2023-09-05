import React from 'react'
import ConfirmEmail from './ConfirmEmail';
import Otp from './Otp.jsx';
import CreateNewPassword from './CreateNewPassword';
import SuccessModal from './SuccessModal';

const ResetPassword = () => {
  return (
    <>
   
    <div className='h-[100vh] bg-lightGrey'>
      <ConfirmEmail/>
      {/* {<SuccessModal/>} */}
      {/* <Otp/> */}
      {/* <CreateNewPassword/> */}
    </div>
    </>
  )
}

export default ResetPassword;

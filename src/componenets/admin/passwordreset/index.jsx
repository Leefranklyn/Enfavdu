import React from 'react'
import ConfirmEmail from './ConfirmEmail';
import Otp from './Otp.JSX';
import CreateNewPassword from './CreateNewPassword';

const ResetPassword = () => {
  return (
    <div className='h-[100vh] bg-lightGrey'>
      <ConfirmEmail/>
      {/* <Otp/> */}
      {/* <CreateNewPassword/> */}
    </div>
  )
}

export default ResetPassword;

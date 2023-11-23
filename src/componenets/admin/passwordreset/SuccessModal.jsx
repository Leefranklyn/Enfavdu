import success from "../../../assets/success.svg";
import { Link } from "react-router-dom";

const SuccessModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-lightGrey flex justify-center">
      <div className="bg-white h-[50%]  w-[90%] max-w-[350px] flex flex-col  md:gap-y-5 my-auto text-center py-7 px-3 rounded-lg shadow-xl">
        <div className=" w-20 mx-auto">
          <img src={success} alt="" />
        </div>
        <h4 className="font-semibold text-[23px]">Reset password Successful!</h4>
        <p className="text-[14px] px-3">your password has been successfully changed</p>
        <Link to="/login"><button className="bg-blue text-white py-2 px-8 rounded-md">Go to Sign in</button></Link>
      </div>
      
    </div>
  );
};

export default SuccessModal;

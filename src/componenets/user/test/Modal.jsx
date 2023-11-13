import { Link } from "react-router-dom"
import success from '../../../assets/success.svg'

const Modal = ({ path }) => {


    return (
        <div className="fixed top-0 left-0 w-full h-full bg-overlay flex justify-center">
            <div className="bg-white h-[50%]  w-[90%] max-w-[350px] flex flex-col  md:gap-y-5 my-auto text-center py-7 px-3 rounded-lg shadow-xl">
                <div className=" w-20 mx-auto">
                    <img src={success} alt="" />
                </div>
                <h4 className="font-semibold text-[23px]">Submitted Successfully!</h4>
                <p className="text-[14px] px-3">your quiz has been successfully submitted, you will be contacted via email with further instructions.</p>
                <p className="text-[14px] px-3 pb-0">go back to</p>
                <Link to={`/user/${path}`}><button className="bg-blue m-0 text-white py-2 px-8 rounded-md">Home</button></Link>
            </div>

        </div>

    )
}

export default Modal
import { Link } from "react-router-dom"

const Modal = ({path}) => {


    return (
        <div>
            <div className="bg-overlay h-[100vh]  w-[100%] top-0 left-0 fixed z-50 flex items-center md:justify-end justify-center ">
                <div className="bg-white  mx-auto rounded-lg h-[35%] md:h-[45%]  w-[75%] md:w-[40%] flex flex-col gap-y-10 justify-center  text-center text-[20px] p-[20px] font-medium">
                    Test submitted successfully! We&apos;ll get in touch with you soon.
                    <div className="flex justify-center text-white gap-5">
                        <Link to={`/user/${path}`}><button className="bg-green py-2 px-10 rounded-lg">Go to Home</button></Link>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
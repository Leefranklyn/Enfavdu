import { useState, useContext, useEffect } from 'react'
import Context from "../../../context/ToggleContext"
import bell from "../../../assets/Notification.svg"
import hamburger from "../../../assets/Vector.svg";
import { Link } from 'react-router-dom';



const Header = () => {
 
  const {toggle, setToggle} = useContext(Context)
  const id = localStorage.getItem("id");
  const jwt = localStorage.getItem("jwt");
  const [admin, setAdmin] = useState([])

  const handleToggle = () => {
    setToggle(!toggle);
    // !toggle
    //   ? (document.body.style.overflow = "hidden")
    //   : (document.body.style.overflow = "unset");
  };

  useEffect(() => {
    async function fetchData() {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        credentials: "include",
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/admin/institution/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch TEST");
        }
        const data = await response.json();
        console.log(data.data)
        setAdmin(data.data)
      } catch (error) {
        // Handle the error
      }
    }

    fetchData();
  }, [id, jwt]);
  
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
          <div className=' items-center flex  gap-1'>
             <div><img src={bell} alt="" /></div>
             <Link to="/dashboard/profile">
            <div className='w-8 h-8 bg-blue rounded-full text-white flex justify-center items-center'>{admin.adminFirstName && admin.adminFirstName.charAt(0)}</div>
             </Link>
          </div>
      </div>
    </div>
  )
}

export default Header

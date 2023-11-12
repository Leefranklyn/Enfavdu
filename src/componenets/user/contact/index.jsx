import { useState } from "react";
import UserNav from "../../../layout/UserNav";
import UserFooter from "../../../layout/UserFooter";
import Message from "./Message";
import Sent from "./Sent"

const Contact = () => {
  const [page, setPage] = useState("message")
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });



  const handleMessage = async () => {
    console.log(contact)
    try {
      const response = await fetch(
        "https://testmanagement2.onrender.com/api/contact",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact), // Send user credentials
        }
      );
      const data = await response.json();
      if (response.ok) {
        setPage("success")
        console.log("yesss");
        console.log(data);

        
        // Successful login, perform necessary actions (e.g., redirect)
      } else {
        // Handle authentication errors (e.g., show error message)
      }
    } catch (error) {
      // Handle network errors
    }
  };

  const pageDisplay = () => {
    if (page === "message") {
      return <Message contact={contact} setContact={setContact} handleMessage={handleMessage}/>;
    } else if (page === "success") {
      return <Sent/>;
    }
  }

  return (
    <>
      <UserNav />
      <div className=" h-[100%] flex justify-center items-center my-14 md:py-10 lg:py-16  md:bg-contact md:bg-no-repeat md:bg-center md:bg-contain">
        <div className="w-[90%] md:w-[350px] ">
          <h3 className="text-[25px] font-extrabold text-center z-[-10]">
            Contact Us
          </h3>
         <div className="">
          {pageDisplay()}
         </div>
        </div>
      </div>
      <UserFooter />
    </>
  );
};

export default Contact;

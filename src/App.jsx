import Home from "./componenets/admin/Home";
import HomePage from "./componenets/user/home";
import SignUp from "./componenets/admin/signup";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./componenets/admin/login";
import ResetPassword from "./componenets/admin/passwordreset";
import Dashboard from "./componenets/admin/dashboard"
import Contact from "./componenets/user/contact";
import Overview from "./componenets/admin/dashboard/Overview";
import UserLogin from "./componenets/user/login";
import { useState } from "react";
import FormContext from "../src/context/FormContext"
import Scores from "./componenets/admin/dashboard/Scores";
import CompleteSignUp from "./componenets/admin/signup/CompleteSignUp";

function App() {
  const [path, setPath] = useState ("run")
  console.log(path)
  const [formData, setFormData] = useState({
    schoolName: "",
    shortName: "",
    country: "",
    url: "",
    schoolWebsite: "",
    firstName: "",
    department: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  })
 
  return (
    <>
        <FormContext.Provider value={{formData , setFormData}}>
          {console.log(formData.url)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home path={path} />} />
          <Route path="/signup" element={<SignUp path={path}  setPath={setPath}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/completesignup" element={<CompleteSignUp/>}/>
          <Route path="/passwordreset" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="/dashboard" element={<Overview/>}/>
            <Route path="/dashboard/scores" element={<Scores/>}/>
          </Route>
          <Route path="/user/:path" element={<HomePage/>}/>
          {console.log(path)}
          <Route path="/user/contact" element={<Contact/>} />
          <Route path="/user/login"  element={<UserLogin/>} />
        </Routes>
      </BrowserRouter>
          </FormContext.Provider>
    </>
  );
}

export default App;

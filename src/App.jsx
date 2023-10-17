import Home from "./componenets/admin/Home";
import HomePage from "./componenets/user/home";
import SignUp from "./componenets/admin/signup";
import LoginContext from "./context/LoginContext";
import UserLoginContext from "./context/UserLoginContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componenets/admin/login";
import ResetPassword from "./componenets/admin/passwordreset";
import Dashboard from "./componenets/admin/dashboard";
import Contact from "./componenets/user/contact";
import Overview from "./componenets/admin/dashboard/Overview";
import UserLogin from "./componenets/user/login";
import { useState } from "react";
import FormContext from "../src/context/FormContext";
import Scores from "./componenets/admin/dashboard/Scores";
import CompleteSignUp from "./componenets/admin/signup/CompleteSignUp";
import AddUser from "./componenets/admin/dashboard/AddUser";
import Test from "./componenets/user/test";
import Profile from "./componenets/admin/dashboard/Profile";
import EditProfile from "./componenets/admin/dashboard/EditProfile"
import Edit from "./componenets/admin/dashboard/Edit";

function App() {
  const [path, setPath] = useState("school");
  const [userId, setUserId] = useState("");
  const [id, setId] = useState("")
  // console.log(path);
  const [formData, setFormData] = useState({
    schoolName: "",
    shortName: "",
    country: "",
    schoolUrl: "",
    schoolWebsite: "",
    firstName: "",
    department: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  return (
    <>
      <FormContext.Provider value={{ formData, setFormData }}>
        <LoginContext.Provider value={{userId, setUserId}}>
          <UserLoginContext.Provider value={{id, setId}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home path={path} />} />
              <Route
                path="/signup"
                element={<SignUp path={path} setPath={setPath} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/completesignup" element={<CompleteSignUp />} />
              <Route path="/passwordreset" element={<ResetPassword />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard" element={<Overview />} />
                <Route path="/dashboard/adduser" element={<AddUser/>}/>
                <Route path="/dashboard/scores/" element={<Scores />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route path="/dashboard/editprofile" element={<EditProfile />} />
                <Route path="/dashboard/editquestion" element={<Edit/>}/>
              </Route>
              <Route path="/user/:path" element={<HomePage path={path}  setPath={setPath} />} />
              <Route path="/user/contact" element={<Contact />} />
              <Route path="/user/login" element={<UserLogin />} />
              <Route path="/user/test" element={<Test/>}/>
            </Routes>
          </BrowserRouter>
          </UserLoginContext.Provider>
        </LoginContext.Provider>
      </FormContext.Provider>
    </>
  );
}

export default App;

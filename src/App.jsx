import Home from "./componenets/admin/Home";
import HomePage from "./componenets/user/home";
import SignUp from "./componenets/admin/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componenets/admin/login";
import ResetPassword from "./componenets/admin/passwordreset";
import Dashboard from "./componenets/admin/dashboard"
import Contact from "./componenets/user/contact";
import Overview from "./componenets/admin/dashboard/Overview";
import UserLogin from "./componenets/user/login";

function App() {
  // const pathname = window.location.pathname;
  // console.log(pathname)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordreset" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="/dashboard" element={<Overview/>}/>
            <Route/>
          </Route>
          <Route path="/user/home" element={<HomePage/>}/>
          <Route path="/user/contact" element={<Contact/>} />
          <Route path="/user/login"  element={<UserLogin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

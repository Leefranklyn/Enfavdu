import Home from "./componenets/admin/Home";
import SignUp from "./componenets/admin/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./layout/Navbar";
// import Footer from "./layout/Footer";
import Login from "./componenets/admin/login";
import ResetPassword from "./componenets/admin/passwordreset";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

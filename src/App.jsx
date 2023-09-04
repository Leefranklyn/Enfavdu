import Home from "./componenets/admin/Home";
import SignUp from "./componenets/admin/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Login from "./componenets/admin/login";

function App() {
  const pathname = window.location.pathname
  return (
    <>
      <BrowserRouter>
        { pathname.includes ("/login") ? "" : <Navbar /> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        {pathname.includes ("/login") ? "" : <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;

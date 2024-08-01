import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgetPassword from "./Component/ForgetPassword";
import ResetPassword from "./Component/ResetPassword";
import Home from "./Component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/forgot" element={<ForgetPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

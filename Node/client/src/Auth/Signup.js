import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/auth/signup", {
        Name,
        Email,
        Mobile,
        Password,
      })
      .then((res) => {
        if (res.data.msg === "added") {
          toast.success("Signed up successfully!");
          navigate("/"); // Navigate immediately
        } else if (res.data.msg === "exist") {
          toast.error("Email ID already exists.");
        }
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again.");
        console.error(error);
      });
  }

  return (
    <>
      <h1 className="text-center">Signup</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              style={{ width: "300px" }}
              className="form-control"
              id="nameInput"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              style={{ width: "300px" }}
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="mobileInput" className="form-label">
              Mobile
            </label>
            <input
              onChange={(e) => setMobile(e.target.value)}
              type="number"
              style={{ width: "300px" }}
              className="form-control"
              id="mobileInput"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              style={{ width: "300px" }}
              className="form-control"
              id="passwordInput"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>
            Already have an account? <Link to="/">Click Here</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signup;

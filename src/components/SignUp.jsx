import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"

function SignUp() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/register", {name, email, password})
    .then(result=> {console.log(result)
    navigate("/login")
    })
    .catch(err=> console.log(err))
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="d-flex justify-content-center">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><b>Name</b></label>
            <input
              type="text"
              className="form-control rounded-0 mt-2"
              name="email"
              autoComplete="off"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email"><b>Email</b></label>
            <input
              type="email"
              className="form-control rounded-0 mt-2"
              autoComplete="off"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              className="form-control rounded-0 mt-2"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <p className="mt-3">If you have an account already</p>
          <Link to="/login" type="button" className="btn btn-outline-secondary w-100">Login</Link>
      </div>
    </div>
  );
}

export default SignUp;

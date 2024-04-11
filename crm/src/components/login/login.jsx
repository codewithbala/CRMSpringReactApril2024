import React, { useState } from "react"
import '../login/login.css'
import { useNavigate } from "react-router-dom"

export default function (props) {
  const [username, setUsername] = useState("username");
  const[password, setPassword] =  useState("password");

  const[usernameInput, setUsernameInput] = useState("");
  const[passwordInput, setPasswordInput] = useState("")
  let navigate = useNavigate();

  const submit = (e) => {
    console.log(username)
    console.log(usernameInput)

    console.log(password)
    console.log(passwordInput)
    e.preventDefault();
    setUsername("username");
    setPassword("password");

    if(password === passwordInput && username == usernameInput){
      props.setLoggedIn(true)
      navigate('/user');
    }else{
      
    }

  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form"  onSubmit={(e) => submit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              onChange={(e) => setUsernameInput(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPasswordInput(e.target.value)}
              
            />
            <p>{passwordInput}</p>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
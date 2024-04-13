import React, { useEffect, useState } from "react"
import '../login/login.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios';


export default function (props) {

  console.log(props)
  
  const [username, setUsername] = useState("username");
  const[password, setPassword] =  useState("password");

  const[usernameInput, setUsernameInput] = useState("");
  const[passwordInput, setPasswordInput] = useState("")
  const[response, setResponse] = useState(false)
  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setUsername("username");
    setPassword("password");

   let data = {
      "emailId": usernameInput,
      "password": passwordInput
    }
    callToPostApi(data)
  }

  const callToPostApi = (data) => {
    
      axios.post(`http://localhost:8080/api/login`, data).then(answer => {
      console.log(answer)
      setResponse(answer.data)
      unlockLoggedInPage(answer.data)

    }).catch(error => {
      console.log(error)
    })


  }

  const unlockLoggedInPage = (answer) => {

          //if response from the api was 'login successful' unlock the login page
          if(answer == "Login successful"){
            props.setLoggedIn(true)
            navigate('/user');
          }else{
            alert("Login Unsuccessful./.. please try again")
          }
  }

  useEffect(() => {

  },[response])

  async function getLogin(){
    // let data = {
    //   "username": usernameInput,
    //   "password": passwordInput
    // }

    // const response = await fetch(`http://localhost:8080/api/login`, data);
    // const answer = await response.json();
    // console.log(answer)



    // fetch('http://localhost:8080/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({username:usernameInput, password:passwordInput})
    // }).then(res => res.json())
    //   .then(res => console.log(res));
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
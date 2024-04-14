import React, { useEffect, useRef, useState } from "react"
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
  const [department, setDepartment] = useState();
  let navigate = useNavigate();


  //ref on form options to get department
  const departmentRef = useRef();



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
    let baseUrl = "http://localhost:8080/api";

    let apiMap = new Map();
    apiMap.set('business', `${baseUrl}/business-manager-login`);
    apiMap.set('training', `${baseUrl}/training-admin-login`)
    apiMap.set('hr', `${baseUrl}/hr-manager-login`)

    let apiEndpoint = apiMap.get(department)
    props.setTheDepartment(department)
    

      axios.post(apiEndpoint, data).then(answer => {
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
            if(department == 'business'){
              navigate('/business-manager-page');
            }
            if(department == 'hr'){
              navigate('/hr-manager-page');
            }
            if(department == 'training'){
              navigate('/training-admin-page');
            }
            
          }else{
            alert("Login Unsuccessful./.. please try again")
          }
  }

  useEffect(() => {
    
  },[department])


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

          <label>Department</label>
          <select className="form-select" aria-label="Default select example" ref={departmentRef} onChange={(e) => setDepartment(e.target.value)}>
            <option defaultValue={""}>Choose Department</option>
            <option value="hr">HR</option>
            <option value="business">Business Development</option>
            <option value="training">Training</option>
          </select>

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
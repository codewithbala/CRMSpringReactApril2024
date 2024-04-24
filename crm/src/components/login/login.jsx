import React, { useEffect, useRef, useState } from "react";
import "../login/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function (props) {
  console.log(props);

  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [response, setResponse] = useState(false);
  const [department, setDepartment] = useState();
  const[identity, setIdentity] = useState();
  const[hrManagerId, setHrManagerId] = useState("");
  const[departmentId, setDepartmentId] = useState("");
  let navigate = useNavigate();

  //ref on form options to get department
  const departmentRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    setUsername("username");
    setPassword("password");

    let data = {
      emailId: usernameInput,
      password: passwordInput,
    };
    callToPostApi(data);
  };


  const callToPostApi = (data) => {
    let baseUrl = "http://localhost:8080/api";

    let apiMap = new Map();
    apiMap.set("business", `${baseUrl}/business-manager-login`);
    apiMap.set("training", `${baseUrl}/training-admin-login`);
    apiMap.set("hr", `${baseUrl}/hr-manager-login`);
    apiMap.set("business-employee", `${baseUrl}/business/business-employee-login`);
    apiMap.set("training-employee", `${baseUrl}/training/training-employee-login`);
    apiMap.set("hr-employee", `${baseUrl}/hr/hr-employee-login`);

    let apiEndpoint = apiMap.get(department);
    props.setTheDepartment(department);
    localStorage.setItem("department", department)


    axios
      .post(apiEndpoint, data)
      .then((answer) => {
        // console.log(answer.data);
        const user = answer.data;
        localStorage.setItem("user", JSON.stringify(user));
          // props.setUser(user)
        // setIdentity(answer.data);
        // setHrManagerId(identity[0]);
        // let locationOfAdminId = answer.data.indexOf("id=")+3;
        // let locationOfDepartmentId = answer.data.indexOf("departmentId=")+13;
        // let managerId = answer.data.substring(locationOfAdminId,locationOfAdminId+1);
        // let deptId = answer.data.substring(locationOfDepartmentId,locationOfDepartmentId+1)
        
        //to grab the substring for the employees table

        // setDepartment(identity[2])
        setResponse(answer.data);
        unlockLoggedInPage(answer.status, answer.data);
      })
      .catch((error) => {
        alert("You have entered the wrong email/password")
        console.log(error);
      });
  };

  const unlockLoggedInPage = (answer, user) => {
    //if response from the api was 'login successful' unlock the login page
    if (answer == 200) {
      localStorage.setItem("loggedIn", true);

      props.setLoggedIn(localStorage.getItem("loggedIn") === "true");
      if (department == "business") {
        let departmentId = user.departmentId;
        let managerId = user.business_dev_admin_id;
        navigate(`/business-manager-page`);
      }
      if (department == "hr") {
        // navigate(`/hr-manager-page/`+departmentId+"/"+managerId);
        let departmentId = user.departmentId;
        let managerId = user.hr_manager_id;
        navigate(`/hr-manager-page`);
      }
      if (department == "training") {
        let departmentId = user.departmentId;
        let managerId = user.training_admin_id;
        navigate(`/training-admin-page`);
      }
      if(department == "training-employee"){
        navigate(`/employee-page`);
      }
      if(department == "business-employee"){
        navigate(`/employee-page`);
      }
      if(department == "hr-employee"){
        navigate(`/employee-page`);
      }
    } else {
      alert("Login Unsuccessful./.. please try again");
    }
  };

  const updatePassword = () => {
    navigate("updatePasswordCheck")
  }

  useEffect(() => {}, [department]);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => submit(e)}>
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
          <select
            className="form-select"
            aria-label="Default select example"
            ref={departmentRef}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option defaultValue={""}>Choose Position</option>
            <option value="hr">HR Manager</option>
            <option value="business">Business Development Admin</option>
            <option value="training">Training Manager</option>
            <option value="training-employee">Training-employee</option>
            <option value="business-employee">Business-employee</option>
            <option value="hr-employee">HR-employee</option>
          </select>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="" onClick={() => updatePassword()}>password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

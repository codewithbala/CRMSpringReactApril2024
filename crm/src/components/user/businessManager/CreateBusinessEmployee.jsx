// import BusinessManagerService from "./service/BusinessManagerService";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateBusinessEmployee() {
  // Corresponding form values stored in state
  const [superAdminId, setSuperAdminId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [job, setJob] = useState("");
  const [edLevel, setEdLevel] = useState("");
  const [sex, setSex] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [salary, setSalary] = useState("");
  const [midInitial, setMidInitial] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  let navigate = useNavigate();
  let params = useParams();

  // Other variables
  /* discuss with team tomorrow on how to structure this */

  const onSubmit = (e) => {
    const baseUrl = "http://localhost:8080/api/business";
    e.preventDefault();

    let body = {
      manager_id: params.managerId,
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      departmentId: params.deptId,
      password: password,
      hireDate: hireDate,
      job: job,
      edLevel: edLevel,
      sex: sex,
      birthdate: birthDate,
      salary: salary,
      midInitial: midInitial,
      phoneNum: phoneNum,
    };
    axios
      .post(`${baseUrl}/create-employee`, body)
      .then(() => {
        navigate(`/business-manager-page`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="display-4 m-2">Create Business Employee</h1>
          <div className="form-group m-2">
            <label className="m-1">Administator ID</label>
            <input
              type="text"
              className="form-control"
              id="superAdminId"
              name="superAdminId"
              required
              value={params.managerId}
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Department ID</label>
            <input
              type="text"
              className="form-control"
              id="departmentId"
              name="departmentId"
              value={params.deptId}
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="emailId"
              name="emailId"
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Set Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Hire Date</label>
            <input
              type="date"
              className="form-control"
              id="hireDate"
              name="hireDate"
              onChange={(e) => setHireDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Position Title</label>
            <input
              type="text"
              className="form-control"
              id="job"
              name="job"
              onChange={(e) => setJob(e.target.value)}
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Highest Level of Education</label>
            <select
              name="edLevel"
              onChange={(e) => setEdLevel(e.target.value)}
              className="form-control"
              id="edLevel"
            >
              <option>Choose an Option</option>
              <option value="GED or less">GED or less</option>
              <option value="High school diploma, no college">
                High school diploma
              </option>
              <option value="Some College">Some College</option>
              <option value="Associates Degree">Associates Degree</option>
              <option value="Bachelors Degree">Bachelors Degree</option>
              <option value="Masters Degree">Masters Degree</option>
              <option value="PhD/Doctorate">PhD/Doctorate</option>
              <option value="Vocational/Other">Vocational/Other</option>
            </select>
          </div>
          <div className="form-group m-2">
            <label className="m-1">Gender</label>
            <select
              name="sex"
              onChange={(e) => setSex(e.target.value)}
              className="form-control"
              id="sex"
            >
              <option>Choose an Option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group m-2">
            <label className="m-1">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="birthdate"
              name="birthdate"
              required
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Salary</label>
            <input
              type="text"
              className="form-control"
              id="salary"
              name="salary"
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Middle Initial</label>
            <input
              type="text"
              className="form-control"
              id="midInitial"
              name="midInitial"
              onChange={(e) => setMidInitial(e.target.value)}
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Phone Number</label>
            <input
              type="phone"
              className="form-control"
              id="phoneNum"
              name="phoneNum"
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Employee
          </button>
          <button type="submit" className="btn btn-danger">
            Reset Form
          </button>
        </form>
      </div>
    </div>
  );
}

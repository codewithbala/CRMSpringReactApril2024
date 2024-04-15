// import BusinessManagerService from "./service/BusinessManagerService";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  // Other variables
  /* discuss with team tomorrow on how to structure this */

  return (
    <div>
      <div className="container">
        <form action="#">
          <h1 className="display-4 m-2">Create Business Employee</h1>
          <div className="form-group m-2">
            <label className="m-1">Administator ID</label>
            <input
              type="text"
              className="form-control"
              id="superAdminId"
              name="superAdminId"
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Department ID</label>
            <input
              type="text"
              className="form-control"
              id="departmentId"
              name="departmentId"
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
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
              required
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Highest Level of Education</label>
            <select name="edLevel" className="form-control" id="edLevel">
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
            <select name="sex" className="form-control" id="sex">
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
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Salary</label>
            <input
              type="text"
              className="form-control"
              id="salary"
              name="salary"
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
            />
          </div>
          <div className="form-group m-2">
            <label className="m-1">Phone Number</label>
            <input
              type="phone"
              className="form-control"
              id="phoneNum"
              name="phoneNum"
              required
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
